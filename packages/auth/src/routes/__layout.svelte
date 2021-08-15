<script>
  import "../app.postcss";
  import Icon from '../components/Icon.svelte';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  import { DesignStore } from '../stores/design/Design.store'; 

  onMount(() => {
    if ($page.query.get('design') != null) {
      DesignStore.setDesign($page.query.get('design'));
    };
  });
</script>

<!-- Layout -->
<main class="w-full h-screen { $DesignStore?.custom?.backgroundColor || "bg-gray-200" } flex flex-col items-center justify-between py-6 md:py-16">
  <!-- Container -->
  <div class="w-full px-12 md:px-0 md:w-1/3 h-full flex flex-col bg-white rounded-xl">
    <!-- Header -->
    <div class="w-full py-6 hidden md:flex items-center justify-center">
      <img class="w-14 h-14 md:w-10 md:h-10" src="{ $DesignStore?.custom?.logotype || "/logotypes/odzi-dog-small-black.svg" }" alt="">
    </div>
    
    <!-- Content -->
    <div class="flex-grow relative px-4 md:pb-10">
      <slot></slot>
    </div>
  </div>

  <!-- Footer -->
  <div class="hidden w-full absolute inset-x-0 bottom-0 py-6 md:flex flex-col items-center justify-center">
    <!-- Links -->
    <div class="flex items-center opacity-60">
      <Icon name='shield' attrs={{ class: 'w-4 h-4 text-white mr-1' }} />

      <p class="text-sm text-white">Защищенно <span class="underline">auth.odzi.dog</span></p>
    </div>
  </div>
</main>