import React from 'react';
import { Dimensions, View, Text } from 'react-native'
const { height, width } = Dimensions.get('window')
import { useDispatch, useSelector } from 'react-redux'

function ErrorModal(props) {
    const store = useSelector(store => store)
    return (
        <View style={{
            backgroundColor: 'rgba(52, 52, 52, 0.8)',
            flex: 1, position: 'absolute', height: height, width: width, borderWidth: 1,
            justifyContent: 'center'
        }}>
            <View style={{
                borderRadius: 10,
                backgroundColor: 'red',
                padding: 10,
                margin: 10,
                justifyContent: "center"
            }}>
                <Text style={{
                    fontSize: 40,
                    textAlign: 'center',
                    color: 'white',
                }}>X</Text>
                <Text style={{
                    fontSize: 15,
                    textAlign: 'center',
                    color: 'white',
                }}>{store.common.error.text}</Text>
            </View>
        </View>
    );
}

export default ErrorModal;