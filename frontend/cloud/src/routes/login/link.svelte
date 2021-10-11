<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  import { Config } from '$config/index';

  onMount(() => {
    let json = {
      backgroundColor: "#111827",
      logotype: "https://res.cloudinary.com/lococovu-cdn/image/upload/v1614110162/logotypes/pawcapsu-black-small.svg"
    };

    goto(`https://auth.odzi.dog/callback/${encodeURIComponent(Config.get('MODE') === 'DEVELOPMENT' ? 'localhost:3000/login' : 'pawcapsu.ml/login')}?design=${encodeURIComponent(JSON.stringify(json))}`);
  });
</script>

<main class="w-full h-screen bg-gray-900 flex justify-center items-center py-16">
  <div class="w-1/3 px-12 h-full rounded-xl flex flex-col bg-white items-center justify-center">
    <h1 class="text-2xl text-black font-medium">Перекидываем...</h1>
    <p class="text-black text-sm opacity-80">Перекидываем Вас на страничку авторизации...</p>
  </div>
</main>