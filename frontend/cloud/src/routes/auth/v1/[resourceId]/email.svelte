<script lang="ts">
  // Importing components
  import Icon from 'src/components/Icon.svelte';
  
  // Importing stores
  import { page } from '$app/stores';
  import { AuthCallback, AuthDesign } from '$stores/auth';
  
  // Importing modules
  import { goto } from '$app/navigation';
  import { TinyColor } from '@ctrl/tinycolor';

  // Variables
  let email: string;
  let loading: boolean = false;
</script>

<div class="h-full w-full flex flex-col items-center justify-center">
  <div class="w-full md:w-2/3">
    <!-- Texts -->
    <div class="text-center">
      <h1 class="text-2xl">Авторизация</h1>
      <p class="text-sm opacity-70">Для того, что бы продолжить пользоваться данным сервисом Вам нужно авторизоваться в Ваш аккаунт.</p>
    </div>

    <!-- Form -->
    <form on:submit|preventDefault="">
      <!-- Input -->
      <div class="w-full mt-6 mb-3">
        <div style="background-color: { new TinyColor($AuthDesign.containerColor).darken(3) }" class="w-full py-2 px-4 flex items-center { loading ? "opacity-60" : "" }">
          <input disabled={loading} bind:value="{email}" style="background-color: { new TinyColor($AuthDesign.containerColor).darken(3) }" class="w-auto" type="text" placeholder="E-Mail">
        </div>
      </div>

      <!-- Button -->
      <div class="w-full">
        <button type="submit" disabled={loading} on:click="{() => {
          if (loading) return 

          // Updating app states
          loading = true
          AuthCallback.update({ identity: email });

          // Redirecting user to verifiction page
          const pathSplitted = $page.path.split('/');
          const path = `${ pathSplitted.splice(0, pathSplitted.length - 1).join('/') }/verification`
          goto(path);
        }}" style="background-color: { $AuthDesign.accentColor }; color: { new TinyColor($AuthDesign.containerColor) }" class="w-full flex items-center justify-between px-4 py-2 { loading ? "opacity-60" : "" }">
          { #if loading }
            <p class="w-full text-center text-sm">Загрузка...</p>
          { :else }
            <p class="text-sm mr-2">Продолжить</p>

            <Icon name="chevron-right" attrs={{ class:"w-4 h-4" }} />
          { /if }
        </button>

        <!-- Dislaimer -->
        <p class="text-xs opacity-60 mt-2 text-center">Продолжая, вы соглашаетесь с <a class="underline" href="/">Правилами пользования</a> сервиса cloud.odzi.dog</p>
      </div>
    </form>
  </div>
</div>