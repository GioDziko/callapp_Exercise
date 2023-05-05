import Home from "../pages/Home/Home";
import Error from "../pages/error/Error";
import Charts from "../pages/Charts/Charts";

import ROUTES from "../constants/routes";

const routes = [
  {
    path: ROUTES.HOME_PAGE,
    component: Home,
  },
  {
    path: ROUTES.CHARTS_PAGE,
    component: Charts,
  },
  {
    path: ROUTES.NOT_FOUND,
    component: Error,
  },
];

export default routes;
