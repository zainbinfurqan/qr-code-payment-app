import React, { useState } from 'react';
import { View, ScrollView, Text, SafeAreaView, TextInput, Button } from 'react-native'
import { CONSTANTS } from '../../config/constants'
import { useDispatch, useSelector } from 'react-redux'
import saveUserData from '../../redux/actions/auth'

function Registration(props) {

    const [fullName, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const store = useSelector(store => store)
    const dispatch = useDispatch()

    async function handleSignUp() {
        try {
            const body = {
                fullName: fullName,
                email: email,
                password: password,
                phoneNo: phoneNo
            }
            const signUpResponse = await fetch('https://5609a018896a.ngrok.io/api/auth/registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            if (signUpResponse.status == 200) {
                const res = await signUpResponse.json();
                console.log(res)
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <SafeAreaView style={CONSTANTS.container}>
            <View style={[CONSTANTS.container, { padding: 5, justifyContent: 'center', height: 200 }]} >
                <ScrollView style={{ marginTop: 20 }} >
                    <Text style={CONSTANTS.registrationInputLabel}>Full name</Text>
                    <TextInput style={CONSTANTS.registrationTextInput} value={fullName} onChangeText={(e) => setName(e)} />
                    <Text style={CONSTANTS.registrationInputLabel}>Email</Text>
                    <TextInput style={CONSTANTS.registrationTextInput} onChangeText={(e) => setEmail(e)} />
                    <Text style={CONSTANTS.registrationInputLabel}>Password</Text>
                    <TextInput style={CONSTANTS.registrationTextInput} onChangeText={(e) => setPassword(e)} />
                    <Text style={CONSTANTS.registrationInputLabel}>Phone no</Text>
                    <TextInput style={CONSTANTS.registrationTextInput} onChangeText={(e) => setPhoneNo(e)} />
                    <View style={{ marginTop: 10 }}>
                        <Button title="Sign Up" onPress={handleSignUp} />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView >
    );
}

export default Registration;