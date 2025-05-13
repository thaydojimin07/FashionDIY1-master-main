import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CriacaoScreen = () => {
    const [selectedClothing, setSelectedClothing] = useState<string | null>(null);

    const handleSelectClothing = (clothing: string) => {
        setSelectedClothing(clothing);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mostre Seu Talento</Text>

            <View style={styles.dollContainer}>
                <Text style={styles.dollText}>[Boneco para testar roupas]</Text>
                {selectedClothing && <Text style={styles.selectedText}>Roupas: {selectedClothing}</Text>}
            </View>
            <View style={styles.optionsContainer}>
                <Button title="Camisa" onPress={() => handleSelectClothing('Camisa')} />
                <Button title="Calça" onPress={() => handleSelectClothing('Calça')} />
                <Button title="Sapatos" onPress={() => handleSelectClothing('Sapatos')} />
            </View>
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
    },
    dollText: {
        fontSize: 18,
        color: '#888',
    },
    selectedText: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
});

export default CriacaoScreen;