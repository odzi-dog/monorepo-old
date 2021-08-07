<script lang="ts">
  // Importing components
  import Icon from '../../components/Icon.svelte';

  // Importing modules
  import { onMount } from 'svelte';

  // Importing stores
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';  
  import { UserStore } from '../../stores/user/User.store';

  // sendEmail
  function sendEmail() {
    loading = true;

    fetch(`http://api.odzi.dog:3000/auth/code?email=${$page.params['email']}`)
    .then(() => {
      loading = false;
      sendAgain = 60;

      setInterval(() => {
        --sendAgain;
        
        if (sendAgain <= 0) { 
          sendAgain = undefined;
        };
      }, 1000);
    });
  };

  // checkCode
  function checkCode() {
    fetch(`http://api.odzi.dog:3000/auth/code/${code}?email=${$page.params['email']}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.type != null && data.userEmail === $page.params['email']) {
        proceedAuthorization(data.id);
      };
    });
  };

  // proceedAuthorization
  function proceedAuthorization(authCode: string) {
    if (loading) return;
    loading = true;

    // Authorize user
    fetch(`http://localhost:3000/auth/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ username: $page.params['email'], password: code })
    })
    .then((response) => response.json())
    .then((data) => {
      // Saving token and user
      // into store
      const token = data.token;
      const user  = data.user;

      UserStore.setUser(user, token);
      
      // Redirecting to callback page
      goto('/callback');
    });
  };

  onMount(() => {
    // sendEmail();
    loading = false;
  });

  let sendAgain: number | undefined = undefined;
  let loading: boolean = true;
  let code: string;
</script>

<div class="w-full h-full flex items-center justify-center">
  <div class="w-full xl:w-2/3">
    <div class="mb-2 flex justify-center">
      <!-- Illustration -->
      <img class="w-1/2" src="/icons/mailbox.png" alt="Mailbox Illustration">
    </div>

    <!-- Texts -->
    <div class="text-center">
      <h1 class="text-2xl text-black">Проверьте почту</h1>
      <p class="text-sm text-black opacity-70">Мы Вам на почту отправили специальный код, с помощью которого вы сможете авторизоваться.</p>
    </div>

    <!-- Input -->
    <div class="w-full mt-6 mb-3">
      <div class="w-full bg-gray-200 py-2 px-4 flex items-center { loading ? "opacity-60" : "" }">
        <input disabled="{loading}" on:keyup="{() => checkCode()}" bind:value="{code}" class="flex-grow bg-gray-200 text-black" type="text" placeholder="Код авторизации">
      </div>
    </div>

    <!-- Button -->
    <div class="w-full">
      <button on:click="{() => { loading ? null : checkCode() }}" class="w-full flex items-center justify-between px-4 py-2 bg-indigo-400 { loading ? "opacity-60" : "" }">
        { #if loading }
          <p class="w-full text-center text-sm text-white">Загрузка...</p>
        { :else }
          <p class="text-sm mr-2 text-white">Авторизоваться</p>

          <Icon name="chevron-right" attrs={{ class:"w-4 h-4 text-white" }} />
        { /if }
      </button>

      <!-- Send again -->
      { #if !loading }
        <p class="text-xs text-black opacity-60 mt-2">
          { #if sendAgain === undefined }
            <a href="/" on:click|preventDefault={() => sendEmail()}>Отправить код ещё раз.</a>
          { :else }
            Повторить отправку кода (Через { sendAgain } с.)
          { /if }
        </p>
      { /if }
    </div>
  </div>
</div>