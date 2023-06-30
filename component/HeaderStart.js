import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const HeaderStart = () => {
  const navigation = useNavigation();

  const handleAddPress = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleAddPress}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Close</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>More</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 438,
    backgroundColor: '#25293e',
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
    backgroundColor: 'blue',
    marginRight: 10,
    marginHorizontal: 20,
  },
    buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    },
});

export default HeaderStart;
