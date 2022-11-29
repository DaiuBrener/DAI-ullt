import React, { useState, useEffect } from "react";
import { TextInput, StyleSheet, View, Text, Button, FlatList } from "react-native"



export default function Contacto({Contacto}, Emergencia) {
    console.log(Contacto)
    return(
        <View style={{alignItems:"center"}}>
            <Text> {Contacto?.name} / {Contacto?.phoneNumbers && Contacto?.phoneNumbers[0]?.number }{Contacto?.phoneNumbers && Contacto?.phoneNumbers[0]==Emergencia?"EMERGENCIA": null}</Text>
        </View>
    )
}