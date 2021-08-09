<script lang="ts">
  // Importing components
  import Icon from '../components/Icon.svelte';

  let url: string;
</script>

<div class="h-full w-full flex flex-col items-center justify-center">
  <div class="w-full px-6">
    <!-- Texts -->
    <div class="text-center">
      <h1 class="text-2xl text-black">Сервис авторизации</h1>
      <p class="text-sm text-black opacity-70">Бесплатный и максимально простой сервис для авторизации пользователей с токенами и всем прилегающим.<br /><br />Что бы отправить запрос на авторизиацию вам просто нужно перенаправить пользователя на страничку <span class="px-1 py-0.5 rounded-sm bg-indigo-500 text-white">https://odzi.dog/callback/адресс</span>. После пользовательской авторизации, пользователь будет перенаправлен на "адресс" вместе с его токеном.<br /><br />Просмотреть все доступные методы API вы можете, нажав на кнопку ниже:</p>
    </div>

    <!-- Button -->
    <div class="w-full mt-6">
      <button on:click="{() => {  
        window.location.href = "https://api.odzi.dog:3000/api";
      }}" class="w-full flex items-center justify-between px-4 py-2 bg-indigo-400">
        <p class="text-sm mr-2 text-white">Перейти к API</p>

        <Icon name="chevron-right" attrs={{ class:"w-4 h-4 text-white" }} />
      </button>

      <!-- Dislaimer -->
      <p class="text-xs text-black opacity-60 mt-2 text-center">Мы имеем право без уведомления пользователей обновлять это API. Нам просто лень вас уведомлять.</p>
    </div>
  </div>
</div>