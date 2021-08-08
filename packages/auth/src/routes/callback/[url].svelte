<script lang="ts">
  // Importing components
  import Icon from '../../components/Icon.svelte';

  // Importing stores
  import { page } from '$app/stores';
  import { CallbackStore } from '../../stores/callback/Callback.store'; 

  // Importing modules
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

  onMount(async () => {
    const callback: any = {
      url: $page.params['url'],
    };

    if (CallbackStore.isRight(callback)) {
      CallbackStore.setCallback(callback);
    } else {
      goto('/error');
    };
  });

  // Variables
  let email: string;
  let loading: boolean = false;
</script>

<div class="h-full w-full flex flex-col items-center justify-center">
  <div class="w-full xl:w-2/3">
    <!-- Texts -->
    <div class="text-center">
      <h1 class="text-2xl text-black">Авторизация</h1>
      <p class="text-sm text-black opacity-70">Для того, что бы продолжить пользоваться данным сервисом Вам нужно авторизоваться в Ваш аккаунт.</p>
    </div>

    <!-- Input -->
    <div class="w-full mt-6 mb-3">
      <div class="w-full bg-gray-200 py-2 px-4 flex items-center { loading ? "opacity-60" : "" }">
        <input disabled={loading} bind:value="{email}" class="flex-grow bg-gray-200 text-black" type="text" placeholder="E-Mail">
      </div>
    </div>

    <!-- Button -->
    <div class="w-full">
      <button disabled={loading} on:click="{() => { 
        loading = true; 
        goto(`/code/${email}`) 
      }}" class="w-full flex items-center justify-between px-4 py-2 bg-indigo-400 { loading ? "opacity-60" : "" }">
        { #if loading }
          <p class="w-full text-center text-sm text-white">Загрузка...</p>
        { :else }
          <p class="text-sm mr-2 text-white">Продолжить</p>

          <Icon name="chevron-right" attrs={{ class:"w-4 h-4 text-white" }} />
        { /if }
      </button>

      <!-- Dislaimer -->
      <p class="text-xs text-black opacity-60 mt-2 text-center">Продолжая, вы соглашаетесь с <a class="underline" href="/">Правилами пользования</a> сервиса auth.odzi.dog</p>
    </div>
  </div>
</div>