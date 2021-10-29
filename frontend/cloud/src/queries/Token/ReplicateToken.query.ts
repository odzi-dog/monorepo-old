// Importing modules
import { gql } from '$services/graphql';
import type { IToken } from '@app/shared';

// Exporting ReplicateToken mutation
// - mutation
export const ReplicateToken = gql`
  mutation ReplicateToken($permissions: TokenPermissionsInput) {
    ReplicateToken(permissions: $permissions) {
      secret
    }
  }
`;

// - type
export interface ReplicateTokenResponse {
  ReplicateToken: Omit<IToken, 'type'>
};