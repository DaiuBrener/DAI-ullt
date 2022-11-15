import React, { useState, useEffect } from "react";
import { TextInput, StyleSheet, View, Text, Button, FlatList } from "react-native"
import * as Contacts from 'expo-contacts';
import Contacto from "../components/Contacto";

export default function App() {
    const [contactos, setContactos] = useState()
    const [contactoEmergencia, setContactoEmergencia] = useState()
    const traer = async () => {
        try {
            const value = await AsyncStorage.getItem('Emergencia');
            if (value !== null) {
                // We have data!!
                setContactoEmergencia(value);
            }
        } catch (error) {
            // Error retrieving data

        }
    }
   
    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.Name, Contacts.Fields.LastName, Contacts.Fields.PhoneNumbers]
                });
                setContactos(data)
            }
            traer()
        })();
    }, []);

    const renderItem = ({ item }) => (
        <Contacto Contacto={item} Emergencia={contactoEmergencia} />
    );


    return (
        <View>
            <Text>Contactos</Text>
            <FlatList
                data={contactos}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );



}

