import production from './environments/production.json';
import { ConfigClass } from './Config.class';

// Exporting Config instance
export const Config = new ConfigClass(production);