import React, { useState, useEffect } from "react";
import { TextInput, StyleSheet, View, Text, Button } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import Vibrar from "../components/AlertaError";

function Emergencia() {
    const [numero, setNumero] = useState(0)
    const [localNumero, setLocalNumero] = useState(0)

    const guardar = async (num) => {
        try {
            await AsyncStorage.setItem('Emergencia', num)
        } catch (e) {
            Vibrar("Error de Numero de Emergencia")
        }
    }

    const traer = async () => {
        try {
            const value = await AsyncStorage.getItem('Emergencia');
            if (value !== null) {
                // We have data!!
                setLocalNumero(value);
            }
        } catch (error) {
            Vibrar("Error de Numero de Emergencia")

        }
    }

    useEffect(() => {
        (async () => {
            traer()
        })()
    })

    return (
        <View style={style.containerAll}>
            <Text>{localNumero ? localNumero : ""}</Text>
            <TextInput
                placeholder="Ingrese numero"
                keyboardType="numeric"
                style={style.input}
                onChangeText={(num) => { setNumero(num) }}
            />
            <Button
                title="Guardar numero"
                onPress={() => guardar(numero)}
            />
        </View>
    )
}

export default Emergencia;

const style = StyleSheet.create({
    containerAll: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        marginTop: '100%'
    }
})