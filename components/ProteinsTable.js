import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { getAPI, proteins, updateAPI } from '../service/ServiceSaucer';

const ProteinsTable = () => {
    const [proteinsData, setProteinsData] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [selectedProtein, setSelectedProtein] = useState(null);
    const [editedName, setEditedName] = useState('');
    const [editedQuantity, setEditedQuantity] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const proteinsData = await getAPI(proteins);
            setProteinsData(proteinsData);
        } catch (error) {
            console.error('Error fetching proteins data:', error);
        }
    };

    const handleSaveChanges = async () => {
        try {
            const updatedProtein = {
                ...selectedProtein,
                name: editedName || selectedProtein.name,
                quantity: Number(editedQuantity) || selectedProtein.quantity,
            };
            const response = await updateAPI(proteins, updatedProtein);
            console.log('Cambios guardados:', response);
            setEditMode(false);
            setSelectedProtein(null);
            setEditedName('');
            setEditedQuantity('');
            fetchData();
        } catch (error) {
            console.error('Error al guardar los cambios:', error);
        }
    };

    const handleCancelEdit = () => {
        setEditMode(false);
        setSelectedProtein(null);
        setEditedName('');
        setEditedQuantity('');
    };

    const handleEdit = (protein) => {
        setEditMode(true);
        setSelectedProtein(protein);
        setEditedName(protein.name);
        setEditedQuantity(protein.quantity.toString());
    };

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.heading}>Tabla de Proteínas</Text>
            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <Text style={[styles.tableHeader, styles.firstColumn]}>Nombre</Text>
                    <Text style={[styles.tableHeader]}>Cantidad</Text>
                    <Text style={[styles.tableHeader]}>Stock Mínimo</Text>
                    <Text style={[styles.tableHeader, styles.lastColumn]}>Stock Máximo</Text>
                </View>
                {proteinsData.map((protein) => (
                    <View style={styles.tableRow} key={protein.id}>
                        {editMode && selectedProtein?.id === protein.id ? (
                            <TextInput
                                style={[styles.tableCell, styles.editInput]}
                                value={editedName}
                                onChangeText={(text) => setEditedName(text)}
                            />
                        ) : (
                            <Text style={[styles.tableCell, styles.firstColumn]}>{protein.name}</Text>
                        )}
                        {editMode && selectedProtein?.id === protein.id ? (
                            <TextInput
                                style={[styles.tableCell, styles.editInput]}
                                value={editedQuantity}
                                onChangeText={(text) => setEditedQuantity(text)}
                                keyboardType="numeric"
                            />
                        ) : (
                            <Text style={styles.tableCell}>{protein.quantity}</Text>
                        )}
                        <Text style={styles.tableCell}>{protein.stockMin}</Text>
                        <Text style={[styles.tableCell, styles.lastColumn]}>{protein.stockMax}</Text>
                        {editMode && selectedProtein?.id === protein.id ? (
                            <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
                                <Text style={styles.buttonText}>Guardar</Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity style={styles.editButton} onPress={() => handleEdit(protein)}>
                                <Text style={styles.buttonText}>Editar</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                ))}
            </View>
            {editMode && (
                <TouchableOpacity style={styles.cancelButton} onPress={handleCancelEdit}>
                    <Text style={styles.buttonText}>Cancelar Edición</Text>
                </TouchableOpacity>
            )}

            <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
                <Text style={styles.backButtonText}>Atrás</Text>
            </TouchableOpacity>
        </ScrollView>
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
        marginBottom: 20,
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        alignItems: 'center',
    },
    tableHeader: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 5,
        fontWeight: 'bold',
        textAlign: 'flex-start',
    },
    tableCell: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderLeftWidth: 1,
        borderLeftColor: '#fff',
        textAlign: 'center',
    },
    firstColumn: {
        borderLeftWidth: 0,
    },
    lastColumn: {
        borderRightWidth: 0,
    },

    editButton: {
        paddingHorizontal: 16,
        paddingVertical: 5,
        backgroundColor: 'blue',
        borderRadius: 5,
        marginLeft: 5,
    },
    saveButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'green',
        borderRadius: 5,
        marginLeft: 5,
    },
    cancelButton: {
        alignSelf: 'flex-end',
        paddingHorizontal: 20,
        paddingVertical: 6,
        backgroundColor: 'red',
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold',
    },

    backButton: {
        alignSelf: 'flex-start', 
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
    },
    backButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default ProteinsTable;
