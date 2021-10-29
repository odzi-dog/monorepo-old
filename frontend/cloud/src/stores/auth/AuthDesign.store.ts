// Importing modules
import { writable } from 'svelte/store';
import type { IAuthResourceDesign } from '@app/shared';

// Exporting AuthDesign initializer function
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const AuthDesignInit = () => {
  const defaultStore: IAuthResourceDesign = {
    // Default values
    accentColor: '#818cf8',

    backgroundColor: '#ffffff',
    containerColor: '#f3f4f6',
  };
  const { subscribe, update } = writable(defaultStore);

  // Returning this store
  return {
    subscribe,

    // method update
    update(store: IAuthResourceDesign) {
      update(() => {
        if (store) {
          // https://stackoverflow.com/a/38340730
          return { ...defaultStore, ...Object.fromEntries(Object.entries(store).filter(([_, v]) => v != null)) };
        };
      });
    },
  };
};

// Exporting AuthDesign store itself
export const AuthDesign = AuthDesignInit();