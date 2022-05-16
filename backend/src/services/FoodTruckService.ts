import Locals from '../providers/Locals';
import axios from 'axios';
import csv from 'csvtojson';
import { resolve } from 'path';

class FoodTruckService {
	public static async fetch(): Promise<any> {
		console.info('FoodTruck Service :: Fetching food truck data from CSV...');
    
    const result = await axios.get(Locals.config().dataUrl);
    const csvResult = await csv().fromString(result.data);

    return csvResult;
	}
}

export default FoodTruckService;
