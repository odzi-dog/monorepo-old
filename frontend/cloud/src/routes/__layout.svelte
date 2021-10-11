<script lang="typescript">
  import "../app.postcss";
  import { UserStore } from '$stores/user/User.store';
  import { onMount } from 'svelte';

  onMount(() => {
    UserStore.authMe();
  });
</script>

<!-- Importing some fonts -->
<style>
	@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');

	/* Background image for header */
	.header {
		background-image: url("https://images.squarespace-cdn.com/content/50a3c190e4b0d12fc9231429/1358377903718-G595RVPR35BJ7F4W87QA/header_background.jpg?content-type=image%2Fjpeg");
		background-repeat: no-repeat;
		background-position: top left;
		background-size: auto;
		background-attachment: fixed;
	}
</style>

<svelte:head>
	<title>Ctrl+Paint - Перевод профессиональных и бесплатных уроков по компьютерному рисованию.</title>
</svelte:head>

{ #if $UserStore.loaded }
  <main class="bg-gray-100" style="font-family: 'Helvetica Neue', 'Arial', 'sans-serif'">
    <!-- Header -->
    <div style="z-index: 2;" class="header fixed w-full py-1 border-b-1 border-solid border-gray-300 items-center flex justify-center md:justify-around px-2 md:px-6 lg:px-12 ">
      <!-- Logotype -->
      <div class="block">
        <img style="height: 2.4rem; width: 2.4rem;" src="//static1.squarespace.com/static/50a3c190e4b0d12fc9231429/t/50f87f8ce4b0b3f0a2deeb1d/1600354330125/?format=1500w" alt="unfull logotype">
      </div>

      <!-- Links -->
      <div class="uppercase text-xs hidden md:block">
        <a href="/" class="mx-6 font-semibold text-black">главная</a>
        <a href="/videos/recent" class="mx-6 font-semibold text-gray-600">последние видео</a>
        <a href="/videos/library" class="mx-6 font-semibold text-gray-600">библиотека</a>
        <a href="/videos/about" class="mx-6 font-semibold text-gray-600">про курс</a>
        <a href="https://ctrlpaint.myshopify.com/" class="mx-6 font-semibold text-gray-600">магазин ctrl+paint</a>
      </div>
    </div>

    <!-- Site's content -->
    <div style="z-index: 1;" class="relative w-full h-full">
      <slot></slot>
    </div>

    <!-- Footer -->
    <div class="w-full mt-16 border-t-1 border-solid border-gray-400 flex justify-center items-center py-4 md:px-6">
      <!-- Ctrl+Paint store -->
      <button class="w-full px-6 hidden md:block">
        <img class="w-full" src="https://images.squarespace-cdn.com/content/v1/50a3c190e4b0d12fc9231429/1358626489501-NMPJH9630JOUYGKF4GI3/ke17ZwdGBToddI8pDm48kDk9zY5kTBs7Y1Z0RHEpOnTlfiSMXz2YNBs8ylwAJx2qgRUppHe6ToX8uSOdETM-XipuQpH02DE1EkoTaghKW779xRs5veesYFcByqmynT9oHyqHnRry8c-b2aBSWqyDseHfuvPLyQxkyXLfl8AlCyM/store_footer_concept_d.png?format=1500w" alt="Ctrl+Paint Store">
      </button>

      <!-- Social Links and other information -->
      <div class="w-3/4 md:w-1/4 flex flex-col justify-between items-center">
        <!-- Social Buttons -->
        <div class="w-full flex justify-center">
          <span class="w-6 h-6 rounded-full bg-gray-500 flex justify-center items-center">
            <svg style="width: 0.7rem; height: 0.7rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
          </span>
        </div>

        <!-- Other Information (some texts) -->
        <div class="text-xs text-gray-700 mt-2">
          <p>All content of this site belongs to Matt Kohr from <a href="https://www.ctrlpaint.com/" class="border-b-1 border-dotted border-gray-700">ctrlpaint.com</a>; translated by <a href="https://unfull.ml/" class="border-b-1 border-dotted border-gray-700">unfull team</a></p>
        </div>
      </div>
    </div>
  </main>
{ :else }
  <main class="absolute w-full h-screen bg-gray-900 flex justify-center items-center">
    Logotype
  </main>
{ /if }