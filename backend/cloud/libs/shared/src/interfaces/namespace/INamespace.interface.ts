import { INamespaceMember, IResource, TRelationalProp, TResourceConfig } from "@app/shared";

// Exporting INamespace interface
export interface INamespace {
  // Namespace slug
  slug: string;

  // Resources
  resources: TRelationalProp<IResource<TResourceConfig>>[];

  // Members
  members: INamespaceMember[];
};