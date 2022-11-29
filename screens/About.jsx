import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useState, useEffect } from "react";
import QRCode from 'react-native-qrcode-svg';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Vibrar from '../components/AlertaError';

export default function QRScanner() {
    const navigation = useNavigation()
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [clikScan, setClikScan] = useState(false);
    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({ data }) => {
        setScanned(true);
        alert(` ${data} `);
    };

    if (hasPermission === null) {
        return <Text>Requeriendo permiso</Text>;
    }
    if (hasPermission === false) {
        Vibrar("Permiso no concedido")
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text>QRScanner</Text>
            {/* <QRCode
                value="Hecho por Daiana Brener"
            /> */}
            <Button  
            disabled={clikScan} 
            onPress={() => { setClikScan(true) }} 
            title="Escanear QR">
            </Button>
            {clikScan &&
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={styles.scanner}
                />}
            {scanned && <Button title={'Escanear de nuevo'} onPress={() => setScanned(false)} />}

        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scanner: {
        height: "70%",
        width: "50%"
    }
});