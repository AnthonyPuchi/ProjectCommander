import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { getAPI, saucerProteinsSaucer } from '../service/ServiceSaucer';

const PetitionTable = ({ searchQuery, addToOrder }) => {
    const navigation = useNavigation();
    const [saucerData, setSaucerData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [searchQuery]);

    const fetchData = async () => {
        try {
            const saucerData = await getAPI(saucerProteinsSaucer);
            setSaucerData(saucerData);
        } catch (error) {
            console.error('Error fetching saucer data:', error);
        }
    };

    const filterSaucerData = () => {
        if (searchQuery === 'all' || searchQuery === 'other') {
            return saucerData;
        }

        return saucerData.filter((saucer) =>
            saucer.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };

    const filteredSaucerData = filterSaucerData();

    const handlePorcionesButton = () => {
        navigation.navigate('ListPortions');
        
        console.log('Clicked Porciones button');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Tabla de Pedidos</Text>
            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <Text style={[styles.tableHeader, styles.firstColumn]}>Nombre</Text>
                    <Text style={[styles.tableHeader, styles.leftAlign]}>Categoría</Text>
                    <Text style={[styles.tableHeader, styles.leftAlign]}>Precio</Text>
                    <Text style={[styles.tableHeader, styles.leftAlign]}>Preparación</Text>
                    <Text style={[styles.tableHeader, styles.lastColumn]}>Porciones</Text>
                </View>
                {filteredSaucerData.map((saucer, index) => (
                    <View
                        style={[
                            styles.tableRow,
                            index !== filteredSaucerData.length - 1 && styles.divider
                        ]}
                        key={saucer.id}
                    >
                        <Text style={[styles.tableCell, styles.firstColumn]}>{saucer.name}</Text>
                        <Text style={[styles.tableCell, styles.leftAlign]}>{saucer.category}</Text>
                        <Text style={[styles.tableCell, styles.leftAlign]}>{saucer.price}</Text>
                        <Text style={[styles.tableCell, styles.leftAlign]}>{saucer.preparation}</Text>
                        <Text style={[styles.tableCell, styles.lastColumn]}>{saucer.proteins}</Text>
                        <TouchableOpacity
                            style={styles.addButton}
                            onPress={() => addToOrder(saucer)}
                        >
                            <Text style={styles.addButtonText}>Agregar</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.porcionesButton} onPress={handlePorcionesButton}>
                    <Text style={styles.buttonText}>Porciones</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    table: {
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        alignItems: 'center',
    },
    divider: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    tableHeader: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 5,
        fontWeight: 'bold',
        textAlign: 'left', 
    },
    tableCell: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderLeftWidth: 1,
        borderLeftColor: '#fff',
        textAlign: 'left', 
    },
    firstColumn: {
        borderLeftWidth: 0,
    },
    lastColumn: {
        borderRightWidth: 0,
    },
    addButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'green',
        borderRadius: 5,
        marginLeft: 10,
    },
    addButtonText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
    leftAlign: {
        textAlign: 'left', 
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20, 
        left: 0,
        right: 0,
        alignItems: 'flex-start',
    },
    porcionesButton: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default PetitionTable;
