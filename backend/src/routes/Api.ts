import { Router } from 'express';

import FoodTruckController from '../controllers/Api/FoodTruckController';

const router = Router();

router.get('/foodtruck', FoodTruckController.get);

export default router;
