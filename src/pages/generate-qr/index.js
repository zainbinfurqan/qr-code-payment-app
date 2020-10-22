import React, { useEffect, useState } from 'react';
import { View, Button, Image, Text, TextInput, } from 'react-native'
import CustomButton from '../../components/Button'
import RNQRGenerator from 'rn-qr-generator';

function GenerateQRCode(props) {

    const [imageUri, setImageUri] = useState('')
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('');


    async function generateQRCode() {
        let data = {
            id: Math.random().toString(36).substring(2, 45),
            name: productName,
            price: Number(productPrice),
            isSold: false,
        }
        console.log(data)
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
                }
            })
            .catch(error => console.log('Cannot create QR code', error));
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ padding: 5 }}>
                <Text
                    style={{ marginLeft: 20, marginTop: 10, fontWeight: 'bold' }}
                >Product Name</Text>
                <TextInput
                    style={{ borderWidth: 0.34, borderRadius: 50, }}
                    value={productName}
                    onChangeText={(e) => setProductName(e)}
                />
                <Text
                    style={{ marginLeft: 20, marginTop: 10, fontWeight: 'bold' }}
                >Product Price</Text>
                <TextInput
                    style={{ borderWidth: 0.34, borderRadius: 50, }}
                    value={productPrice}
                    onChangeText={(e) => setProductPrice(e)}
                />
                <CustomButton title="Generate QR" onPress={generateQRCode} />
            </View>
            {/* <Button title="Generate" onPress={generateQRCode} /> */}
            <View style={{ flex: 1, justifyContent: 'center' }}>
                {imageUri.length > 0 && <Image style={{ alignSelf: "center", height: 250, width: 250 }} source={{ uri: imageUri }} />}
            </View>
        </View>
    );
}

export default GenerateQRCode;