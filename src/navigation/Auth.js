import * as React from 'react';
import { SafeAreaView } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux'
// routes
import Home from '../pages/home'
import Login from '../pages/login'
import PurchaseQR from '../pages/purchase-QR'
import GenerateQR from '../pages/generate-qr'
import Registration from '../pages/registration'
import Wallet from '../pages/wallet'
import Dashboard from '../pages/dashboard'
const Stack = createStackNavigator();

function Auth(props) {

    React.useEffect(() => {
        console.log("navigation")
    }, [])

    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <Stack.Navigator
                    initialRouteName='Login'
                    screenOptions={{
                        headerShown: false,
                        cardStyle: {
                            backgroundColor: 'transparent',
                        },
                    }}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Registration" component={Registration} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Wallet" component={Wallet} />
                    <Stack.Screen name="PurchaseQR" component={PurchaseQR} />
                    <Stack.Screen name="GenerateQR" component={GenerateQR} />
                    <Stack.Screen name="Dashboard" component={Dashboard} />
                </Stack.Navigator>
            </SafeAreaView>
        </>

    );
}



export default Auth