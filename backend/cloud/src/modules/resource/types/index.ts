// Importing Resolvers
import * as AuthResourceResolvers from './AuthResource/resolvers';

// Importing services
import * as AuthResourceServices from './AuthResource/services';

export const Resolvers = [...Object.values(AuthResourceResolvers)];
export const Services = [...Object.values(AuthResourceServices)];