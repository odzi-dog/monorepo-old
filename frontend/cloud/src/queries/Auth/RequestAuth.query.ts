// Importing modules
import { gql } from '$services/graphql';
import type { IAuthRequest } from '@app/shared';

// RequestAuth mutation
// - gql query
export const RequestAuth = gql`
  mutation RequestAuth($email: String!) {
    RequestAuth(email: $email) {
      email
    }
  }
`;

// - type
export interface RequestAuthResponse {
  RequestAuth: Omit<IAuthRequest, 'code'>
};