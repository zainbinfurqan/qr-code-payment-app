import React, { useState } from 'react';
import { View, ScrollView, Button, Text, TextInput, SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CONSTANTS } from '../../config/constants'
import CustomButton from '../../components/Button'

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
            <View style={{ padding: 20 }}>
                <Text style={{
                    fontFamily: 'HelveticaNeueLTCom-Md',
                    alignSelf: 'center',
                    fontSize: 30,
                    color: CONSTANTS.COLORS.WHITE,
                    fontWeight: 'bold',
                }}>Login</Text>
            </View>
            <View style={[{ padding: 5, }]} >
                <Text style={[CONSTANTS.loginInputLabel, {
                    color: CONSTANTS.COLORS.WHITE,
                }]}>Email</Text>
                <TextInput style={[CONSTANTS.loginTextInput, {
                    borderColor: CONSTANTS.COLORS.WHITE,
                    color: CONSTANTS.COLORS.WHITE,
                }]}
                    onChangeText={(e) => setEmail(e)}
                    value={email} />
                <Text style={[CONSTANTS.loginInputLabel, {
                    color: CONSTANTS.COLORS.WHITE,
                }]}>Password</Text>
                <TextInput style={[CONSTANTS.loginTextInput, {
                    borderColor: CONSTANTS.COLORS.WHITE,
                    color: CONSTANTS.COLORS.WHITE,
                }]}
                    value={password}
                    secureTextEntry={true}
                    onChangeText={(e) => setPassword(e)} />
                <CustomButton onPress={handlelogin} title="Login" bgColor="#ECECEC" textColor="#000000" />
                <TouchableOpacity style={{ marginTop: 10 }} onPress={() => props.navigation.navigate('Registration')}>
                    <Text style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: CONSTANTS.COLORS.WHITE,
                        fontFamily: 'SamsungSharpSans-Bold'
                    }}>Create account</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    );
}

export default Login;