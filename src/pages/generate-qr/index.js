import React, { useState } from 'react';
import { View, Button, Image } from 'react-native'
import RNQRGenerator from 'rn-qr-generator';

function GenerateQRCode(props) {

    const [imageUri, setImageUri] = useState('')


    function generateQRCode() {
        let data = {
            id: "lksadnfanfj@#$adfqwe34af",
            name: 'Mobile',
            price: 25000,
            isSold: false,
        }
        RNQRGenerator.generate({
            value: JSON.stringify(data), // required
            height: 160,
            width: 160,
            base64: false,            // default 'false'
            backgroundColor: 'black', // default 'white'
            color: 'white',           // default 'black'
        })
            .then(response => {
                const { uri, width, height, base64 } = response;
                setImageUri(uri)
            })
            .catch(error => console.log('Cannot create QR code', error));
    }
    return (
        <View style={{ flex: 1 }}>
            <Button title="Generate" onPress={generateQRCode} />
            <Image style={{ height: 250, width: 250 }} source={{ uri: imageUri }} />
        </View>
    );
}

export default GenerateQRCode;