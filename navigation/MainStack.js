import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


import Home from '../screens/Home'
import Emergencia from '../screens/Emergencia'
import Contactos from '../screens/Contactos'
import HorayTemp from '../screens/HorayTemp';
import QRScanner from '../screens/About';


const Stack = createNativeStackNavigator()

const MainStack = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }
                }>
                <Stack.Screen
                    name='Home'>
                    {(props) => <Home {...props}
                    />}
                </Stack.Screen>
                <Stack.Screen
                    name='Emergencia'>
                    {(props) => <Emergencia {...props}
                    />}
                </Stack.Screen>
                <Stack.Screen
                    name='Contactos'>
                    {(props) => <Contactos {...props}
                    />}
                </Stack.Screen>
                <Stack.Screen
                    name='Hora y Temperatura'>
                    {(props) => <HorayTemp {...props}
                    />}
                </Stack.Screen>
                <Stack.Screen
                    name='Qr app'>
                    {(props) => <QRScanner {...props}
                    />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default MainStack