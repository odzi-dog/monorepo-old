// Importing interfaces
import { EResourceType, INamespace, TRelationalProp } from '../../';
import { IResourceMember } from '.';

// Exporting IResource interface
export interface IResource<T> {
  type: EResourceType;
  config: T;
  members: IResourceMember[];
  namespace: TRelationalProp<INamespace>;
};
