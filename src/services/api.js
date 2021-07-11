import tableData from "../utils/tableData";
import { identifyUser } from "../utils/helpers";

const getRoutes = {
  "/clients": tableData,
};

const postRoutes = {
  "/identity": (body) => identifyUser(body),
};

export const getRequest = async (route) => {
  return getRoutes[route];
};

export const postRequest = async (route, body = {}) => {
  return postRoutes[route](body);
};
