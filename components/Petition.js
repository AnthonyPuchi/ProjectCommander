import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Petition = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Pedido</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FED151',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default Petition;
