import api from "./baseApi";

export const getNavMenuItemsWithProducts = () => {
  return api.get<TNavMenuWithProduct>('/frontend.php');
};