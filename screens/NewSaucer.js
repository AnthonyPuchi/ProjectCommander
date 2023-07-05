import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import HeaderStart from '../components/HeaderStart';
import InputSaucer from '../components/InputSaucer';

const NewSaucer = () => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [preparation, setPreparation] = useState('');


    const handleCancel = () => {
    // se restablece los campos después de cancelar
        setName('');
        setCategory('');
        setPrice('');
        setPreparation('');
};

    const handleSave = () => {
    const data = {
        name,
        category,
        price,
        preparation,
    };

    // Aquí se realizaría la lógica de guardar los datos
    // en lugar de usar el fetch

    setName('');
    setCategory('');
    setPrice('');
    setPreparation('');
};

    return (
    <View style={styles.container}>
        <HeaderStart />
        <View style={styles.newSaucerContainer}>
            <InputSaucer
            label="Name"
            placeholder="Name"
            value={name}
            onChangeText={text => setName(text)}
            />
            <InputSaucer
            label="Category"
            placeholder="Category"
            value={category}
            onChangeText={text => setCategory(text)}
            />
            <InputSaucer
            label="Price"
            placeholder="Price"
            value={price}
            onChangeText={text => setPrice(text)}
            keyboardType="numeric"
            />
            <InputSaucer
            label="Preparation"
            placeholder="Preparation"
            value={preparation}
            onChangeText={text => setPreparation(text)}
            />
        <View style={styles.buttonContainer}>
            <Button title="Cancel" onPress={handleCancel} color="red" />
            <Button title="Save" onPress={handleSave} color="green" />
        </View>
        </View>
    </View>
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D6BD39',
},
    newSaucerContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        paddingTop: 50,
},
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
        marginTop: 20,
},
});

export default NewSaucer;
