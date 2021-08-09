<script>
  import "../app.postcss";
  import Icon from '../components/Icon.svelte';
</script>

<!-- Layout -->
<main class="w-full h-screen bg-gray-200 flex items-center justify-center py-6 md:py-12 xl:py-24">
  <!-- Container -->
  <div class="w-full md:w-1/3 h-full flex flex-col bg-white rounded-xl">
    <!-- Header -->
    <div class="w-full py-6 flex items-center justify-center">
      <img class="w-10 h-10" src="/logotypes/odzi-dog-small-black.svg" alt="">
    </div>
    
    <!-- Content -->
    <div class="flex-grow relative px-4 pb-10">
      <slot></slot>
    </div>

    <!-- Footer -->
    <div class="w-full py-6 flex flex-col items-center justify-center">
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
  </div>
</main>