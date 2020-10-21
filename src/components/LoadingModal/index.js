import React, { useState, useEffect } from 'react';
import { Dimensions, Image, View, Animated, Easing } from 'react-native'
const { height, width } = Dimensions.get('window')

function LoadingModal(props) {

    let [RotateValueHolder, setRotateValueHolder] = useState(
        new Animated.Value(0),
    );

    useEffect(() => {
        StartImageRotateFunction();
    }, []);

    function StartImageRotateFunction() {
        RotateValueHolder.setValue(0);
        Animated.timing(RotateValueHolder, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start(() => StartImageRotateFunction());
    }

    const RotateData = RotateValueHolder.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });


    return (
        <View style={{
            backgroundColor: 'rgba(52, 52, 52, 0)',
            flex: 1, position: 'absolute', height: height, width: width, borderWidth: 1,
            justifyContent: 'center'
        }}>
            <Animated.Image style={{
                height: 100,
                width: 105, alignSelf: 'center',
                transform: [{ rotate: RotateData }],
            }} source={require('../../assets/images/loading.png')} />
        </View>
    );
}

export default LoadingModal;