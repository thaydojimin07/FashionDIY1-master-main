import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ImageSourcePropType, ScrollView } from 'react-native';

const CriacaoScreen = () => {
  const [selectedClothing, setSelectedClothing] = useState<ImageSourcePropType | null>(null);
  const [selectedAccessory, setSelectedAccessory] = useState<ImageSourcePropType | null>(null);

  const clothingOptions = [
    { id: '1', name: 'Camisa', image: require('../../assets/images/camisa.png') },
    { id: '2', name: 'Calça', image: require('../../assets/images/calca.png') },
    { id: '3', name: 'Chapéu', image: require('../../assets/images/chapeu.png') },
  ];

const accessoriesOptions = [
  { id: '1', name: 'oculos', image: require('../../assets/images/oculos.png') },
];

  const renderItem = (item: any, onSelect: (image: ImageSourcePropType) => void) => (
    <TouchableOpacity style={styles.item} onPress={() => onSelect(item.image)}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Monte Seu Look</Text>

      <View style={styles.dollContainer}>
        <Image source={require('../../assets/images/doll.png')} style={styles.dollImage} />
        {selectedClothing && <Image source={selectedClothing} style={styles.clothingImage} />}
        {selectedAccessory && <Image source={selectedAccessory} style={styles.accessoryImage} />}
      </View>

      <Text style={styles.sectionTitle}>Roupas</Text>
      <FlatList
        data={clothingOptions}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderItem(item, setSelectedClothing)}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
      />

      <Text style={styles.sectionTitle}>Acessórios</Text>
      <FlatList
        data={accessoriesOptions}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderItem(item, setSelectedAccessory)}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
      />

      <TouchableOpacity style={styles.clearButton} onPress={() => {
        setSelectedClothing(null);
        setSelectedAccessory(null);
      }}>
        <Text style={styles.clearButtonText}>Limpar Tudo</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  dollContainer: {
    alignItems: 'center',
    marginBottom: 30,
    position: 'relative',
  },
  dollImage: {
    width: 200,
    height: 200,
  },
  clothingImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 200,
    height: 200,
  },
  accessoryImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 200,
    height: 200,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  horizontalList: {
    paddingBottom: 20,
  },
  item: {
    alignItems: 'center',
    marginRight: 15,
  },
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginBottom: 5,
  },
  itemText: {
    fontSize: 14,
  },
  clearButton: {
    backgroundColor: '#FF5C5C',
    padding: 12,
    borderRadius: 8,
    alignSelf: 'center',
    marginVertical: 20,
  },
  clearButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CriacaoScreen;
