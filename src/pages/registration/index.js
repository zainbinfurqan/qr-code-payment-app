import React from 'react';
import { View, ScrollView, Text, SafeAreaView, TextInput } from 'react-native'
import { CONSTANTS } from '../../config/constants'

function Registration(props) {
    return (
        <SafeAreaView style={CONSTANTS.container}>
            <View style={[CONSTANTS.container, { padding: 5, justifyContent: 'center', }]} >
                <Text style={CONSTANTS.registrationInputLabel}>Full name</Text>
                <TextInput style={CONSTANTS.registrationTextInput} />
                <Text style={CONSTANTS.registrationInputLabel}>Email</Text>
                <TextInput style={CONSTANTS.registrationTextInput} />
                <Text style={CONSTANTS.registrationInputLabel}>Password</Text>
                <TextInput style={CONSTANTS.registrationTextInput} />
                <Text style={CONSTANTS.registrationInputLabel}>Phone no</Text>
                <TextInput style={CONSTANTS.registrationTextInput} />
            </View>
        </SafeAreaView >
    );
}

export default Registration;