import React, { useState, useEffect } from "react";
import { TextInput, StyleSheet, View, Text, Button, FlatList } from "react-native"
import * as Contacts from 'expo-contacts';
import Contacto from "../components/Contacto";

export default function App() {
    const [contactos, setContactos] = useState()
    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.Name, Contacts.Fields.LastName, Contacts.Fields.PhoneNumbers]
                });
                setContactos(data)
            }
        })();
    }, []);

    const renderItem = ({ item }) => (
        <Contacts Contacto={item} />
    );


    return (
        <View>
            <FlatList
                data={contactos}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );



}

