import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Seeker from './Seeker';
import ImageItem from './ImageItem';

const CymbalReview = ({ addToOrder }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = query => {
        setSearchQuery(query);
    };

    return (
        <View style={styles.container}>
            <Seeker onSearch={handleSearch} />
            <View style={styles.gallery}>
            <ImageItem searchQuery={''} addToOrder={addToOrder} />
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
    gallery: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 16,
        paddingTop: 8,
    },
});

export default CymbalReview;

