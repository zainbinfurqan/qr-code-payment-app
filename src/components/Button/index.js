import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

function CustomButton(props) {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            activeOpacity={0.7}
            style={[props.style, {
                padding: 5,
                backgroundColor: props.bgColor,
                borderRadius: 10, marginTop: 10
            },]}>
            <Text style={{
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                color: props.textColor
            }}>{props.title}</Text>
        </TouchableOpacity>
    );
}

CustomButton.defaultProps = {
    title: 'Title',
    bgColor: 'grey',
    textColor: 'white',
    onPress: function () { }
}

export default CustomButton;