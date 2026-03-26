export type Product = {
  id: string;
  name: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

export type ProductsStackParamList = {
  ProductList: undefined;
  ProductDetail: { product: Product };
};

export type RootTabParamList = {
  Produtos: undefined;
  Perfil: undefined;
};