import React from 'react';
import { View, SafeAreaView, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CONSTANTS } from '../../config/constants'

function Dashboard(props) {
    return (
        <SafeAreaView style={CONSTANTS.container}>
            <View style={{ height: 100, justifyContent: 'center' }}>
                <Text style={{ alignSelf: 'center', fontSize: 30, fontWeight: 'bold' }}>Dashboard</Text>
            </View>

            <View style={{ flexDirection: 'column' }}>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Wallet')}
                    style={{
                        borderWidth: 0.34,
                        height: 100,
                        flexDirection: 'row',
                        margin: 10,
                        borderRadius: 10,
                        padding: 10,
                        justifyContent: "center"
                    }}>
                    <Image
                        style={{ height: 25, width: 25, alignSelf: 'center', marginRight: 15 }}
                        source={require('../../assets/icons/wallet.png')} />
                    <Text style={{
                        alignSelf: 'center',
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}>My Wallet</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('PurchaseQR')}
                    style={{
                        borderWidth: 0.34,
                        borderRadius: 10,
                        height: 100,
                        margin: 10,
                        flexDirection: 'row',
                        padding: 10,
                        justifyContent: "center"
                    }}>
                    <Image
                        style={{ height: 25, width: 25, alignSelf: 'center', marginRight: 15 }}
                        source={require('../../assets/icons/product.png')} />
                    <Text style={{
                        alignSelf: 'center',
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}>Want to purchase?</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

export default Dashboard;