// Importing modules
import { gql } from '$services/graphql';
import type { IAuthResponse } from '@app/shared';

// ProcessAuth mutation
// - gql query
export const ProcessAuth = gql`
  mutation ProcessAuth($email: String!, $code: String!) {
    ProcessAuthentication(email: $email, code: $code) {
      token {
        secret
      }
    }
  }
`;

// - type
export interface ProcessAuthResponse {
  ProcessAuthentication: IAuthResponse
};