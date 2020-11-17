import React from 'react';
import { View, SafeAreaView, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CONSTANTS } from '../../config/constants'

function Dashboard(props) {
    return (
        <SafeAreaView style={CONSTANTS.container}>
            <View style={{ height: 100, justifyContent: 'center' }}>
                <Text style={{
                    alignSelf: 'center', fontSize: 30,
                    color: CONSTANTS.COLORS.WHITE,
                    fontWeight: 'bold'
                }}>Dashboard</Text>
            </View>

            <View style={{ flexDirection: 'column' }}>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Wallet')}
                    style={{
                        height: 100,
                        elevation: 2,
                        flexDirection: 'row',
                        margin: 10,
                        borderRadius: 10,
                        padding: 10,
                        backgroundColor: CONSTANTS.COLORS.WHITE,
                        justifyContent: "center"
                    }}>
                    <Image
                        style={{ height: 25, width: 25, alignSelf: 'center', marginRight: 15 }}
                        source={require('../../assets/icons/wallet.png')} />
                    <Text style={{
                        alignSelf: 'center',
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: CONSTANTS.COLORS.BLACK,
                    }}>My Wallet</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('PurchaseQR')}
                    style={{
                        borderRadius: 10,
                        elevation: 2,
                        height: 100,
                        margin: 10,
                        flexDirection: 'row',
                        backgroundColor: CONSTANTS.COLORS.WHITE,
                        padding: 10,
                        justifyContent: "center"
                    }}>
                    <Image
                        style={{ height: 25, width: 25, alignSelf: 'center', marginRight: 15 }}
                        source={require('../../assets/icons/product.png')} />
                    <Text style={{
                        alignSelf: 'center',
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: CONSTANTS.COLORS.BLACK,
                    }}>Want to purchase?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('GenerateQR')}
                    style={{
                        borderRadius: 10,
                        elevation: 2,
                        height: 100,
                        margin: 10,
                        backgroundColor: CONSTANTS.COLORS.WHITE,
                        flexDirection: 'row',
                        padding: 10,
                        justifyContent: "center"
                    }}>
                    <Image
                        style={{ height: 25, width: 25, alignSelf: 'center', marginRight: 15 }}
                        source={require('../../assets/icons/product.png')} />
                    <Text style={{
                        alignSelf: 'center',
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: CONSTANTS.COLORS.BLACK,
                    }}>Add Product</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

export default Dashboard;