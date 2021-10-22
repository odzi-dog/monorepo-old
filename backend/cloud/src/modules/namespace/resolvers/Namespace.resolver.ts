import { Resolver } from '@nestjs/graphql';
import { Namespace } from 'src/types/models';

@Resolver(of => Namespace)
export class NamespaceResolver {

};