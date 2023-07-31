import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ImageItem = ({ searchQuery, addToOrder}) => {
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
  ];

  const [filteredImages, setFilteredImages] = useState(images);

  useState(() => {
    const filteredImages = images.filter(
      image => image.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredImages(filteredImages);
  }, [searchQuery]);

  const splitImagesIntoGroupsOfThree = () => {
    const groups = [];
    for (let i = 0; i < filteredImages.length; i += 3) {
      const group = filteredImages.slice(i, i + 3);
      groups.push(group);
    }
    return groups;
  };

  const handlerClick = (platilloName) => {
    addToOrder(platilloName); 
  };

  return (
    <View style={styles.container}>
      {splitImagesIntoGroupsOfThree().map((group, groupIndex) => (
        <View key={groupIndex} style={styles.row}>
          {group.map((image, index) => (
            <TouchableOpacity
              key={index}
              style={styles.imageContainer}
              onPress={() => handlerClick(image.name)}
            >
              <Image style={styles.image} source={image.source} />
              <View style={styles.buttonContainer}>
                <Text style={styles.imageText}>{image.name}</Text>
              </View>
            </TouchableOpacity>
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
    marginBottom: 10,
  },
  imageContainer: {
    alignItems: 'center',
    width: '30%',
    marginBottom: 5,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginHorizontal: 8,
  },
  buttonContainer: {
    borderWidth: 1,
    backgroundColor: '#FFDB58', 
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginTop: 5,
  },
  imageText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ImageItem;
