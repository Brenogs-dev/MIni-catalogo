import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Perfil</Text>

      <Image
        source={{ uri: 'https://w7.pngwing.com/pngs/1000/665/png-transparent-computer-icons-profile-s-free-angle-sphere-profile-cliparts-free.png' }}
        style={styles.avatar}
      />

      <Text style={styles.name}>Eliza Soares</Text>
      <Text style={styles.role}>Cliente Premium</Text>

      <Text style={styles.info}>📧 eliza.soares@email.com</Text>
      <Text style={styles.info}>📞 (11) 98765-4321</Text>
      <Text style={styles.info}>📍 São Paulo, SP</Text>

      <TouchableOpacity style={styles.button}>
        <Text>Editar Perfil</Text>
      </TouchableOpacity>

      <View style={styles.stats}>
        <View>
          <Text style={styles.number}>12</Text>
          <Text>Compras</Text>
        </View>
        <View>
          <Text style={styles.number}>8</Text>
          <Text>Favoritos</Text>
        </View>
        <View>
          <Text style={styles.number}>5</Text>
          <Text>Avaliações</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F2F2F2',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  role: {
    color: '#777',
    marginBottom: 12,
  },
  info: {
    marginTop: 4,
  },
  button: {
    marginTop: 16,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  stats: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
    width: '100%',
  },
  number: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2F6BFF',
    textAlign: 'center',
  },
});