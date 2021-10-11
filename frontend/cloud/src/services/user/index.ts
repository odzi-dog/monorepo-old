import { client } from '$services/graphql';
import { gql } from '@apollo/client/core/core.cjs.js';

export class UserServiceClass {
  // loginUser
  async loginUser(token: string) {
    let login = await client.mutate(gql`
        mutation {
          login(token: "${token}") {
            _id
            email
            username
          }
        }
    `);

    console.log(login);
    return login;
  };
};

export const UserService = new UserServiceClass();