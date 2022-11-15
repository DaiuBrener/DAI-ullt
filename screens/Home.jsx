import { Text, StyleSheet,  View, Button} from 'react-native';
import React, {useState, useEffect} from 'react';

function Home({navigation}){
    return(
        <View style={style.container}>
            <Button 
                title="Tiempo y Temperatura"
                onPress={(e)=> {navigation.navigate('ActualTimeTemperature')}}
            />
            <Button 
                title="Emergencia"
                onPress={(e)=> {navigation.navigate('Emergencia')}}
            />
            <Button 
                title="QR de la App"
                onPress={(e)=> {navigation.navigate('AppID')}}
            />
            <Button 
                title="Lista de Contactos"
                onPress={(e)=> {navigation.navigate('Contactos')}}
            />
        </View>
    )
}

export default Home;

const style = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"white"
    }
})
