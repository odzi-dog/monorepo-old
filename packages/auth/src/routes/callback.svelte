<script>
  // Importing components

  // Importing modules
  import { onMount } from 'svelte';

  // Importing stores
  import { UserStore } from '../stores/user/User.store';

  onMount(() => {
    fetch(`http://api.odzi.dog:3000/auth/profile`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
});
</script>

<div class="w-full h-full flex items-center justify-center">
  <div class="w-full xl:w-1/3">
    <p>Callback page</p>

    <p>{$UserStore.user?.email} {$UserStore.token?.id}</p>
  </div>
</div>