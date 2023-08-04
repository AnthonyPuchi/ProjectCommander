import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Seeker from './Seeker';
import PetitionTable from './PetitionTable'; 

const CymbalReview = ({ addToOrder }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = query => {
        setSearchQuery(query);
    };

    return (
        <View style={styles.container}>
            <Seeker onSearch={handleSearch} />
            <View style={styles.gallery}>
                <PetitionTable searchQuery={searchQuery} addToOrder={addToOrder} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#71B280',
    },
    gallery: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 16,
        paddingTop: 8,
    },
});

export default CymbalReview;


