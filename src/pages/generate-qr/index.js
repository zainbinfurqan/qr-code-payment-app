import React, { useEffect, useState } from 'react';
import { View, Button, Image, Text, TextInput, TouchableOpacity } from 'react-native'
import CustomButton from '../../components/Button'
import RNQRGenerator from 'rn-qr-generator';
import { CONSTANTS } from '../../config/constants'
import { useDispatch, useSelector } from 'react-redux';
import action from '../../redux/actions/common'
function GenerateQRCode(props) {

    const [imageUri, setImageUri] = useState('')
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('');
    const dispatch = useDispatch()
    const store = useSelector(store => store)


    async function generateQRCode() {
        dispatch(action.isLoading(true))
        let data = {
            id: Math.random().toString(36).substring(2, 45),
            name: productName,
            price: Number(productPrice),
            isSold: false,
        }
        // console.log(data)
        RNQRGenerator.generate({
            value: JSON.stringify(data), // required
            height: 160,
            width: 160,
            base64: false,            // default 'false'
            backgroundColor: 'black', // default 'white'
            color: 'white',           // default 'black'
        })
            .then(async (response) => {
                const { uri, width, height, base64 } = response;
                const product = await fetch('https://qr-payment-server.herokuapp.com/api/product/', {
                    method: 'POST', headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                if (product.status == 200) {
                    const res = await product.json()
                    setImageUri(uri)
                    dispatch(action.isError({
                        isError: false,
                        text: ''
                    }))
                    dispatch(action.isLoading(false))
                }
            })
            .catch(error => {
                dispatch(action.isError({
                    isError: true,
                    text: error.message
                }))
                dispatch(action.isLoading(false))
            });
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#16A1C4' }}>
            <View style={{ padding: 5 }}>
                <TouchableOpacity
                    onPress={() => props.navigation.pop()}
                    style={{
                        elevation: 2,
                        backgroundColor: CONSTANTS.COLORS.WHITE,
                        borderColor: CONSTANTS.COLORS.WHITE,
                        alignSelf: 'flex-start', margin: 5, padding: 5, borderRadius: 5,
                    }}>
                    <Image style={{ height: 25, width: 25 }} source={require('../../assets/icons/back.png')} />
                </TouchableOpacity>
                <Text
                    style={{
                        marginLeft: 20,
                        color: CONSTANTS.COLORS.WHITE,
                        marginTop: 10, fontWeight: 'bold'
                    }}
                >Product Name</Text>
                <TextInput
                    style={{
                        borderWidth: 0.34,
                        borderRadius: 50,
                        borderColor: CONSTANTS.COLORS.WHITE,
                        color: CONSTANTS.COLORS.WHITE,
                    }}
                    value={productName}
                    onChangeText={(e) => setProductName(e)}
                />
                <Text
                    style={{
                        marginLeft: 20,
                        color: CONSTANTS.COLORS.WHITE,
                        marginTop: 10, fontWeight: 'bold'
                    }}
                >Product Price</Text>
                <TextInput
                    style={{
                        borderWidth: 0.34,
                        borderColor: CONSTANTS.COLORS.WHITE,
                        color: CONSTANTS.COLORS.WHITE,
                        borderRadius: 50,
                    }}
                    value={productPrice}
                    onChangeText={(e) => setProductPrice(e)}
                />
                <CustomButton title="Generate QR" onPress={generateQRCode} bgColor="#ECECEC" textColor="#000000" />
            </View>
            {/* <Button title="Generate" onPress={generateQRCode} /> */}
            <View style={{ flex: 1, justifyContent: 'center' }}>
                {imageUri.length > 0 && <Image style={{ alignSelf: "center", height: 250, width: 250 }} source={{ uri: imageUri }} />}
            </View>
        </View>
    );
}

export default GenerateQRCode;