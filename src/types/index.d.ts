type TStringOrObject = string | object;
type TNumberOrString = number | string;

type TNavMenu = {
  [key: TNumberOrString]: string | TNestedObject
}

type TProduct = {
  Title: string;
  Year: string;
  Price: string;
  Image?: string;
}

type TProductList = {
  [key: string]: TProduct
}

type TNavMenuWithProduct = {
  menu: TNavMenu;
  MobileList: TProductList
}

type TCartProduct = TProduct & { Quantity: number };