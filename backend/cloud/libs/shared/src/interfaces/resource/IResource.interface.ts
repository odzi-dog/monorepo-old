// Importing interfaces
import { EResourceType, INamespace, TRelationalProp } from '@app/shared';
import { IResourceMember } from '.';

// Exporting IResource interface
export interface IResource<T> {
  type: EResourceType;
  config: T;
  members: IResourceMember[];
  namespace: TRelationalProp<INamespace>;
};
