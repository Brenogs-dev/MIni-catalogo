import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';

import { PRODUCTS } from '../data/products';
import { useNavigation } from '@react-navigation/native';

export default function ProductListScreen() {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produtos</Text>

      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate('ProductDetail', {
                productId: item.id,
              })
            }
          >
            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>R$ {item.price}</Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#F2F2F2' },

  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },

  info: {
    flex: 1,
    marginLeft: 12,
  },

  name: {
    fontSize: 16,
    fontWeight: '500',
  },

  price: {
    color: '#2F6BFF',
    fontWeight: 'bold',
    marginTop: 4,
  },

  arrow: {
    fontSize: 22,
    color: '#999',
  },
});