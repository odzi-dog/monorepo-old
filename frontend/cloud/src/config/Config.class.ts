export class ConfigClass {
  private config: object;
  
  constructor(file?) {
    this.config = file || {};
  };

  // get
  get(path: string): string | boolean {
    return this.config[path];
  };
};