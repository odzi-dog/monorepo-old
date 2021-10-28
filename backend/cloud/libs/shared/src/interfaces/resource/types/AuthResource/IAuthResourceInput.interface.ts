// Importing interfaces
import { IAuthResourceCallback, IAuthResourceDesign } from '.';

// Exporting IAuthResourceInput interface
export interface IAuthResourceInput {
  callback: IAuthResourceCallback,
  design?: IAuthResourceDesign,
};