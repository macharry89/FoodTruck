import { useState, useEffect, useRef } from "react";
import ReactPaginate from 'react-paginate';

import { getFoodTrucks } from "../../services";

function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const prevLoading = usePrevious(isLoading);

  useEffect(() => {
    if (!prevLoading && isLoading) {
      fetchData();
    }
  }, [isLoading,itemsPerPage, currentPage]);

  const fetchData = async () => {
    getFoodTrucks({currentPage, itemsPerPage})
      .then(res => {
        setCurrentItems(res.data.items);
        setItemOffset(res.data.itemOffset);
        setTotalCount(res.data.totalCount);
        setPageCount(res.data.pageCount);
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      })
  };

  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
    setIsLoading(true);
  };

  const handleItemsPerPageChanged = (event) => {
    setItemsPerPage(event.target.value);
    setCurrentPage(1);
    setIsLoading(true);
  }

  return (
    <>
      <h2 className="intro-y text-lg font-medium mt-10">Food Truck List</h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
          <div className="hidden md:block mx-auto text-slate-500">
            Showing {itemOffset} to {itemOffset + itemsPerPage - 1} of {totalCount} entries
          </div>
        </div>
        {/* BEGIN: Data List */}
        <div className="intro-y col-span-12 overflow-auto">
          <table className="table table-report -mt-2">
            <thead>
              <tr>
                <th className="whitespace-nowrap">locationId</th>
                <th className="whitespace-nowrap">Applicant</th>
                <th className="whitespace-nowrap">FacilityType</th>
                <th className="whitespace-nowrap">cnn</th>
                <th className="whitespace-nowrap">LocationDescription</th>
                <th className="whitespace-nowrap">Address</th>
                <th className="whitespace-nowrap">blocklot</th>
                <th className="whitespace-nowrap">block</th>
                <th className="whitespace-nowrap">lot</th>
                <th className="whitespace-nowrap">permit</th>
                <th className="whitespace-nowrap">Status</th>
                <th className="whitespace-nowrap">FoodItems</th>
                <th className="whitespace-nowrap">X</th>
                <th className="whitespace-nowrap">Y</th>
                <th className="whitespace-nowrap">Latitude</th>
                <th className="whitespace-nowrap">Longitude</th>
                <th className="whitespace-nowrap">Schedule</th>
                <th className="whitespace-nowrap">dayshours</th>
                <th className="whitespace-nowrap">NOISent</th>
                <th className="whitespace-nowrap">Approved</th>
                <th className="whitespace-nowrap">Received</th>
                <th className="whitespace-nowrap">PriorPermit</th>
                <th className="whitespace-nowrap">ExpirationDate</th>
                <th className="whitespace-nowrap">Location</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, itemKey) => (
                <tr key={itemKey} className="intro-x">
                  <td className="w-40">
                    <div className="flex">
                      {item.locationid}
                    </div>
                  </td>
                  <td>
                    {item.Applicant}
                  </td>
                  <td>
                    {item.FacilityType}
                  </td>
                  <td className="text-right">
                    {item.cnn}
                  </td>
                  <td>
                    {item.LocationDescription}
                  </td>
                  <td>
                    {item.Address}
                  </td>
                  <td>
                    {item.blocklot}
                  </td>
                  <td>
                    {item.block}
                  </td>
                  <td>
                    {item.lot}
                  </td>
                  <td>
                    {item.permit}
                  </td>
                  <td>
                    {item.Status}
                  </td>
                  <td>
                    {item.FoodItems}
                  </td>
                  <td>
                    {item.X}
                  </td>
                  <td>
                    {item.Y}
                  </td>
                  <td>
                    {item.Latitude}
                  </td>
                  <td>
                    {item.Longitude}
                  </td>
                  <td>
                    {item.Schedule}
                  </td>
                  <td>
                    {item.dayshours}
                  </td>
                  <td>
                    {item.NOISent}
                  </td>
                  <td>
                    {item.Approved}
                  </td>
                  <td>
                    {item.Received}
                  </td>
                  <td>
                    {item.PriorPermit}
                  </td>
                  <td>
                    {item.ExpirationDate}
                  </td>
                  <td>
                    {item.Location}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* END: Data List */}
        {/* BEGIN: Pagination */}
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
          <nav className="w-full sm:w-auto sm:mr-auto">
            <ReactPaginate
              previousLabel="<"
              nextLabel=">"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName="pagination"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              activeClassName="active"
            />
          </nav>
          <select className="w-20 form-select box mt-3 sm:mt-0" onChange={handleItemsPerPageChanged}>
            <option>10</option>
            <option>25</option>
            <option>35</option>
            <option>50</option>
          </select>
        </div>
        {/* END: Pagination */}
      </div>
    </>
  );
}

export default Main;
