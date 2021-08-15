import { writable } from 'svelte/store';

export type CustomDesign = {
  backgroundColor: string;
  logotype: string;
}

// Creating user store
const store = () => {
  type Store = {
    custom?: CustomDesign
  };

  const { subscribe, update } = writable(<Store>{});

  return {
    subscribe,

    // setDesign
    setDesign(jsonString: string) {
      // Parsing
      let design: CustomDesign;
      try {
        design = <CustomDesign>JSON.parse(jsonString);
      } catch(error) {
        console.log(error);
      }

      update((object: Store): Store => {
        object.custom = design;

        return object;
      });
    },
  };
};

// Exporting design store
export const DesignStore = store();