import * as path from 'path';
import * as dotenv from 'dotenv';

import Express from './Express';

class App {
	// Clear the console
	public clearConsole (): void {
		process.stdout.write('\x1B[2J\x1B[0f');
	}

	// Loads your dotenv file
	public loadConfiguration (): void {
		console.info('Configuration :: Booting @ Master...');

		dotenv.config({ path: path.join(__dirname, '../../.env') });
	}

	// Loads your Server
	public loadServer (): void {
		console.info('Server :: Booting @ Master...');

		Express.init();
	}

	// Loads the Worker Cluster
	public loadWorker (): void {
		console.info('Worker :: Booting @ Master...');
	}
}

export default new App;
