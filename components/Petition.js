import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createAPI, petition } from '../service/ServiceSaucer';
import Input from '../components/Input';

const Petition = ({ order }) => {
    const [tableNum, setTableNum] = useState('');
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
                tableNum,
            };

            const response = await createAPI(petition, dataToSave);
            console.log('Order saved successfully:', response);
        } catch (error) {
            console.error('Error saving order:', error);
        }
    };

    const handleCancelOrder = () => {
        setTableNum('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pedido</Text>
            <View style={styles.inputContainer}>
                <Input
                    label="Número de Mesa"
                    placeholder="Número de mesa"
                    value={tableNum}
                    onChangeText={setTableNum}
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderText}>Nombre</Text>
                <Text style={styles.tableHeaderText}>Precio</Text>
                <Text style={styles.tableHeaderText}>Porciones de Carne</Text>
            </View>
            <View style={styles.orderContainer}>
                {order.map((saucer, index) => (
                    <View key={index} style={styles.tableRow}>
                        <Text style={styles.tableCell}>{saucer.name}</Text>
                        <Text style={styles.tableCell}>{saucer.price}</Text>
                        <Text style={styles.tableCell}>{saucer.proteins}</Text>
                    </View>
                ))}
            </View>
            <View style={styles.buttonContainer}>
            <View style={styles.buttonsAbsoluteContainer}>
                    <TouchableOpacity style={styles.cancelButton} onPress={handleCancelOrder}>
                        <Text style={styles.buttonText}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.saveButton} onPress={handleSaveOrder}>
                        <Text style={styles.buttonText}>Guardar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DCDAD4',
        padding: 10,
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
        flex: 1,
        justifyContent: 'flex-start',

    },
    buttonsAbsoluteContainer: {
        position: 'absolute', 
        bottom: 20,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: 10,
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
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
});

export default Petition;


