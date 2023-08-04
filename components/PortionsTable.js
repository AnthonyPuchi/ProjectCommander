import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getAPI, saucerProteinsPortions } from '../service/ServiceSaucer';

const PortionsTable = () => {
    const [portionsData, setPortionsData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const portionsData = await getAPI(saucerProteinsPortions);
            setPortionsData(portionsData);
        } catch (error) {
            console.error('Error fetching portions data:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Tabla de Porciones</Text>
            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <Text style={[styles.tableHeader, styles.firstColumn]}>ID</Text>
                    <Text style={[styles.tableHeader]}>Saucer ID</Text>
                    <Text style={[styles.tableHeader]}>Proteins ID</Text>
                    <Text style={[styles.tableHeader, styles.lastColumn]}>Quantity</Text>
                </View>
                {portionsData.map((portion) => (
                    <View style={styles.tableRow} key={portion.id}>
                        <Text style={[styles.tableCell, styles.firstColumn]}>{portion.id}</Text>
                        <Text style={styles.tableCell}>{portion.saucerId}</Text>
                        <Text style={styles.tableCell}>{portion.proteinsId}</Text>
                        <Text style={[styles.tableCell, styles.lastColumn]}>{portion.quantity}</Text>
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
});

export default PortionsTable;
