<script lang="typescript">
  // Importing modules
  import { client } from '$services/graphql';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { TinyColor } from '@ctrl/tinycolor';

  // Queries
  import { RequestAuth } from 'src/queries';
  import type { RequestAuthResponse } from 'src/queries';

  import { ProcessAuth } from 'src/queries';
  import type { ProcessAuthResponse } from 'src/queries';

  import { ReplicateToken } from 'src/queries';
  import type { ReplicateTokenResponse } from 'src/queries';

  // Components
  import Icon from 'src/components/Icon.svelte';

  // Stores
  import { page } from '$app/stores';
  import { AuthCallback, AuthDesign } from '$stores/auth';

  // checkCode function
  async function checkCode() {
    loading = true;
    
    // Sending ProcessAuthentication mutation to server
    try {
      const processAuthResponse = await client.mutate<ProcessAuthResponse>(ProcessAuth, {
        variables: {
          email: $AuthCallback.identity,
          code
        },
      });

      // Emitting redirect function
      redirect(processAuthResponse?.data?.ProcessAuthentication?.token?.secret);
    } catch {
      // +todo show error to user
      loading = false;
    };
  };

  // redirect function
  async function redirect(token: string) {
    if (!token) return;

    // +todo custom permissions
    // Generating new token by sending ReplicateToken mutation
    try {
      const replicateTokenResponse = await client.mutate<ReplicateTokenResponse>(ReplicateToken, {
        variables: {
          list: {
            permissions: [
              {
                type: 'GET_USER_INFO'
              },
            ],
          },
        },
        context: {
          headers: {
            "Authorization": `Bearer ${token}`
          },
        },
      });

      // Redirecting user to AuthCallback.url with replicated token
      if (replicateTokenResponse?.data?.ReplicateToken?.secret) {
        window.location.href = `${$AuthCallback.url}?token=${replicateTokenResponse?.data?.ReplicateToken?.secret}`;
      } else {
        // +todo show error to user
      }; 
    } catch {
      // +todo show error to user
      console.log('error');
      loading = false;
    };
  };

  // onMount event
  onMount(async () => {
    // Redirecting to email page due to no $AuthCallback.identity property
    if (!$AuthCallback.identity) {
      const pathSplitted = $page.path.split('/');
      const path = `${ pathSplitted.splice(0, pathSplitted.length - 1).join('/') }/email`
      goto(path);
    } else {
      // Sending RequestAuth mutation to server
      const codeSendResponse = await client.mutate<RequestAuthResponse>(RequestAuth, {
        variables: {
          email: $AuthCallback.identity
        },
      });

      sendAgain = 60;
      loading = false;
    };
  });

  let sendAgain: number | undefined = undefined;
  let loading: boolean = true;
  let code: string;
</script>

<div class="w-full h-full flex items-center justify-center">
  <div class="w-full md:w-2/3">
    <div class="mb-2 flex justify-center">
      <!-- Illustration -->
      <img class="w-1/2" src="/icons/mailbox.png" alt="Mailbox Illustration">
    </div>

    <!-- Texts -->
    <div class="text-center">
      <h1 class="text-2xl">Проверьте почту</h1>
      <p class="text-sm opacity-70">Мы Вам на почту отправили специальный код, с помощью которого вы сможете авторизоваться.</p>
    </div>

    <form on:submit|preventDefault="">
      <!-- Input -->
      <div class="w-full mt-6 mb-3">
        <div style="background-color: { new TinyColor($AuthDesign.containerColor).darken(3) }" class="w-full py-2 px-4 flex items-center { loading ? "opacity-60" : "" }">
          <input disabled="{loading}" on:keyup="{() => null}" bind:value="{code}" style="background-color: { new TinyColor($AuthDesign.containerColor).darken(3) }" class="flex-grow text-black" type="text" placeholder="Код авторизации">
        </div>
      </div>

      <!-- Button -->
      <div class="w-full">
        <button type="submit" style="background-color: { $AuthDesign.accentColor }; color: { new TinyColor($AuthDesign.containerColor) }" on:click="{() => { loading ? null : checkCode() }}" class="w-full flex items-center justify-between px-4 py-2 { loading ? "opacity-60" : "" }">
          { #if loading }
            <p class="w-full text-center text-sm">Загрузка...</p>
          { :else }
            <p class="text-sm mr-2">Авторизоваться</p>

            <Icon name="chevron-right" attrs={{ class:"w-4 h-4" }} />
          { /if }
        </button>

        <!-- Send again -->
        <!-- КОСТЫЛЬ -->
        <!-- <p class="text-xs text-black opacity-60 mt-2 { loading ? "text-white" : "" }">
          { #if sendAgain === undefined }
            <a href="/" on:click|preventDefault={() => null}>Отправить код ещё раз.</a>
          { :else }
            Повторить отправку кода (Через { sendAgain } с.)
          { /if }
        </p> -->
      </div>
    </form>
  </div>
</div>