<script lang="typescript">
  // Getting this callback information
  // from Odzi Cloud Auth Resource
  import { client } from '$services/graphql';
  import { TinyColor } from '@ctrl/tinycolor';

  // Components
  import Icon from 'src/components/Icon.svelte';
  import Spinner from 'src/components/Spinner.svelte';

  // Queries
  import { GetAuthResourceConfig } from 'src/queries';
  import type { AuthResourceConfigResponse } from 'src/queries';

  // Stores
  import { page } from '$app/stores';
  import { AuthCallback, AuthDesign } from '$stores/auth';

  // Fethcing Callback and Design information
  let updated: boolean = false;

  const information = client.query<AuthResourceConfigResponse>(GetAuthResourceConfig, { variables: { id: $page.params.resourceId } });
  const unsubscribe = information.subscribe((information) => {
    // fuck this :crying_cat:
    AuthCallback.update(information?.data?.getAuthResource?.config?.callback);
    AuthDesign.update(information?.data?.getAuthResource?.config?.design);
    
    // Checking if we have our Callback information
    if (information?.data?.getAuthResource?.config?.callback) {
      updated = true;
      unsubscribe();
    };
  });
</script>

<svelte:head>
  <title>odzi auth - Secured authorization</title>
</svelte:head>

{ #if !updated }
  <div class="w-full h-screen bg-white flex items-center justify-center">
    <Spinner color="rgb(129, 140, 248)" size={20} />
  </div>
{ :else }
  <!-- Layout -->
  <main style="background-color: { $AuthDesign.backgroundColor }" class="w-full h-screen flex flex-col items-center justify-between py-6 md:py-16">
    <!-- Container -->
    <div style="background-color: { $AuthDesign.containerColor }" class="w-full px-12 md:px-0 md:w-1/3 h-full flex flex-col rounded-xl">
      <!-- Header -->
      <div class="w-full py-6 hidden md:flex items-center justify-center">
        <img class="w-16 h-16 md:w-12 md:h-12" src="{ $AuthDesign.logotype || new TinyColor($AuthDesign.containerColor).isLight() ? '/logotypes/odzi-dog-small-black.svg' : '/logotypes/odzi-dog-small-white.svg' }" alt="">
      </div>
      
      <!-- Content -->
      <div class="flex-grow relative px-4 md:pb-10 { new TinyColor($AuthDesign.containerColor).isLight() ? 'text-dark' : 'text-white' }">
        <slot></slot>
      </div>
    </div>

    <!-- Footer -->
    <div class="w-full absolute inset-x-0 bottom-0 py-6 flex flex-col items-center justify-center">
      <!-- Links -->
      <div class="flex items-center opacity-60 { new TinyColor($AuthDesign.backgroundColor).isLight() ? 'text-dark' : 'text-white' }">
        <Icon name='shield' attrs={{ class: 'w-4 h-4 mr-1' }} />
        
        <p class="text-sm">Защищенно <span class="underline">cloud.odzi.dog</span></p>
      </div>
    </div>
  </main>
{ /if }