export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export type ProductListResponse = {
  items: Product[];
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
};
