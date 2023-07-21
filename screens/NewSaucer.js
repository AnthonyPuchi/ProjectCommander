import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Alert, Picker } from 'react-native';
import HeaderStart from '../components/HeaderStart';
import Input from '../components/Input';
import { createAPI, saucer } from '../service/ServiceSaucer';
import { getAPI } from '../service/ServiceSaucer';

const NewSaucer = () => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [preparation, setPreparation] = useState('');
    const [proteinId, setProteinId] = useState('');
    const [quantity, setQuantity] = useState(1); 
    const [proteins, setProteins] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const saucerData = await getAPI('http://localhost:8081/proteins');
            setProteins(saucerData);
        } catch (error) {
            console.error('Error fetching saucer data:', error);
        }
    };

    const handleCancel = () => {
        setName('');
        setCategory('');
        setPrice('');
        setPreparation('');
        setQuantity(1); 
    };

    const handleSave = async () => {
        const data = {
            name,
            category,
            price,
            preparation,
            quantity,
        };

        try {
            const response = await createAPI(saucer, data);
            setName('');
            setCategory('');
            setPrice('');
            setPreparation('');
            setQuantity(1); 
            Alert.alert('Success', 'Saucer saved successfully');
        } catch (error) {
            console.log('Error al guardar los platillos:', error);
        }
    };

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    return (
        <View style={styles.container}>
            <HeaderStart />
            <View style={styles.newSaucerContainer}>
                <Input
                    label="Name"
                    placeholder="Name"
                    value={name}
                    onChangeText={text => setName(text)}
                />
                <Input
                    label="Category"
                    placeholder="Category"
                    value={category}
                    onChangeText={text => setCategory(text)}
                />
                <Input
                    label="Price"
                    placeholder="Price"
                    value={price}
                    onChangeText={text => setPrice(text)}
                    keyboardType="numeric"
                />
                <Input
                    label="Preparation"
                    placeholder="Preparation"
                    value={preparation}
                    onChangeText={text => setPreparation(text)}
                />
                <Picker
                    selectedValue={proteinId}
                    style={styles.picker}
                    onValueChange={(itemValue) => setProteinId(itemValue)}
                >
                    <Picker.Item label="Select Proteins" value="" />
                    {proteins.map(item => (
                        <Picker.Item label={item.name} value={item.id} key={item.id} />
                    ))}
                </Picker>
                <Input
                    label="Porciones"
                    placeholder="Porciones"
                    value={quantity.toString()}
                    onChangeText={text => setQuantity(Number(text))}
                    keyboardType="numeric"
                />
                {/* Botón para incrementar la cantidad de porciones */}
                <Button title="Increment" onPress={handleIncrement} color="#4CAF50" />
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
        backgroundColor: '#BCB88A',
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
    picker: {
        height: 50,
        width: '25%',
    },
});

export default NewSaucer;

