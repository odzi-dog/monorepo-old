import { writable, Updater } from 'svelte/store';

// Creating user store
const store = () => {
  type Store = {
    token?: {
      id: number,
      permissions?: []
    },
    user?: {
      id: number,
      email: string,
    },
  };

  const { subscribe, update } = writable(<Store>{});

  return {
    subscribe,

    // setUser
    setUser(user: any, token?: any) {
      update((object: Store): Store => {
        object.user  = user;
        object.token = token;
        
        return object;
      });
    },
  };
};

// Exporting user store
export const UserStore = store();