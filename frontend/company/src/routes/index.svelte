<script>
  import Icon from '../components/Icon.svelte';
</script>

<main class="w-full h-screen bg-blue-50 relative">
  <!-- Header -->
  <header class="absolute top-0 w-full flex items-center justify-between px-8 py-4">
    <!-- Logotype -->
    <div class="w-1/4">
      <img class="w-8" src="./logotypes/odzi-dog-small-black.svg" alt="odzi dog small black logo">
    </div>

    <!-- Links -->
    <div class="w-2/4 text-sm flex justify-between">
      <a class="text-black" href="/team">Наша команда</a>
      <a class="text-black" href="/projects">Наши проекты</a>
      <a class="text-black" href="/">Связаться с нами</a>
    </div>

    <!-- Services -->
    <div class="w-1/4 flex justify-end">
      <button class="rounded-full bg-white opacity-70 py-2 px-4 shadow-xl flex items-center justify-center">
        <Icon name="grid" attrs={{ class: "w-4 h-4 text-black" }} />

        <p class="text-sm text-black ml-1.5">Сервисы</p>
      </button>
    </div>

  </header>

  <!-- Content -->
  <section class="w-full flex items-center justify-center h-screen relative">
    <div class="w-2/3 h-2/3 bg-white bg-opacity-60 rounded-md">
      
    </div>
  </section>

  <!-- Footer -->

</main>