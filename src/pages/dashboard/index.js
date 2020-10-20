import React from 'react';
import { View, SafeAreaView, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CONSTANTS } from '../../config/constants'

function Dashboard(props) {
    return (
        <SafeAreaView style={CONSTANTS.container}>
            <View style={{ borderWidth: 1, height: 100, justifyContent: 'center' }}>
                <Text style={{ alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>Dashboard</Text>
            </View>

            <View style={{ flexDirection: 'column' }}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Wallet')} style={{ borderWidth: 1, height: 100, margin: 10, padding: 10, justifyContent: "center" }}>
                    <Text style={{ alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>My Wallet</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('PurchaseQR')} style={{ borderWidth: 1, height: 100, margin: 10, padding: 10, justifyContent: "center" }}>
                    <Text style={{ alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>Want to purchase?</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

export default Dashboard;