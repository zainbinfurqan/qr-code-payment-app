import React from 'react';
import { Dimensions, View } from 'react-native'
const { height, width } = Dimensions.get('window')

function LoadingModal(props) {
    return (
        <View style={{ flex: 1, position: 'absolute', height: height, width: width, borderWidth: 1 }}>

        </View>
    );
}

export default LoadingModal;