import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAPI, proteins, petition } from '../service/ServiceSaucer';

const PortionsTable = () => {
  const [portionsData, setPortionsData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const proteinsData = await getAPI(proteins);
      const petitionData = await getAPI(petition);

      const combinedData = proteinsData.map((protein) => {
        const petitionItem = petitionData.find((item) => item.proteins === protein.id);
        return {
          id: protein.id,
          name: protein.name,
          stockMax: protein.stockMax,
        };
      });

      setPortionsData(combinedData);
    } catch (error) {
      console.error('Error fetching portions data:', error);
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const updateStockMax = (proteinId, quantity) => {
    setPortionsData(prevData => {
      return prevData.map(portion => {
        if (portion.id === proteinId) {
          return {
            ...portion,
            stockMax: Math.max(0, portion.stockMax - quantity),
          };
        }
        return portion;
      });
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tabla de Porciones</Text>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={[styles.tableHeader, styles.firstColumn]}>Proteína</Text>
          <Text style={[styles.tableHeader]}>Stock Máximo</Text>
        </View>
        {portionsData.map((portion) => (
          <View style={styles.tableRow} key={portion.id}>
            <Text style={[styles.tableCell, styles.firstColumn]}>{portion.name}</Text>
            <Text style={styles.tableCell}>{portion.stockMax}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <Text style={styles.backButtonText}>Atras</Text>
      </TouchableOpacity>
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
  backButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PortionsTable;

