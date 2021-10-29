// Importing modules
import { writable } from 'svelte/store';
import type { IAuthResourceCallback } from '@app/shared';

class AuthCallbackStore implements IAuthResourceCallback {
  url: string;

  // 
  identity?: string;
};

// Exporting AuthCallback initializer function
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const AuthCallbackInit = () => {
  const defaultStore: AuthCallbackStore = {
    url: '',
  };
  const { subscribe, update } = writable(defaultStore);

  // Returning this store
  return {
    subscribe,

    // method update
    update(store: Partial<AuthCallbackStore>) {
      update((object) => {
        return { ...object, ...store };
      });
    },
  };
};

// Exporting AuthCallback store itself
export const AuthCallback = AuthCallbackInit();