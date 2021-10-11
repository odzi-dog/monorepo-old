import development from './environments/development.json';
import { ConfigClass } from './Config.class';

// Exporting Config instance
export const Config = new ConfigClass(development);