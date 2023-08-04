import React, { useState } from 'react';
import { View, Button, StyleSheet, Alert, Picker } from 'react-native';
import HeaderStart from '../components/HeaderStart';
import Input from '../components/Input';
import { createAPI, proteins } from '../service/ServiceSaucer';

const NewMeats = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [stockMin, setStockMin] = useState('');
  const [stockMax, setStockMax] = useState('');


  const handleCancel = () => {
    setName('');
    setQuantity('');
    setStockMin('');
    setStockMax('');
  };

  const handleSave = async () => {
    const data = {
      name,
      quantity,
      stockMin,
      stockMax,
    };

    try {
      const response = await createAPI(proteins, data);
      setName('');
      setQuantity('');
      setStockMin('');
      setStockMax('');
      Alert.alert('Success', 'Saucer saved successfully');
    } catch (error) {
      console.log('Error al guardar los platillos:', error);
    }
  };

  return (
    <View style={styles.container}>
      <HeaderStart />
      <View style={styles.newSaucerContainer}>
        <Input
          label="Nombre de la carne"
          placeholder="Nombre de la carne"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          label="Cantidad de Porciones"
          placeholder="Cantidad de Porciones"
          value={quantity}
          onChangeText={(text) => setQuantity(text)}
          keyboardType="numeric"
        />
        <Input
          label="Stock Mínimo"
          placeholder="Stock Mínimo"
          value={stockMin}
          onChangeText={(text) => setStockMin(text)}
          keyboardType="numeric"
        />
        <Input
          label="Stock Máximo"
          placeholder="Stock Máximo"
          value={stockMax}
          onChangeText={(text) => setStockMax(text)}
          keyboardType="numeric"
        />
        <View style={styles.buttonContainer}>
          <Button title="Cancelar" onPress={handleCancel} color="red" />
          <Button title="Guardar" onPress={handleSave} color="green" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4EC28E',
  },
  newSaucerContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginTop: 20,
  },
});

export default NewMeats;

