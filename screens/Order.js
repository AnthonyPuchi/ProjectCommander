import React from 'react';
import { View, StyleSheet } from 'react-native';
import HeaderStart from '../components/HeaderStart';
import CategoryButtons from '../components/CategoryButtons';

const Order = () => {
  return (
    <View style={styles.container}>
        <HeaderStart />
        <View style={styles.categoryContainer}>
        <CategoryButtons />
        </View>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6BD39',
  },
  categoryContainer: {
    

  },
});

export default Order;
