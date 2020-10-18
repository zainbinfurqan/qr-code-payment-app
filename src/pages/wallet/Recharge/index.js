import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, TextInput, Dimensions, Button } from 'react-native'
import { CONSTANTS } from '../../../config/constants'
const { height, width } = Dimensions.get('window')

function RechargeAccount(props) {
    return (
        <SafeAreaView style={[CONSTANTS.container, {
            zIndex: 1, backgroundColor: 'white', position: 'absolute', height, width,
        }]}>
            <TouchableOpacity style={{
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
                <TextInput style={{ borderWidth: 0.34, marginBottom: 5 }} />
                <Button title='Add' />
            </View>
        </SafeAreaView>
    );
}

export default RechargeAccount;