import { Application } from 'express';
import * as path from 'path';
import * as dotenv from 'dotenv';

class Locals {

  public static config(): any {
    dotenv.config({ path: path.join(__dirname, '../../.env') });

    const port = process.env.PORT || 4040;
    const dataUrl = process.env.DATAURL;

    return {
      port,
      dataUrl
    };
  }

  /**
   * Injects your config to the app's locals
   */
  public static init(_express: Application): Application {
    _express.locals.app = this.config();
    return _express;
  }
}

export default Locals;
