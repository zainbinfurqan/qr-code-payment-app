import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, SafeAreaView, TouchableOpacity, Image, Modal } from 'react-native'
import { CONSTANTS } from '../../config/constants'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../redux/actions/common'
import QRCodeScanner from 'react-native-qrcode-scanner';
import action from '../../redux/actions/common';
// import { RNCamera } from 'react-native-camera';
function PurchaseWithQR(props) {

    const [isPurchase, setIsPurchase] = useState(false)
    const [openQR, setOpenQR] = useState(false)
    const [error, setError] = useState('')
    const [isError, setIsError] = useState(false)
    const store = useSelector(store => store)
    const dispatch = useDispatch()

    useEffect(() => {
        // scanQr()
    }, [])

    async function checkIsProductAvailable(e) {
        let data = {
            ...JSON.parse(e.data)
        }
        try {
            dispatch(action.isLoading(true))
            let product = data.id
            let resProduct = await fetch(`https://ec5eb5869969.ngrok.io/api/payment/isvalid?product=${product}`, {
                method: 'GET',
                headers: { authorization: "o2k3rofn34n23u40g" },
            });
            if (resProduct.status == 200) {
                setIsError(false)
                dispatch(action.isError({
                    isError: false,
                    text: ''
                }))
                dispatch(action.isLoading(false))
                let res = await resProduct.json()
                if (res.isSold == false) {
                    purchaseProduct(data)
                }
            } else {
                let res = await resProduct.json()
                dispatch(action.isError({
                    isError: true,
                    text: res.message
                }))
                dispatch(action.isLoading(false))
            }
        } catch (error) {
            dispatch(action.isError({
                isError: true,
                text: error.message
            }))
            dispatch(action.isLoading(false))
        }
    }

    async function purchaseProduct(data) {
        try {
            dispatch(action.isLoading(true))
            let body = {
                product: data.id,
                payAmount: Number(data.price)
            }
            let purchaseProduct = await fetch(`https://ec5eb5869969.ngrok.io/api/payment/purchase`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: "o2k3rofn34n23u40g"
                },
                body: JSON.stringify(body)
            });
            if (purchaseProduct.status == 200) {
                setOpenQR(!openQR)
                let res = await purchaseProduct.json()
                dispatch(action.isError({
                    isError: false,
                    text: ''
                }))
                dispatch(action.isSuccess({
                    isSuccess: true,
                    text: res.message
                }))
                dispatch(action.isLoading(false))
            } else {
                let res = await purchaseProduct.json()
                dispatch(action.isError({
                    isError: true,
                    text: res.message
                }))
                dispatch(action.isLoading(false))
            }
        } catch (error) {
            dispatch(action.isError({
                isError: true,
                text: error.message
            }))
            dispatch(action.isLoading(false))
            console.log("error", error)
        }
    }

    async function scanQr(e) {
        checkIsProductAvailable(e)
    }

    return (
        <SafeAreaView style={CONSTANTS.container}>
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
                        <Text>{openQR ? 'Close QR' : 'Open QR'}</Text>
                    </TouchableOpacity>
                </View>
                {openQR && <View style={{ flex: 1, justifyContent: 'center', borderWidth: 1 }}>
                    <QRCodeScanner
                        onRead={scanQr}
                    />
                </View>}
            </View>
        </SafeAreaView>
    );
}

export default PurchaseWithQR;