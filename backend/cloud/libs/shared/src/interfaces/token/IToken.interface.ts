// Importing
import { ETokenType, TRelationalProp } from "@app/shared";
import { ITokenPermissions } from "./permissions";
import { INamespace } from "../namespace";

// Exporting IToken interface
export interface IToken {
  type: ETokenType,

  // Token Access secret
  secret: string,

  // Link to INamepspace interface (only if it's TYPE = ROBOT token)
  namespaces?: Array<TRelationalProp<INamespace>>,

  // Link to ITokenPermissions interface
  permissions: TRelationalProp<ITokenPermissions>,
};