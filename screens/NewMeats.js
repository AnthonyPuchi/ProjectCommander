import React, { useState } from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';
import HeaderStart from '../components/HeaderStart';
import Input from '../components/Input';
import { createAPI, proteins } from '../service/ServiceSaucer';

const NewMeats = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleCancel = () => {
    setName('');
    setQuantity('');
  };

  const handleSave = async () => {
    const data = {
      name,
      quantity,
    };

    try {
      const response = await createAPI(proteins, data);
      setName('');
      setQuantity('');
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
          label="Name"
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          label="Quantity"
          placeholder="Quantity"
          value={quantity}
          onChangeText={(text) => setQuantity(text)}
          keyboardType="numeric"
        />
        <View style={styles.buttonContainer}>
          <Button title="Cancel" onPress={handleCancel} color="red" />
          <Button title="Save" onPress={handleSave} color="green" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6BD39',
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
