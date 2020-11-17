import React, { useCallback, useState, useRef } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    SafeAreaView,
    RefreshControl,
} from 'react-native';
import ViewShot from 'react-native-view-shot';
import { RNCamera } from 'react-native-camera';
const Viewshoot = () => {
    const full = useRef();
    const [preview, setPreview] = useState(null);
    const [itemsCount, setItemsCount] = useState(10);
    const [refreshing, setRefreshing] = useState(false);
    const [image, setImage] = useState(require('../../assets/images/s-1.png'))

    const onCapture = useCallback(() => {
        full.current.capture().then(uri => setPreview({ uri }));
    }, []);

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.root}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={() => {
                        setRefreshing(true);
                        setTimeout(() => {
                            setItemsCount(itemsCount + 10);
                            setRefreshing(false);
                        }, 5000);
                    }}
                />
            }
        >
            <SafeAreaView>
                <ViewShot ref={full} style={styles.container}>
                    <Button onPress={onCapture} title="Shoot Me" />

                    <Image
                        fadeDuration={0}
                        resizeMode="contain"
                        style={styles.previewImage}
                        source={preview}
                    />

                    {/* <RNCamera style={{ flex: 1, borderWidth: 1 }}> */}
                    <View style={{ flex: 1, justifyContent: 'center', borderColor: 'white', paddingTop: 10 }}>
                        <View style={{
                            height: 280, width: 280, alignSelf: 'center',
                        }}>
                            <Image
                                resizeMode="contain"
                                style={{
                                    height: 280, width: 280
                                }}
                                source={image} />
                        </View>
                    </View>
                    {/* </RNCamera> */}
                    {/* {Array(itemsCount)
                        .fill(null)
                        .map((_, index) => ({
                            key: index,
                            text: `${index + 1}`,
                            color: `hsl(${(index * 13) % 360}, 50%, 80%)`,
                        }))
                        .map(({ key, text, color }) => {
                            return (
                                <View style={[styles.item, { backgroundColor: color }]} key={key}>
                                    <Text style={styles.itemText}>{text}</Text>
                                </View>
                            );
                        })} */}
                </ViewShot>
            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    root: {
        paddingVertical: 20,
    },
    content: {
        backgroundColor: '#fff',
    },
    item: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemText: {
        fontSize: 22,
        color: '#666',
    },
    previewImage: {
        height: 200,
        backgroundColor: 'black',
    },
});

Viewshoot.navigationProps = {
    title: 'Viewshoot',
};

export default Viewshoot;