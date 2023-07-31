import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import Petition from '../components/Petition';
import CymbalReview from '../components/CymbalReview';
import HeaderStart from '../components/HeaderStart';


const Order = () => {
  const [order, setOrder] = useState([]);

  const handleAddToOrder = (platilloName) => {
    setOrder([...order, platilloName]);
  };

  return (
    <View style={styles.container}>
      <HeaderStart />
      <View style={styles.contentContainer}>
        <View style={styles.petition}>
          <Petition order={order}/>
        </View>
        <View style={styles.review}>
          <CymbalReview addToOrder={handleAddToOrder} />
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
    backgroundColor: '#DCDAD4',
  },
  review: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#71B280',
  },
});

export default Order;


