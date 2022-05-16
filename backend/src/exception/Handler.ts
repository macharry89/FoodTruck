class Handler {
	/**
	 * Handles all the not found routes
	 */
	public static notFoundHandler(_express: any): any {

		_express.use('*', (req: any, res: any) => {
			const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

			console.error(`Path '${req.originalUrl}' not found [IP: '${ip}']!`);
      
      return res.json({
        error: 'Not Found'
      });
		});

		return _express;
	}

	/**
	 * Handles your api/web routes errors/exception
	 */
	public static clientErrorHandler(err: any, req: any, res: any, next: any): any {
		console.error(err.stack);

		if (req.xhr) {
			return res.status(500).send({error: 'Something went wrong!'});
		} else {
			return next(err);
		}
	}

	/**
	 * Show undermaintenance page incase of errors
	 */
	public static errorHandler(err: any, req: any, res: any, next: any): any {
		console.error(err.stack);
		res.status(500);

    if (err.name && err.name === 'UnauthorizedError') {
      const innerMessage = err.inner && err.inner.message ? err.inner.message : undefined;
      return res.json({
        error: [
          'Invalid Token!',
          innerMessage
        ]
      });
    }

    return res.json({
      error: err
    });
	}

  /**
	 * Register your error / exception monitoring
	 * tools right here ie. before "next(err)"!
	 */
	public static logErrors(err: any, req: any, res: any, next: any): any {
		console.error(err.stack);

		return next(err);
	}
}

export default Handler;
