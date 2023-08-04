import React from 'react';
import { View, StyleSheet } from 'react-native';
import HeaderStart from '../components/HeaderStart';
import PortionsTable from '../components/PortionsTable';

const ListPortions = () => {
    return (
    <View style={styles.container}>
        <HeaderStart />
        <PortionsTable />
    </View>
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BCB88A',
    },
});
export default ListPortions;
