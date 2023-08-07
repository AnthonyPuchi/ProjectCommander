import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const ImageGallery = () => {
    const images = [
        { source: require('../assets/carne.jpg'), name: 'Platillo 1' },
        { source: require('../assets/carne2.jpg'), name: 'Platillo 2' },
        { source: require('../assets/carne3.jpg'), name: 'Platillo 3' },
        { source: require('../assets/carne4.jpg'), name: 'Platillo 4' },
        { source: require('../assets/carne5.jpg'), name: 'Platillo 5' },
        { source: require('../assets/carne6.jpg'), name: 'Platillo 6' },
        { source: require('../assets/carne7.jpg'), name: 'Platillo 7' },
        { source: require('../assets/carne8.jpg'), name: 'Platillo 8' },
        { source: require('../assets/carne9.jpg'), name: 'Platillo 9' },
        { source: require('../assets/carne10.jpg'), name: 'Platillo 10' },
        { source: require('../assets/carne11.jpg'), name: 'Platillo 11' },
        { source: require('../assets/carne12.jpg'), name: 'Platillo 12' },
        { source: require('../assets/carne13.jpg'), name: 'Platillo 13' },
        { source: require('../assets/carne14.jpg'), name: 'Platillo 14' },
        { source: require('../assets/carne15.jpg'), name: 'Platillo 15' },
];

const divideIntoRows = (data, rowSize) => {
    const dividedRows = [];
    for (let i = 0; i < data.length; i += rowSize) {
      dividedRows.push(data.slice(i, i + rowSize));
    }
    return dividedRows;
  };

  const dividedImages = divideIntoRows(images, 5);

  return (
    <View style={styles.container}>
      {dividedImages.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((image, imageIndex) => (
            <View key={imageIndex} style={styles.imageContainer}>
              <Image style={styles.image} source={image.source} />
              <Text style={styles.imageText}>{image.name}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginHorizontal: 40, 
  },
  imageText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ImageGallery;
