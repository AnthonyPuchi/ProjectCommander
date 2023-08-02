import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createAPI, petition } from '../service/ServiceSaucer';

const Petition = ({ order }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [proteins, setProteins] = useState('');

    const handleSaveOrder = async () => {
        try {
            const firstSaucer = order[0];
            setName(firstSaucer.name);
            setPrice(firstSaucer.price);
            setProteins(firstSaucer.proteins);

            const dataToSave = {
                name: firstSaucer.name,
                price: firstSaucer.price,
                proteins: firstSaucer.proteins,
            };

            const response = await createAPI(petition, dataToSave);
            console.log('Order saved successfully:', response);
        } catch (error) {
            console.error('Error saving order:', error);
        }
    };

    const handleCancelOrder = () => {
        setOrder([]);
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Pedido</Text>
                <View style={styles.tableHeader}>
                    <Text style={styles.tableHeaderText}>Name</Text>
                    <Text style={styles.tableHeaderText}>Price</Text>
                    <Text style={styles.tableHeaderText}>Proteins</Text>
                </View>
                <View style={styles.orderContainer}>
                    {order.map((platillo, index) => (
                        <View key={index} style={styles.tableRow}>
                            <Text style={styles.tableCell}>{platillo.name}</Text>
                            <Text style={styles.tableCell}>{platillo.price}</Text>
                            <Text style={styles.tableCell}>{platillo.proteins}</Text>
                        </View>
                    ))}
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.cancelButton} onPress={handleCancelOrder}>
                    <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.saveButton} onPress={handleSaveOrder}>
                    <Text style={styles.buttonText}>Guardar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DCDAD4',
        padding: 10,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
    },
    tableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    tableHeaderText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        flex: 1,
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    tableCell: {
        fontSize: 16,
        color: 'black',
        flex: 1,
    },
    orderContainer: {
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    cancelButton: {
        flex: 1,
        backgroundColor: 'red',
        paddingVertical: 10,
        borderRadius: 5,
        marginRight: 5,
    },
    saveButton: {
        flex: 1,
        backgroundColor: 'green',
        paddingVertical: 10,
        borderRadius: 5,
        marginLeft: 5,
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
    },
});

export default Petition;

