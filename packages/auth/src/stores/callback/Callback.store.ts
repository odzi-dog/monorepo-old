import { writable } from 'svelte/store';

export type Callback = {
  url: string
}

// Creating user store
const store = () => {
  type Store = {
    callback?: Callback
  };

  const { subscribe, update } = writable(<Store>{});

  return {
    subscribe,

    // setCallback
    setCallback(callback: Callback) {
      update((object: Store): Store => {
        object.callback = callback;

        return object;
      });
    },

    // isRight
    isRight(callback: Callback): boolean {
      if (callback.url != null) {
        return true;
      } else {
        return false;
      };
    },
  };
};

// Exporting callback store
export const CallbackStore = store();