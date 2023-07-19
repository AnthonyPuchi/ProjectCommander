import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { getAPI, updateAPI } from '../service/ServiceSaucer';

const TableSaucer = () => {
    const [saucerData, setSaucerData] = useState([]);
    const [editMode, setEditMode] = useState(null);
    const [editedName, setEditedName] = useState('');
    const [editedCategory, setEditedCategory] = useState('');
    const [editedPrice, setEditedPrice] = useState('');
    const [editedPreparation, setEditedPreparation] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const saucerData = await getAPI('http://localhost:8081/saucer/proteins-saucer');
            setSaucerData(saucerData);
        } catch (error) {
            console.error('Error fetching saucer data:', error);
        }
    };

    const handleEdit = (id, name, category, price, preparation) => {
        setEditMode(id);
        setEditedName(name);
        setEditedCategory(category);
        setEditedPrice(price);
        setEditedPreparation(preparation);
    };

    const handleSave = async (id) => {
        try {
            const saucerToUpdate = saucerData.find((saucer) => saucer.id === id);

            if (saucerToUpdate) {
                const updatedSaucerData = {
                    ...saucerToUpdate,
                    name: editedName,
                    price: editedPrice,
                    preparation: editedPreparation,
                };

                await updateAPI('http://localhost:8081/saucer', updatedSaucerData);

                const updatedData = saucerData.map((saucer) =>
                    saucer.id === id ? updatedSaucerData : saucer
                );

                setSaucerData(updatedData);
                setEditMode(null);
                setEditedName('');
                setEditedCategory('');
                setEditedPrice('');
                setEditedPreparation('');
            }
        } catch (error) {
            console.error('Error updating saucer:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Saucer Table</Text>
            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <Text style={styles.tableHeader}>Name</Text>
                    <Text style={styles.tableHeader}>Category</Text>
                    <Text style={styles.tableHeader}>Price</Text>
                    <Text style={styles.tableHeader}>Preparation</Text>
                    <Text style={styles.tableHeader}>Proteins</Text>
                </View>
                {saucerData.map((saucer) => (
                    <View style={styles.tableRow} key={saucer.id}>
                        {editMode === saucer.id ? (
                            <>
                                <TextInput
                                    style={styles.tableCellEditable}
                                    value={editedName}
                                    onChangeText={setEditedName}
                                />
                                <TextInput
                                    style={styles.tableCellEditable}
                                    value={editedCategory}
                                    onChangeText={setEditedCategory}
                                />
                                <TextInput
                                    style={styles.tableCellEditable}
                                    value={editedPrice}
                                    onChangeText={setEditedPrice}
                                />
                                <TextInput
                                    style={styles.tableCellEditable}
                                    value={editedPreparation}
                                    onChangeText={setEditedPreparation}
                                />
                                <TouchableOpacity
                                    style={styles.saveButton}
                                    onPress={() => handleSave(saucer.id)}
                                >
                                    <Text style={styles.saveButtonText}>Save</Text>
                                </TouchableOpacity>
                            </>
                        ) : (
                            <>
                                <Text style={styles.tableCell}>{saucer.name}</Text>
                                <Text style={styles.tableCell}>{saucer.category}</Text>
                                <Text style={styles.tableCell}>{saucer.price}</Text>
                                <Text style={styles.tableCell}>{saucer.preparation}</Text>
                                <Text style={styles.tableCell}>{saucer.proteins}</Text>
                                <TouchableOpacity
                                    style={styles.editButton}
                                    onPress={() =>
                                        handleEdit(saucer.id, saucer.name, saucer.category, saucer.price, saucer.preparation)
                                    }
                                >
                                    <Text style={styles.editButtonText}>Edit</Text>
                                </TouchableOpacity>
                            </>
                        )}
                    </View>
                ))}
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
    tableHeader: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 5,
        fontWeight: 'bold',
    },
    tableCell: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    tableCellEditable: {
        flex: 1,
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    editButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#8EC8D0',
        borderRadius: 5,
        marginLeft: 10,
    },
    editButtonText: {
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold',
    },
    saveButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'green',
        borderRadius: 5,
        marginLeft: 10,
    },
    saveButtonText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default TableSaucer;

