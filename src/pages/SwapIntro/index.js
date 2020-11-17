import React, { useRef, useEffect, useState, useCallback } from "react";
import { View, Text, SafeAreaView, Animated, Image, Easing, Dimensions, Slider, StyleSheet } from "react-native";
import { FlingGestureHandler, Directions, State } from "react-native-gesture-handler";
import { Transition, Transitioning, color } from 'react-native-reanimated'
const { height, width } = Dimensions.get('window')
const DURATION = 700


const transition = (
    <Transition.Together>
        <Transition.Out type='slide-bottom' durationMs={DURATION * 0.2} interpolation='easeIn' />
        <Transition.Change />
        <Transition.In type='slide-bottom' durationMs={DURATION} interpolation='easeOut' />
    </Transition.Together>
)


const DATA = [
    { name: 'Zain Ahmed', email: 'Zain@gmail.com', phoneNo: '03022408098', profile: { uri: 'https://www.gstatic.com/webp/gallery/1.jpg' } },
    { name: 'Faraz Ahmed', email: 'Faraz@gmail.com', phoneNo: '03022408097', profile: { uri: 'https://www.gstatic.com/webp/gallery/1.jpg' } },
    { name: 'Arsalan Ahmed', email: 'Arsalan@gmail.com', phoneNo: '03022408096', profile: { uri: 'https://www.gstatic.com/webp/gallery/5.webp' } },
    { name: 'Omer Khan', email: 'Omer@gmail.com', phoneNo: '03022408095', profile: { uri: 'https://www.gstatic.com/webp/gallery/4.webp' } },
    { name: 'Ammad Imran', email: 'Ammad@gmail.com', phoneNo: '03022408094', profile: { uri: 'https://www.gstatic.com/webp/gallery/1.jpg' } },
    { name: 'Arshaq Shakeel', email: 'Arshaq@gmail.com', phoneNo: '03022408093', profile: { uri: 'https://www.gstatic.com/webp/gallery/1.jpg' } },
    { name: 'Tanveer ul haq', email: 'Tanveer@gmail.com', phoneNo: '03022408092', profile: { uri: 'https://www.gstatic.com/webp/gallery/1.jpg' } },
    { name: 'Owais Khan', email: 'Owais@gmail.com', phoneNo: '03022408091', profile: { uri: 'https://www.gstatic.com/webp/gallery/1.jpg' } },
]
const FOOD_DATA = [
    {
        id: 1,
        recipe_name: 'Chiken Kabab',
        preparing_time: '20 min',
        ingredients: ['gosht', 'mirch', 'namak', 'papita', 'koela'],
        chief_name: 'Zain',
        description: 'Dish will be delishes and eat it with raita'
    },
    {
        id: 2,
        recipe_name: 'Chiken Kabab',
        preparing_time: '20 min',
        ingredients: ['gosht', 'mirch', 'namak', 'papita', 'koela'],
        chief_name: 'Zain',
        description: 'Dish will be delishes and eat it with raita'
    },
    {
        id: 3,
        recipe_name: 'Chiken Kabab',
        preparing_time: '20 min',
        ingredients: ['gosht', 'mirch', 'namak', 'papita', 'koela'],
        chief_name: 'Zain',
        description: 'Dish will be delishes and eat it with raita'
    },
    {
        id: 4,
        recipe_name: 'Chiken Kabab',
        preparing_time: '20 min',
        ingredients: ['gosht', 'mirch', 'namak', 'papita', 'koela'],
        chief_name: 'Zain',
        description: 'Dish will be delishes and eat it with raita'
    },
    {
        id: 5,
        recipe_name: 'Chiken Kabab',
        preparing_time: '20 min',
        ingredients: ['gosht', 'mirch', 'namak', 'papita', 'koela'],
        chief_name: 'Zain',
        description: 'Dish will be delishes and eat it with raita'
    },

];


