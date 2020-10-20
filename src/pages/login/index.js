import React, { useState } from 'react';
import { View, ScrollView, Button, Text, TextInput, SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CONSTANTS } from '../../config/constants'
function Login(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handlelogin() {
        try {
            props.navigation.navigate('Dashboard')
            // const body = {
            //     email: email,
            //     password: password,
            // }
            // const loginresponse = await fetch('https://5609a018896a.ngrok.io/api/auth/login', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(body)
            // });
            // const res = await loginresponse.json();
            // console.log(res)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <SafeAreaView style={CONSTANTS.container}>
            <View style={[CONSTANTS.container, { padding: 5, justifyContent: 'center', }]} >
                <Text style={CONSTANTS.loginInputLabel}>Email</Text>
                <TextInput style={CONSTANTS.loginTextInput} onChangeText={(e) => setEmail(e)} value={email} />
                <Text style={CONSTANTS.loginInputLabel}>Password</Text>
                <TextInput style={CONSTANTS.loginTextInput} value={password} onChangeText={(e) => setPassword(e)} />
                <View style={{ marginTop: 10 }}>
                    <Button title="Login" onPress={handlelogin} />
                </View>
                <TouchableOpacity style={{ marginTop: 10 }} onPress={() => props.navigation.navigate('Registration')}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Create account</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    );
}

export default Login;