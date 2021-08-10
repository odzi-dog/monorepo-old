<script>
  import "../app.postcss";
  import Icon from '../components/Icon.svelte';
</script>

<!-- Layout -->
<main class="w-full h-screen bg-white md:bg-gray-200 flex flex-col items-center justify-between py-6 md:py-16">
  <!-- Container -->
  <div class="w-full px-12 md:px-0 md:w-1/3 h-full flex flex-col bg-white rounded-xl">
    <!-- Header -->
    <div class="w-full py-6 hidden md:flex items-center justify-center">
      <img class="w-14 h-14 md:w-10 md:h-10" src="/logotypes/odzi-dog-small-black.svg" alt="">
    </div>
    
    <!-- Content -->
    <div class="flex-grow relative px-4 md:pb-10">
      <slot></slot>
    </div>
  </div>

  <!-- Footer -->
  <div class="hidden w-full absolute inset-x-0 bottom-0 py-6 md:flex flex-col items-center justify-center">
    <!-- Links -->
    <div class="flex items-center">
      <!-- Services -->
      <a href="/" class="flex items-center opacity-60 mx-4">
        <Icon name="grid" attrs={{ class: "w-4 h-4 mr-1 text-black" }} />

        <p class="text-sm text-black">Сервисы</p>
      </a>

      <!-- Help -->
      <a href="/" class="flex items-center opacity-60 mx-4">
        <Icon name="help-circle" attrs={{ class: "w-4 h-4 mr-1 text-black" }} />

        <p class="text-sm text-black">Помощь</p>
      </a>
    </div>
  </div>
</main>