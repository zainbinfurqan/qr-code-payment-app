import React from 'react';
import { Dimensions, View, Text, TouchableOpacity } from 'react-native'
const { height, width } = Dimensions.get('window')
import { useDispatch, useSelector } from 'react-redux'
import action from '../../redux/actions/common';

function SuccessModal(props) {

    const store = useSelector(store => store)
    const dispatch = useDispatch()

    return (
        <View style={{
            backgroundColor: 'rgba(52, 52, 52, 0.8)',
            flex: 1, position: 'absolute', height: height, width: width, borderWidth: 1,
            justifyContent: 'center'
        }}>
            <View style={{
                borderRadius: 10,
                backgroundColor: '#FFFFFF',
                padding: 10,
                margin: 10,
                justifyContent: "center"
            }}>
                <Text style={{
                    fontSize: 40,
                    textAlign: 'center',
                    color: 'black',
                }}>Success!</Text>
                <Text style={{
                    fontSize: 15,
                    textAlign: 'center',
                    color: 'Black',
                }}>{store.common.success.text}</Text>
                <TouchableOpacity
                    onPress={() => dispatch(action.isSuccess({
                        isSuccess: false,
                        text: ''
                    }))}
                    style={{
                        backgroundColor: 'white',
                        borderRadius: 10,
                        marginTop: 10, padding: 10
                    }}>
                    <Text style={{ fontWeight: 'bold', color: 'black', textAlign: 'center' }}>Cancle</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default SuccessModal;