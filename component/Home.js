import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import HeaderStart from './HeaderStart';
import CategoryButtons from './CategoryButtons';
import ImageGallery from './ImageGallery';
import OrderButton from './OrderButton';

const Home = () => {
  const navigation = useNavigation();

  const handleAddPress = () => {
    navigation.navigate('NewSaucer');
  };

  return (
    <View style={styles.container}>
      <HeaderStart />
      <CategoryButtons onPress={handleAddPress} />
      <ImageGallery />
      <OrderButton  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6BD39',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

export default Home;
