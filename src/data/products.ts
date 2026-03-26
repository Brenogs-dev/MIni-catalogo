export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Smartphone',
    price: '2.500,00',
    description: 'Smartphone moderno com ótima câmera.',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
  },
  {
    id: '2',
    name: 'Notebook',
    price: '4.000,00',
    description: 'Notebook ideal para estudos e trabalho.',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
  },
  {
    id: '3',
    name: 'Fone Bluetooth',
    price: '300,00',
    description: 'Fone sem fio com excelente qualidade de som.',
    image: 'https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/ahthsvbz/file.png',
  },
];