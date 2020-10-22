import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, TextInput, Dimensions, Button } from 'react-native'
import { CONSTANTS } from '../../../config/constants'
import CustomButton from '../../../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import action from '../../../redux/actions/common';

const { height, width } = Dimensions.get('window')


function RechargeAccount(props) {

    const [amount, setAmount] = useState('')
    const store = useSelector(store => store)
    const dispatch = useDispatch()

    async function addAmount() {
        try {
            dispatch(action.isLoading(true))
            let body = {
                amount: amount,
                payAmount: 25000
            }
            const rechargeResponse = await fetch('https://ec5eb5869969.ngrok.io/api/wallet/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: "o2k3rofn34n23u40g"
                },
                body: JSON.stringify(body)
            })
            // console.log(rechargeResponse.status)
            if (rechargeResponse.status == 200) {
                const res = await rechargeResponse.json()
                dispatch(action.isSuccess({
                    isSuccess: false,
                    text: ''
                }))
                dispatch(action.isLoading(false))
                props.closePanel()
            } else {
                const res = await rechargeResponse.json()
                dispatch(action.isSuccess({
                    isSuccess: true,
                    text: res.message
                }))
                dispatch(action.isLoading(false))
            }
        } catch (error) {
            dispatch(action.isSuccess({
                isSuccess: true,
                text: error.message
            }))
            dispatch(action.isLoading(false))
            console.log(error)
        }
    }

    return (
        <SafeAreaView style={[CONSTANTS.container, {
            zIndex: 1, backgroundColor: 'white', position: 'absolute', height, width,
        }]}>
            <TouchableOpacity onPress={props.closePanel} style={{
                position: 'absolute',
                margin: 10,
                justifyContent: 'center',
                height: 25, borderWidth: 0.34, width: 25,
                borderRadius: 50,
            }}>
                <Text style={{ alignSelf: 'center' }}>X</Text>
            </TouchableOpacity>
            <View style={{
                height, width,
                justifyContent: 'center',
                padding: 5,

            }}>
                <TextInput style={CONSTANTS.loginTextInput} value={amount} onChangeText={(e) => setAmount(e)} />
                {/* <Button title='Add' onPress={addAmount} /> */}
                <CustomButton title='Add' onPress={addAmount} />
            </View>
        </SafeAreaView>
    );
}

export default RechargeAccount;