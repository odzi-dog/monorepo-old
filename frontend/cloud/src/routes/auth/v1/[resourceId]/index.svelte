<script>
  // Importing modules
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';

  // onMount event
  onMount(() => {
    console.log("redirect to email");
    // Redirecting user to email page
    goto(`${$page.path}/email`);
  });
</script>