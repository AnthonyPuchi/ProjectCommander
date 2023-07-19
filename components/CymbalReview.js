import React from 'react';
import { View, StyleSheet } from 'react-native';
import CategoryButtons from '../components/CategoryButtons'

const CymbalReview = () => {
    return (
        <View style={styles.container}>
            <View style={styles.category}>
                <CategoryButtons/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#71B280',
        justifyContent: 'center',
        alignItems: 'center',
    },
    category: {
        flex: 1,
    },
});

export default CymbalReview;
