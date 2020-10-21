import React, { useState } from 'react';
import { ScrollView, View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { CONSTANTS } from '../../config/constants'
import QRCodeScanner from 'react-native-qrcode-scanner';
// import { RNCamera } from 'react-native-camera';
function PurchaseWithQR(props) {

    const [isPurchase, setIsPurchase] = useState(false)
    const [openQR, setOpenQR] = useState(false)

    async function scanQr() {
        try {
            // let data = {}
            // data.product = data.id
            let product = 'lksadnfadfqwe34afanfj'
            let resProduct = await fetch(`https://69be15e6f3a2.ngrok.io/api/payment/isvalid?product=${product}`, {
                method: 'GET',
                headers: { authorization: "o2k3rofn34n23u40g" },
            });
            // console.log(resProduct)
            if (resProduct.status == 200) {

            } else {
                let res = await resProduct.json()
                console.log(res)
            }
            // if (resProduct.status == 200) {
            //     // let response = await resProduct.json();
            //     // if (!response.isSold) {
            //     //     let resPurchase = await fetch('/api/payment/purchase');
            //     //     if (resPurchase.status == 200) {
            //     //         let response = await resPurchase.json()
            //     //         response.isPurchase && setIsPurchase(true)
            //     //     }
            //     // }
            // }
        } catch (error) {
            console.log(error)

        }

    }

    return (
        <SafeAreaView style={CONSTANTS.container}>
            {scanQr()}
            <View style={CONSTANTS.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity
                        onPress={() => props.navigation.pop()}
                        style={{ borderWidth: 0.35, alignSelf: 'flex-start', margin: 5, padding: 5, borderRadius: 5, }}>
                        <Image style={{ height: 25, width: 25 }} source={require('../../assets/icons/back.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setOpenQR(!openQR)}
                        style={{ borderWidth: 0.35, alignSelf: 'flex-end', margin: 5, padding: 5, borderRadius: 5, }}>
                        <Text>Open QR </Text>
                    </TouchableOpacity>
                </View>
                {openQR && <View style={{ flex: 1, justifyContent: 'center', }}>
                    {/* <TouchableOpacity onPress={() => closeQRCodeScanner()}><Text>Close</Text></TouchableOpacity> */}
                    {/* <QRCodeScanner
                    // onRead={onSuccess}
                    /> */}
                </View>}
                {/* <TouchableOpacity style={{ borderWidth: 1, margin: 5, padding: 5, borderRadius: 5, alignSelf: 'flex-start' }}>
                    <Text style={{ fontWeight: 'bold' }}>Purchase</Text>
                </TouchableOpacity> */}
            </View>
        </SafeAreaView>
    );
}

export default PurchaseWithQR;