import React, { useRef } from 'react';
import { View, SafeAreaView } from 'react-native'
import { RNCamera } from 'react-native-camera';

function ShowCamera(props) {
    const full = useRef();

    function takePicture() {
        full.current.capture().then(uri => {
            console.log("uri", uri)
        })
    }

    return (
        <SafeAreaView style={{ flex: 1, borderWidth: 1 }}>
            <RNCamera ref={full} style={{ flex: 1, borderWidth: 1 }}>
                <View style={{
                    borderWidth: 1, flex: 1,
                    justifyContent: 'flex-end',
                    marginBottom: 36
                }}></View>
            </RNCamera>
        </SafeAreaView>
    );
}

export default ShowCamera;