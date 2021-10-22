import * as mongoose from "mongoose";

export type TRelationalProp<T> =
  | T
  | mongoose.Schema.Types.ObjectId
  | mongoose.Types.ObjectId
  | string;
