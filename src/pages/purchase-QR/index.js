import React, { useState } from 'react';
import { ScrollView, View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { CONSTANTS } from '../../config/constants'

function PurchaseWithQR(props) {

    const [isPurchase, setIsPurchase] = useState(false)

    async function scanQr() {
        let data = {}
        data.product = data.id
        let resProduct = await fetch('', {
            ...data
        });
        let response = await resProduct.json();
        if (!response.isSold) {
            let resPurchase = await fetch('');
            let response = await resPurchase.json()
            response.isPurchase && setIsPurchase(true)
        }
    }

    return (
        <SafeAreaView style={CONSTANTS.container}>
            <View style={CONSTANTS.container}>
                <TouchableOpacity style={{ borderWidth: 1, margin: 5, padding: 5, borderRadius: 5, alignSelf: 'flex-start' }}>
                    <Text style={{ fontWeight: 'bold' }}>Purchase</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default PurchaseWithQR;