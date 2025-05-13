import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

const userData = {
  name: 'João Silva',
  email: 'joao.silva@email.com',
  createdClothes: [
    { id: '1', name: 'Camiseta Personalizada', image: 'https://via.placeholder.com/100' },
    { id: '2', name: 'Calça Jeans Customizada', image: 'https://via.placeholder.com/100' },
    { id: '3', name: 'Jaqueta Estilizada', image: 'https://via.placeholder.com/100' },
  ],
};

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Informações do usuário */}
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{userData.name}</Text>
        <Text style={styles.userEmail}>{userData.email}</Text>
      </View>

      {/* Lista de roupas criadas */}
      <Text style={styles.sectionTitle}>Roupas Criadas</Text>
      <FlatList
        data={userData.createdClothes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.clothingItem}>
            <Image source={{ uri: item.image }} style={styles.clothingImage} />
            <Text style={styles.clothingName}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  userInfo: {
    marginBottom: 24,
    alignItems: 'center',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 16,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  clothingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  clothingImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 16,
  },
  clothingName: {
    fontSize: 16,
  },
});