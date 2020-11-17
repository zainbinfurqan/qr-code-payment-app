import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../redux/actions/common'
import { CONSTANTS } from '../../config/constants'
import RechargeAccount from './Recharge'

function Wallet(props) {

    const [openRechargePanel, setOpenRechargePanel] = useState(false)
    const [currentAmount, setCurrentAmount] = useState('')
    const store = useSelector(store => store)
    const dispatch = useDispatch()

    useEffect(() => {
        fetchWallet()
    }, [])

    function closePanel() {
        setOpenRechargePanel(!openRechargePanel)
    }

    async function fetchWallet() {
        try {
            dispatch(actions.isLoading(true))
            const walletResponse = await fetch('https://qr-payment-server.herokuapp.com/api/wallet/', {
                method: 'GET',
                headers: { authorization: "o2k3rofn34n23u40g" }
            })
            if (walletResponse.status == 200) {
                const response = await walletResponse.json();
                setCurrentAmount(response.totalAmount)
                dispatch(actions.isError({
                    isError: false,
                    text: ''
                }))
                dispatch(actions.isLoading(false))
            } else {
                const response = await walletResponse.json();
                dispatch(actions.isError({
                    isError: true,
                    text: response.message
                }))
                dispatch(actions.isLoading(false))
            }
        } catch (error) {
            dispatch(actions.isError({
                isError: true,
                text: error.message
            }))
            dispatch(actions.isLoading(false))
            console.log(error)
        }
    }

    return (
        <>
            <SafeAreaView style={[CONSTANTS.container,
            { padding: 5, }
            ]}>
                {/* {openRechargePanel && <RechargeAccount closePanel={closePanel} />} */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity
                        onPress={() => props.navigation.pop()}
                        style={{
                            elevation: 2,
                            backgroundColor: CONSTANTS.COLORS.WHITE,
                            borderColor: CONSTANTS.COLORS.WHITE,
                            alignSelf: 'flex-start', margin: 5, padding: 5, borderRadius: 5,
                        }}>
                        <Image style={{ height: 25, width: 25 }} source={require('../../assets/icons/back.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('Recharge')}
                        style={{
                            elevation: 2,
                            backgroundColor: CONSTANTS.COLORS.WHITE,
                            alignSelf: 'flex-end', margin: 5, padding: 5, borderRadius: 5,
                        }}>
                        <Text>Recharge</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ justifyContent: 'center', flex: 1, }}>
                    <View style={{
                        justifyContent: 'center',
                        borderRadius: 10,
                        elevation: 2,
                        backgroundColor: CONSTANTS.COLORS.WHITE
                    }}>
                        <Text style={{ fontSize: 20, alignSelf: 'center', fontWeight: 'bold', }}>Total Amount</Text>
                        <Text style={[currentAmount ? { color: '#16C718' } : { color: '#CA0000' },
                        { fontSize: 50, alignSelf: 'center' }]}>{currentAmount ? currentAmount : 0}</Text>
                    </View>
                </View>

            </SafeAreaView>
        </>
    );
}

export default Wallet;