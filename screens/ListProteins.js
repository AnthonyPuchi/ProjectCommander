import React from 'react';
import { View, StyleSheet } from 'react-native';
import HeaderStart from '../components/HeaderStart';
import ProteinsTable from '../components/ProteinsTable';

const ListProteins = () => {
  return (
    <View style={styles.container}>
      <HeaderStart />
      <View style={styles.proteinsTableContainer}>
        <ProteinsTable />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4EC28E',
  },
  proteinsTableContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
});

export default ListProteins;