function IntroSlider(props) {

    const [index, setIndex] = useState(0)
    const activeIndex = useRef(new Animated.Value(0)).current
    const animation = useRef(new Animated.Value(0)).current


    useEffect(() => {
        Animated.timing(animation, {
            toValue: activeIndex,
            duration: DURATION * 0.3,
            useNativeDriver: true
        }).start()
    })

    const setActiveIndex = React.useCallback((index) => {
        console.log("index,", index)
        activeIndex.setValue(index)
        ref.current.animateNextTransition()
        setIndex(index)
    });


    const translateY =
        animation.interpolate({
            inputRange: [-1, 0, 1],
            outputRange: [height, 0, -height]
        })

    const ref = React.useRef()


    // const PosedView = posed.View({
    //     enter: { opacity: 1, rotate: '0deg' },
    //     exit: { opacity: 0, rotate: '180deg' }
    // })

    return (
        <FlingGestureHandler
            key="up"
            direction={Directions.LEFT} onHandlerStateChange={ev => {
                if (ev.nativeEvent.state === State.END) {
                    if (index === FOOD_DATA.length - 1) {
                        return;
                    }
                    setActiveIndex(index + 1)
                }
            }}>
            <FlingGestureHandler
                key="down " direction={Directions.RIGHT} onHandlerStateChange={ev => {
                    if (ev.nativeEvent.state === State.END) {
                        if (index === 0) {
                            return;
                        }
                        setActiveIndex(index - 1)
                    }
                }}>
                <SafeAreaView style={{ flex: 1, }} >
                    <Animated.View style={[{
                        position: 'absolute',
                        width: '100%',
                        borderWidth: 4,
                        height: height * DATA.length,
                        transform: [{ translateY: translateY }],
                    }]}>
                        {DATA.map((_, i) => {
                            return (
                                <Transitioning.View
                                    ref={ref}
                                    transition={transition}
                                    key={i} style={{ height, borderWidth: 4, backgroundColor: i % 2 === 0 ? '#075D86' : '#D9EDF7' }}>
                                </Transitioning.View>
                            )
                        })}

                    </Animated.View>
                    <View>
                        <View style={{ flexDirection: 'row', padding: 5 }}>
                            <View style={{ flex: .1, justifyContent: 'center' }}>
                                {/* <Image style={[index % 2 === 0 ? DarkTheme.icon : LightTheme.icon,]}
                                    source={index % 2 === 0 ? constants.FOOD_DATA_DARK_ICONS.chief_name_icon : constants.FOOD_DATA_LIGHT_ICONS.chief_name_icon} /> */}
                            </View>
                            <View style={{ flex: .9, justifyContent: 'center', paddingLeft: 10 }}>
                                <Text
                                    style={[index % 2 === 0 ? DarkTheme.text : LightTheme.text,]}
                                >{FOOD_DATA[index].chief_name}</Text>
                            </View>
                        </View>
                    </View>

                </SafeAreaView>
            </FlingGestureHandler>
        </FlingGestureHandler>
    );
}

const LightTheme = {
    lineSeperater: {
        borderBottomWidth: 0.34,
        marginRight: 20,
        borderColor: '#075D86',
        marginLeft: 20,
        shadowColor: "#000",
        marginTop: 140,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.84,

        elevation: 1,
    },
    picMain: {
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 100,
        padding: 10,
        borderColor: '#075D86',
        marginTop: 10,
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor: '#075D86',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 4,
    },
    icon: { height: 35, width: 35, alignSelf: 'center' },
    text: {
        color: 'black',
        fontSize: 35,
        margin: 10,
        fontFamily: 'YellowrabbitPersonaluse-qZYyd'
    },
    textIngridents: {
        fontSize: 20,
        alignSelf: 'flex-start',
        fontFamily: 'YellowrabbitPersonaluse-qZYyd',
        color: 'black',
        marginTop: 10,
        borderWidth: 0.34,
        paddingLeft: 10, paddingRight: 10, marginRight: 2, borderRadius: 25
    },
    line: { borderBottomWidth: 0.30, marginRight: 10, marginLeft: 10, borderColor: '#075D86' },

}

const DarkTheme = {
    lineSeperater: {
        borderBottomWidth: 0.34,
        marginTop: 140,
        marginRight: 20,
        borderColor: '#D9EDF7',
        marginLeft: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.84,

        elevation: 2,
    },
    picMain: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#D9EDF7',
        marginTop: 10,
        borderRadius: 100,
        padding: 10,
        backgroundColor: '#D9EDF7',
        position: 'absolute',
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    icon: { height: 35, width: 35, alignSelf: 'center' },
    text: {
        color: 'white',
        fontSize: 35,
        fontFamily: 'YellowrabbitPersonaluse-qZYyd',
        margin: 10,
    },
    textIngridents: {
        fontSize: 20,
        alignSelf: 'flex-start',
        fontFamily: 'YellowrabbitPersonaluse-qZYyd',
        color: 'white',
        borderColor: 'white',
        marginTop: 10,
        borderWidth: 0.34,
        paddingLeft: 10, paddingRight: 10, marginRight: 2, borderRadius: 25

    },
    line: { borderBottomWidth: 0.30, marginRight: 10, marginLeft: 10, borderColor: '#D9EDF7' },

}

export default IntroSlider;