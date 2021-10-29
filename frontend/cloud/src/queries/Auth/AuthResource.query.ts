// Importing modules
import { gql } from '$services/graphql';
import type { IAuthResourceConfig } from '@app/shared';

// AuthResourceConfig query
// - gql query
export const GetAuthResourceConfig = gql`
  query GetAuthResourceConfig($id: String!) {
    getAuthResource(id: $id) {
      config {
        callback {
          url
        }
        design {
          logotype
          backgroundColor
          containerColor
          accentColor
          headerText
          descriptionText
          footerText
        }  
      }
    }
  }
`;

// - type
export interface AuthResourceConfigResponse {
  getAuthResource: {
    config: IAuthResourceConfig,
  }
};