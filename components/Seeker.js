import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const Seeker = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        onSearch(searchQuery);
    };

    const handleShowAll = () => {
        onSearch('all'); 
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button title="Todo" onPress={handleShowAll} />
            </View>
            <TextInput
                style={styles.input}
                placeholder="Escribe tu búsqueda aquí..."
                onChangeText={text => setSearchQuery(text)}
                value={searchQuery}
            />
            <Button title="Buscar" onPress={handleSearch} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 190,
        paddingVertical: 8,
        backgroundColor: '#228b22',
    },
    buttonContainer: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 8,
        marginRight: 8,
    },
});

export default Seeker;
