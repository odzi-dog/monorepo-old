<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  onMount(() => {
    let json = {
      backgroundColor: "#111827",
      logotype: "https://res.cloudinary.com/lococovu-cdn/image/upload/v1614110162/logotypes/pawcapsu-black-small.svg"
    };

    goto(`/callback/${encodeURIComponent('pawcapsu.ml/login')}?design=${encodeURIComponent(JSON.stringify(json))}`);
  });
</script>