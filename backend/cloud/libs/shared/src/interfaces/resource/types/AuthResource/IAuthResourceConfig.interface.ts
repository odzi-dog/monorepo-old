// Importing interfaces/types
import { IAuthResourceCallback, IAuthResourceDesign } from '.';

// Exporting IAuthResourceConfig interface
export interface IAuthResourceConfig {
  callback: IAuthResourceCallback;
  design?: IAuthResourceDesign
};