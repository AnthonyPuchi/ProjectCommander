import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Petition = ({ order }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pedido</Text>
            {order.map((platillo, index) => (
                <Text key={index} style={styles.orderItem}>
                    {platillo}
                </Text>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DCDAD4',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
});

export default Petition;
