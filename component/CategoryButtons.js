import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CategoryButtons = ({onPress}) => {
  const navigation = useNavigation();

  const handleAddPress = () => {
    navigation.navigate('NewOrder');
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>All</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Meats</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Drinks</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Others</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Add Saucer</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 192,
    backgroundColor: '#25293e',
    marginTop: 10,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
    backgroundColor: 'blue',
    marginHorizontal: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CategoryButtons;
