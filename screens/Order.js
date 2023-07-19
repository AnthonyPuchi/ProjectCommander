import React from 'react';
import { View, StyleSheet } from 'react-native';
import Petition from '../components/Petition';
import CymbalReview from '../components/CymbalReview';
import HeaderStart from '../components/HeaderStart';

const Order = () => {
  return (
    <View style={styles.container}>
      <HeaderStart />
      <View style={styles.contentContainer}>
        <View style={styles.petition}>
          <Petition />
        </View>
        <View style={styles.review}>
          <CymbalReview />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  petition: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FED151',
  },
  review: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#71B280',
  },
});

export default Order;
