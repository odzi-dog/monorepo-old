import { INamespaceMember, IResource, TRelationalProp, TResourceConfig } from '../../';

// Exporting INamespace interface
export interface INamespace {
  // Namespace slug
  slug: string;

  // Resources
  resources: TRelationalProp<IResource<TResourceConfig>>[];

  // Members
  members: INamespaceMember[];
};