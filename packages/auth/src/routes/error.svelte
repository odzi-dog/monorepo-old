<script lang="ts">
  // Importing components
  import Icon from '../components/Icon.svelte';
</script>

<div class="h-full w-full flex flex-col items-center justify-center">
  <div class="w-full xl:w-2/3">
    <!-- Texts -->
    <div class="text-center">
      <h1 class="text-2xl text-black">Ошибка</h1>
      <p class="text-sm text-black opacity-70">Нам жаль, но произошла непоправимая ошибка. Мы не сможем Вас авторизовать. Попробуйте вернуться назад либо попробывать повторить запрос через некоторе время.</p>
    </div>

    <!-- Button -->
    <div class="w-full mt-6">
      <button on:click="{() => { window.history.back() }}" class="w-full flex items-center justify-between px-4 py-2 bg-indigo-400">
        <p class="text-sm mr-2 text-white">Вернуться назад</p>

        <Icon name="chevron-right" attrs={{ class:"w-4 h-4 text-white" }} />
      </button>
    </div>
  </div>
</div>