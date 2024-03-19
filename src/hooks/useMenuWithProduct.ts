import React, { useEffect, useState } from 'react'
import { getNavMenuItemsWithProducts } from '../apis/navbar-with-products';
import { useAppDispatch } from '.';
import { addItemsIntoMenu } from '../store/slices/menuSlice';
import { addProductsIntoList } from '../store/slices/productSlice';
import { generateRandomImgPath } from '../utils';

const useMenuWithProduct = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const { data } = await getNavMenuItemsWithProducts();
        const { menu, MobileList } = data;
        dispatch(addItemsIntoMenu(menu));

        const products: TProductList = {};
        Object.keys(MobileList).forEach((key) => {
          const product = { ...MobileList[key], Image: generateRandomImgPath() };
          products[key] = product;
        });

        dispatch(addProductsIntoList(products));
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  
  return {
    isLoading,
    isError
  }
}

export default useMenuWithProduct