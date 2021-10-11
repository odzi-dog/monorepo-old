// Importin stores
import { writable } from "svelte/store";
import { client } from '$services/graphql';
import { gql } from '@apollo/client/core/core.cjs.js';
import type { IProfile } from '$shared/interfaces';

export interface Store {
  // User information
  user?: IProfile,

  // Token information
  token?: {
  },

  // Notifications
  notifications?: [],

  // Sessions
  sessions?: [],

  // Is Store loaded?
  loaded: boolean,
};

const store = () => {
  const { subscribe, update } = writable(<Store>{});

  return {
    subscribe,    
  
    authMe() {
      const { subscribe } = client.query(gql`
        query me {
          me {
            _id
            email
            username
          }
        }
      `);

      subscribe((obj: any) => {
        if (!obj.loading) {
          // User is authorized
          if (obj.data?.me != null) {
            update((store: Store) => {
              store.user = <IProfile>obj?.data?.me;
              store.loaded = true;

              return store;
            });
          } else {
            update((store: Store) => {
              store.loaded = true;

              return store;
            });
          };
        };
      });
    }
  };
};

export const UserStore = store();