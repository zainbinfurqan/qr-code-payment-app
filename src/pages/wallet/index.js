import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import { CONSTANTS } from '../../config/constants'
import RechargeAccount from './Recharge'

function Wallet(props) {
    return (
        <>
            <SafeAreaView style={[CONSTANTS.container, { padding: 5, zIndex: 0 }]}>
                {/* <RechargeAccount /> */}
                <TouchableOpacity style={{ borderWidth: 1, alignSelf: 'flex-end', margin: 5, padding: 5, borderRadius: 5, }}>
                    <Text>Recharge</Text>
                </TouchableOpacity>
                <View style={{ justifyContent: 'center', flex: 1 }}>
                    <Text style={{ fontSize: 20, alignSelf: 'center' }}>Total Amount</Text>
                    <Text style={{ fontSize: 50, alignSelf: 'center' }}>400</Text>
                </View>

            </SafeAreaView>
        </>
    );
}

export default Wallet;