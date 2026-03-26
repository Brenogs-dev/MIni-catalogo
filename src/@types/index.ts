export type Product = {
  id: string;
  name: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

// Tipos das rotas do Stack Navigator
export type ProductsStackParamList = {
  ProductList: undefined;
  ProductDetail: { product: Product };
};

// Tipos das rotas do Tab Navigator
export type RootTabParamList = {
  Produtos: undefined;
  Perfil: undefined;
};