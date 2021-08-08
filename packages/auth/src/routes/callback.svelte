<script>
  // Importing modules
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  // Importing stores
  import { UserStore } from '../stores/user/User.store';
  import { CallbackStore } from '../stores/callback/Callback.store';

  onMount(async () => {
    setTimeout(() => {
      const url = $CallbackStore.callback?.url;
      const token = $UserStore.token?.id;

      if (url != null && token != null) {
        window.location.href = `${!url.includes('http') ? "https://" : ""}${url}?token=${token}`;
      } else {
        goto('/error');
      };
    }, 1000);
  });
</script>

<div class="w-full h-full flex items-center justify-center">
  <div class="w-full">
    <!-- Texts -->
    <div class="text-center">
      <h1 class="text-2xl text-black">Авторизируем вас...</h1>
      <p class="text-sm text-black opacity-70">Прямо сейчас мы авторизируем вас и перенаправляем на страничку сайта, с которого вы пришли. Так что подождите, пожалуйста.</p>
    </div>
  </div>
</div>