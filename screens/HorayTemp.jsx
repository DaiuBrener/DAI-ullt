import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native"
import * as Location from 'expo-location';
import { Clima } from "../services/LlamadaClima";
import Vibrar from "../components/AlertaError";

export default function HorayTemp() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [temp, setTemp] = useState(0);

  const temperatura = (lat, long) => {
    Clima(lat, long)
      .then((res) => {
        setTemp(res.main.temp)
      })
      .catch(() => {
        Vibrar("Error de Hora y temperatura")
      })
  }

  const apiKey = "71beb4add81639abdd7f2131c29eb5a9"

  var today = new Date()
  const horalocal = today.toLocaleTimeString('es-AR');
  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        let location = await Location.getCurrentPositionAsync({});
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);
        temperatura(location.coords.latitude, location.coords.longitude)
      }
    })();
  }, []);

  return (
    <View style={style.container}>

      <Text>Hora {horalocal}</Text>
      <Text>Latitude {latitude ? latitude : "Permiso no garantizado"}</Text>
      <Text>Longitude {longitude ? longitude : "Permiso no garantizado"}</Text>
      <Text>Temperatura {temp ? temp : "Waiting..."}</Text>


    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white"
  }
})
