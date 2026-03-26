import { View, Text, StyleSheet, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { PRODUCTS } from '../data/products';

export default function ProductDetailScreen() {
  const route: any = useRoute();

  const product = PRODUCTS.find(
    (p) => p.id === route.params.productId
  );

  if (!product) return <Text>Produto não encontrado</Text>;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />

      <View style={styles.card}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>R$ {product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F2F2F2' },

  image: {
    width: '100%',
    height: 250,
  },

  card: {
    backgroundColor: '#FFF',
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  price: {
    fontSize: 20,
    color: '#2F6BFF',
    marginVertical: 10,
    fontWeight: 'bold',
  },

  description: {
    fontSize: 16,
    color: '#555',
  },
});