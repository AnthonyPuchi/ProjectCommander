import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import HeaderStart from './HeaderStart';

const NewSaucer = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [preparation, setPreparation] = useState('');

  const handleCancel = () => {
    // Restablecer los campos después de cancelar
    setName('');
    setCategory('');
    setPrice('');
    setPreparation('');
  };

  const handleSave = () => {
    const data = {
      name,
      category,
      price,
      preparation,
    };

    fetch('http://localhost:8081/saucer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(responseData => {
        console.log('Respuesta:', responseData);
        setName('');
        setCategory('');
        setPrice('');
        setPreparation('');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <View style={styles.container}>
      <HeaderStart />
      <View style={styles.newSaucerContainer}>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={text => setName(text)}
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Category</Text>
          <TextInput
            style={styles.input}
            placeholder="Category"
            value={category}
            onChangeText={text => setCategory(text)}
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Price</Text>
          <TextInput
            style={styles.input}
            placeholder="Price"
            value={price}
            onChangeText={text => setPrice(text)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Preparation</Text>
          <TextInput
            style={styles.input}
            placeholder="Preparation"
            value={preparation}
            onChangeText={text => setPreparation(text)}
          />
        </View>
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
  fieldContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    width: '50%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginTop: 20,
  },
});

export default NewSaucer;
