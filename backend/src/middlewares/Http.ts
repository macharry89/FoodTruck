import { Application } from 'express';

class Http {
	public static mount(_express: Application): Application {
		console.info('Booting the \'HTTP\' middleware...');

		// Disable the x-powered-by header in response
		_express.disable('x-powered-by');

		return _express;
	}
}

export default Http;
