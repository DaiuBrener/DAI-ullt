import React, { useState, useEffect } from "react";
import { TextInput, StyleSheet, View, Text, Button, FlatList } from "react-native"



export default function Contacto({Contacto}) {
    console.log(Contacto)
    return(
        <View style={{alignItems:"center"}}>
            <Text> {Contacto.name} / {Contacto.phoneNumbers && Contacto?.phoneNumbers[0]?.number }</Text>
        </View>
    )
}