<script>
  import Icon from '../components/Icon.svelte';
</script>

<main class="w-full h-min-screen bg-gray-100 relative">

  <!-- Container -->
  <section class="w-full h-screen flex items-center justify-center relative">
    <div class="w-2/3 h-2/3 flex flex-col items-center justify-center rounded-2xl bg-white shadow-2xl">
      <img class="w-1/12" src="./logotypes/odzi-dog-small-black.svg" alt="Odzi dog logotype">
    
      <!-- Texts -->
      <div class="my-6 w-1/3 text-center">
        <h1 class="text-4xl text-black font-medium">odzi company</h1>
        <p class="text-md text-black opacity-80">Маленькая компания, которая занимается созданием крутых и необычных сервисов для собачников и не только.</p>
      
        <div class="my-4 flex justify-center">
          <button on:click={() => {
            window.location.href = "https://github.com/odzi-dog";
          }} class="w-1/2 rounded-md bg-indigo-400 hover:bg-indigo-300 active:bg-indigo-500 px-4 py-1 flex items-center justify-center">
            <Icon name="github" attrs={{ class: "w-4 h-4 text-white mr-2", "stroke-width": "2.5" }} />
            
            <p class="text-sm text-white font-medium">Github</p>
          </button>
        </div>
      </div>
    </div>
  </section>

</main>