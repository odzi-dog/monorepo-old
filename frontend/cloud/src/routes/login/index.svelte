<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  
  import { UserService } from '$services/user';
  import { goto } from '$app/navigation';

  onMount(() => {
    const token = $page.query.get('token');

    UserService.loginUser(token)
    .then(() => {
      goto('/');
    });
  });
</script>

<main class="w-full h-screen bg-gray-900 flex justify-center items-center py-16">
  <div class="w-1/3 px-12 h-full rounded-xl flex flex-col bg-white items-center justify-center">
    <h1 class="text-2xl text-black font-medium">Авторизовываем...</h1>
    <p class="text-black text-sm opacity-80">Авторизовываем Вас в Ваш аккаунт пакапсу...</p>
  </div>
</main>