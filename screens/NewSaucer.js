import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Alert, Picker } from 'react-native';
import HeaderStart from '../components/HeaderStart';
import Input from '../components/Input';
import { createAPI, saucer, saucerProteins, proteins } from '../service/ServiceSaucer'; 
import { getAPI } from '../service/ServiceSaucer';

const NewSaucer = () => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [preparation, setPreparation] = useState('');
    const [proteinId, setProteinId] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [proteinsMeats, setProteinsMeats] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const saucerData = await getAPI(proteins);
            setProteinsMeats(saucerData);
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
        const saucerData = {
            name,
            category,
            price,
            preparation,
        };
        console.log(saucerData)
        try {
            const saucerResponse = await createAPI(saucer, saucerData);
            setName('');
            setCategory('');
            setPrice('');
            setPreparation('');
            setQuantity(1);

            const saucerProteinData = {
                saucerId: saucerResponse.id,
                proteinsId: proteinId,
                quantity
            };
            console.log(saucerProteinData)
            const proteinResponse = await createAPI(saucerProteins, saucerProteinData);

            Alert.alert('Success', 'Saucer and protein saved successfully');
        } catch (error) {
            console.log('Error al guardar los platillos y proteínas:', error);
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
                    label="Nombre del platillo"
                    placeholder="Nombre del platillo"
                    value={name}
                    onChangeText={text => setName(text)}
                />
                <Input
                    label="Categoría"
                    placeholder="Categoría"
                    value={category}
                    onChangeText={text => setCategory(text)}
                />
                <Input
                    label="Precio"
                    placeholder="Precio"
                    value={price}
                    onChangeText={text => setPrice(text)}
                    keyboardType="numeric"
                />
                <Input
                    label="Preparación"
                    placeholder="Preparación"
                    value={preparation}
                    onChangeText={text => setPreparation(text)}
                />
                <Picker
                    selectedValue={proteinId}
                    style={styles.picker}
                    onValueChange={(itemValue) => setProteinId(itemValue)}
                >
                    <Picker.Item label="Seleccionar Carne" value="" />
                    {proteinsMeats.map(item => (
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
                <Button title="Aumentar Porción" onPress={handleIncrement} color="#4CAF50" />
                <View style={styles.buttonContainer}>
                    <Button title="Cancelar" onPress={handleCancel} color="red" />
                    <Button title="Guardar" onPress={handleSave} color="green" />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4EC28E',
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

