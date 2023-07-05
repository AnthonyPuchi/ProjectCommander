import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getAPI } from '../service/ServiceSaucer'; 

const TableSaucer = () => {
    const [saucerData, setSaucerData] = useState([]);

    useEffect(() => {
    fetchData();
    }, []);

    const fetchData = async () => {
    try {
      const saucerData = await getAPI('http://localhost:8081/saucer'); // Utiliza la función getAPI con tu URL específica
        setSaucerData(saucerData);
    } catch (error) {
        console.error('Error fetching saucer data:', error);
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
        </View>
        {saucerData.map((saucer) => (
            <View style={styles.tableRow} key={saucer.id}>
            <Text style={styles.tableCell}>{saucer.name}</Text>
            <Text style={styles.tableCell}>{saucer.category}</Text>
            <Text style={styles.tableCell}>{saucer.price}</Text>
            <Text style={styles.tableCell}>{saucer.preparation}</Text>
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
        backgroundColor: '#D6BD39',
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
});

export default TableSaucer;
