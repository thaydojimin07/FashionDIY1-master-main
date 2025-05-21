import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ImageSourcePropType, Pressable } from 'react-native';

const CriacaoScreen = () => {
    const [selectedClothing, setSelectedClothing] = useState<ImageSourcePropType | null>(null);

    const clothingOptions = [
        { id: '1', name: 'Camisa', image: require('../../assets/images/camisa.png') },
        { id: '2', name: 'Calça', image: require('../../assets/images/calca.png') }, // Corrigido
        { id: '4', name: 'Chapéu', image: require('../../assets/images/chapeu.png') },

    ];

    const handleSelectClothing = (clothing: { name: string; image: any }) => {
        setSelectedClothing(clothing.image);
    };

    const renderClothingItem = ({ item }: { item: { id: string; name: string; image: any } }) => (
        <TouchableOpacity style={styles.item} onPress={() => handleSelectClothing(item)}>
            <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mostre Seu Talento</Text>

            <View style={styles.dollContainer}>
                <Image
                    source={require('../../assets/images/doll.png')}
                    style={styles.dollImage}
                    resizeMode="contain"
                />
                {selectedClothing && (
                    <Image
                        source={selectedClothing}
                        style={styles.clothingImage}
                        resizeMode="contain"
                    />
                )}
            </View>

            <FlatList
                data={clothingOptions}
                keyExtractor={(item) => item.id}
                renderItem={renderClothingItem}
                contentContainerStyle={styles.listContainer}
            />
            <Pressable
                onPress={() => setSelectedClothing(null)}
                style={{ marginTop: 20, padding: 10, backgroundColor: '#007BFF', borderRadius: 5 }}
            >
                <Text style={{ color: '#fff', textAlign: 'center' }}>Limpar Seleção</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    dollContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 20,
        backgroundColor: '#fff',
        position: 'relative',
    },
    dollImage: {
        width: 150,
        height: 150,
        marginBottom: 10,
    },
    clothingImage: {
        width: 150,
        height: 150,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    selectedText: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    listContainer: {
        marginTop: 20,
    },
    item: {
        padding: 15,
        marginVertical: 5,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
    },
    itemText: {
        fontSize: 16,
        textAlign: 'center',
    },
});

export default CriacaoScreen;