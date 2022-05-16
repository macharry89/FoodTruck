import * as os from 'os';
import cluster from 'cluster';

import App from './providers/App';

/**
 * Clear the console before the app runs
 */
App.clearConsole();

/**
 * Load Configuration
 */
App.loadConfiguration();

/**
 * Run the Server on Clusters
 */
App.loadServer();