<script lang="ts">
  import Icon from '../components/Icon.svelte';

  // Variables
  let email: string;
</script>

<div class="h-full w-full flex flex-col items-center justify-center">
  <div class="w-full xl:w-2/3">
    <!-- Texts -->
    <div class="text-center">
      <h1 class="text-2xl text-black">Авторизация</h1>
      <p class="text-sm text-black opacity-70">Для того, что бы продолжить пользоваться данным сервисом Вам нужно авторизоваться в Ваш аккаунт.</p>
    </div>

    <!-- Input -->
    <div class="w-full mt-6 mb-3">
      <div class="w-full bg-gray-200 py-2 px-4 flex items-center">
        <input bind:value="{email}" class="flex-grow bg-gray-200 text-black" type="text" placeholder="E-Mail">
      </div>
    </div>

    <!-- Button -->
    <div class="w-full">
      <button on:click="{() => { window.location.href = `/code/${email}` }}" class="w-full flex items-center justify-between px-4 py-2 bg-indigo-400">
        <p class="text-sm mr-2 text-white">Продолжить</p>

        <Icon name="chevron-right" attrs={{ class:"w-4 h-4 text-white" }} />
      </button>

      <!-- Dislaimer -->
      <p class="text-xs text-black opacity-60 mt-2 text-center">Продолжая, вы соглашаетесь с <a class="underline" href="/">Правилами пользования</a> сервиса auth.odzi.dog</p>
    </div>
  </div>
</div>