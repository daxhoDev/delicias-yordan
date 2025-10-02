export interface Element {
  name: string;
  quantity?: string;
  price?: string;
}

export interface List {
  header: string;
  elements: Array<Element>;
}

export interface Product {
  _id: { $oid: string };
  title: string;
  image?: string;
  featured?: boolean;
  category: string;
  description?: string;
  price: string;
  lists?: Array<List>;
  extras?: Array<Element>;
  important?: string;
}
