import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const OrderButton = () => {
  return (
    <TouchableOpacity style={styles.buttonContainer} >
      <Text style={styles.buttonText}>Nueva orden</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#f4511e',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OrderButton;
