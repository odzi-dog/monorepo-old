import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Permission {
  @Field()
  permission: string;
};