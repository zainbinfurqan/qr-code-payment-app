import React from 'react';
import { View, ScrollView, Text, TextInput, SafeAreaView } from 'react-native'
import { CONSTANTS } from '../../config/constants'
function Login(props) {
    return (
        <SafeAreaView style={CONSTANTS.container}>
            <View style={[CONSTANTS.container, { padding: 5, justifyContent: 'center', }]} >
                <Text style={CONSTANTS.loginInputLabel}>Email</Text>
                <TextInput style={CONSTANTS.loginTextInput} />
                <Text style={CONSTANTS.loginInputLabel}>Password</Text>
                <TextInput style={CONSTANTS.loginTextInput} />
            </View>
        </SafeAreaView >
    );
}

export default Login;