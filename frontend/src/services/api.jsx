import axios from "axios";

import { apiUrl  } from "../config";

const getFoodTrucks = (filter) => {
  return axios({
    url: `${apiUrl}/foodtruck`,
    method: 'get',
    headers: {
      "Content-Type": "application/json"
    },
    params: filter,
  });
}

export {
  getFoodTrucks
};