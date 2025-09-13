export interface Product {
  title: string;
  price: number;
  isZelle?: boolean;
}

export interface SubCombo {
  title: string;
  items: Item[];
}

export interface Item {
  title: string;
  quantity: string;
}

export interface Combo extends Product {
  items: (Item | SubCombo)[];
  extras?: Product[];
  important?: string;
}

export interface Pizza extends Product {
  extras: Product[];
}
