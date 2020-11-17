import * as React from 'react';
import { SafeAreaView } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux'
// routes
import Home from '../pages/home'
import Login from '../pages/login'
import Wallet from '../pages/wallet'
import Dashboard from '../pages/dashboard'
import PurchaseQR from '../pages/purchase-QR'
import GenerateQR from '../pages/generate-qr'
import Registration from '../pages/registration'
import ErrorModal from '../components/ErrorModal'
import Recharge from '../pages/wallet/Recharge'
import LoadingModal from '../components/LoadingModal'
import SuccessModal from '../components/SuccessModal'
const Stack = createStackNavigator();

function Auth(props) {

    const store = useSelector(store => store)

    React.useEffect(() => {
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
                    <Stack.Screen name="Recharge" component={Recharge} />
                    <Stack.Screen name="PurchaseQR" component={PurchaseQR} />
                    <Stack.Screen name="GenerateQR" component={GenerateQR} />
                    <Stack.Screen name="Dashboard" component={Dashboard} />
                </Stack.Navigator>
            </SafeAreaView>
            {store.common.error.isError && <ErrorModal />}
            {store.common.isLoadin && <LoadingModal />}
            {store.common.success.isSuccess && <SuccessModal />}
        </>

    );
}



export default Auth