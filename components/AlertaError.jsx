import {  Vibration, Alert } from 'react-native';


export default function Vibrar(mensaje) {
    Vibration.vibrate()
    Alert.alert(mensaje)
};