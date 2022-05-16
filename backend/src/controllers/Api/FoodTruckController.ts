import FoodTruckService from '../../services/FoodTruckService';

class FoodTruckController {
	public static async get(req: any, res: any, next: any): Promise<any> {
    const result = await FoodTruckService.fetch();

    const { currentPage, itemsPerPage } = req.query;
    const totalCount = result.length;
    const _result = result.slice(itemsPerPage * (currentPage - 1), itemsPerPage * currentPage) || [];
    const pageCount  = Math.ceil(totalCount / itemsPerPage);
    const itemOffset = itemsPerPage * (currentPage - 1) + 1;

		return res.json({
      totalCount,
      pageCount,
      itemOffset,
      items: _result
    });
	}
}

export default FoodTruckController;
