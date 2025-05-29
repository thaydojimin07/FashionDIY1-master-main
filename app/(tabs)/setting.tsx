import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, TextInput, Button } from 'react-native';

const ProfileScreen = () => {
  const [createdClothes, setCreatedClothes] = useState([
    { id: '1', name: 'Camisa Personalizada', image: 'https://via.placeholder.com/100' },
    { id: '2', name: 'Calça Customizada', image: 'https://via.placeholder.com/100' },
  ]);

  const [newClothingName, setNewClothingName] = useState('');
  const [newClothingImage, setNewClothingImage] = useState('');

  const handleAddClothing = () => {
    if (newClothingName && newClothingImage) {
      const newClothing = {
        id: (createdClothes.length + 1).toString(),
        name: newClothingName,
        image: newClothingImage,
      };
      setCreatedClothes([...createdClothes, newClothing]);
      setNewClothingName('');
      setNewClothingImage('');
    }
  };

  return (
    <View style={styles.container}>
      {/* Informações do Usuário */}
      <View style={styles.userInfo}>
        <Text style={styles.userName}>João Silva</Text>
        <Text style={styles.userEmail}>joao.silva@email.com</Text>
      </View>

      {/* Formulário para Adicionar Roupas */}
      <View style={styles.addClothingForm}>
        <TextInput
          style={styles.input}
          placeholder="Nome da Roupa"
          value={newClothingName}
          onChangeText={setNewClothingName}
        />
        <TextInput
          style={styles.input}
          placeholder="URL da Imagem"
          value={newClothingImage}
          onChangeText={setNewClothingImage}
        />
        <Button title="Adicionar Roupa" onPress={handleAddClothing} />
      </View>

      {/* Lista de Roupas Criadas */}
      <Text style={styles.sectionTitle}>Roupas Criadas</Text>
      <FlatList
        data={createdClothes}
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
};

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
  addClothingForm: {
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
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

export default ProfileScreen;