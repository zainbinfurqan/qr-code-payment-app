/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './src/pages/home'
import Login from './src/pages/login'
import Registration from './src/pages/registration'
import Wallet from './src/pages/wallet'
import Purchase from './src/pages/purchase-QR'
import GenerateQRCode from './src/pages/generate-qr'
import Navigation from './src/navigation'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './src/redux';
import { RNCamera } from 'react-native-camera';
import Tie1 from './src/assets/images/s-1.png'
import ViewShot, { captureScreen } from 'react-native-view-shot';
import RNFS from 'react-native-fs'
import Share from 'react-native-share';
import SwapIntro from './src/pages/SwapIntro';

const App = () => {
  const full = useRef();
  const [image, setImage] = useState(require('./src/assets/images/s-1.png'))
  const [showScreenShot, setShowScreenShot] = useState('')
  const [trying, setTrying] = useState(true)

  const takeScreenShot = () => {
    // full.current.capture().then((uri) => {
    //   RNFS.readFile(uri, 'base64').then((res) => {
    //     let urlString = 'data:image/jpeg;base64,' + res;
    //     let options = {
    //       title: 'Share Title',
    //       message: 'Share Message',
    //       url: urlString,
    //       type: 'image/jpeg',
    //     };
    //     Share.open(options)
    //       .then((res) => {
    //         console.log(res);
    //       })
    //       .catch((err) => {
    //         err && console.log(err);
    //       });
    //   });
    // });
    // full.current.capture().then(uri => {
    //   console.log("uri", uri)
    //   setTrying(false)
    //   setShowScreenShot(uri)
    // }
    // );
    captureScreen({
      // Either png or jpg (or webm Android Only), Defaults: png
      format: 'jpg',
      // Quality 0.0 - 1.0 (only available for jpg)
      quality: 1,
    }).then(
      //callback function to get the result URL of the screnshot
      (uri) => {
        console.log("uri", uri)
        RNFS.readFile(uri, 'base64').then((res) => {
          let urlString = 'data:image/jpeg;base64,' + res;
          let options = {
            title: 'Share Title',
            message: 'Share Message',
            url: urlString,
            type: 'image/jpeg',
          };
          Share.open(options)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              err && console.log(err);
            });
        });
        // setSavedImagePath(uri);
        setTrying(false)
        setShowScreenShot(uri);
      },
      (error) => console.error('Oops, Something Went Wrong', error),
    );
  };

  return (
    <>
      <Provider store={store}>
        {console.log(image)}
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar barStyle="dark-content" />
          <SwapIntro />
          {/* {trying && <>
            <ViewShot style={{ flex: 1 }} ref={full} captureMode="mount">
              <RNCamera style={{ flex: 1, borderWidth: 1 }}>
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
              </RNCamera>
            </ViewShot>
            <Text>Zain</Text>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={takeScreenShot}>
              <Text style={styles.buttonTextStyle}>
                Take Screenshot
          </Text>
            </TouchableOpacity>
            <View style={{ borderColor: 'white', flexDirection: 'row', flexWrap: 'wrap', padding: 5 }}>
              <TouchableOpacity onPress={() => setImage(require('./src/assets/images/tie.png'))} style={{ padding: 5, borderWidth: 0.35, borderColor: '#E14D02', margin: 5, borderRadius: 5, }}>
                <Text>Tie-1</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setImage(require('./src/assets/images/tie2.png'))} style={{ padding: 5, borderColor: '#E14D02', borderWidth: 0.35, margin: 5, borderRadius: 5, }}>
                <Text>Tie-2</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setImage(require('./src/assets/images/s-1.png'))} style={{ padding: 5, borderColor: '#E14D02', borderWidth: 0.35, margin: 5, borderRadius: 5, }}>
                <Text>Shirt-1</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setImage(require('./src/assets/images/s2.png'))} style={{ padding: 5, borderColor: '#E14D02', borderWidth: 0.35, margin: 5, borderRadius: 5, }}>
                <Text>Shirt-2</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setImage(require('./src/assets/images/s-3.png'))} style={{ padding: 5, borderColor: '#E14D02', borderWidth: 0.35, margin: 5, borderRadius: 5, }}>
                <Text>Shirt-3</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setImage(require('./src/assets/images/s4-4.png'))} style={{ padding: 5, borderColor: '#E14D02', borderWidth: 0.35, margin: 5, borderRadius: 5, }}>
                <Text>Shirt-4</Text>
              </TouchableOpacity>
            </View></>}
          {trying === false && <View style={{ flex: 1, padding: 5, borderWidth: 1, borderWidth: 2, flexDirection: 'column' }}>
            <TouchableOpacity onPress={() => setTrying(true)} style={{ borderWidth: 1, padding: 5, alignSelf: 'flex-start' }}><Text>x</Text></TouchableOpacity>
            {console.log(showScreenShot)}
            <Image style={{ flex: 1, resizeMode: 'contain', }} source={{ uri: showScreenShot }} />
          </View>}
          <Navigation /> */}
        </PersistGate>
      </Provider>
      {/* <StatusBar barStyle="dark-content" /> */}
      {/* <Login /> */}

      {/* <Registration /> */}
      {/* <Wallet /> */}
      {/* <Navigation */}
      {/* <Purchase /> */}
      {/* <GenerateQRCode /> */}
      {/* <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView> */}
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'green',
    padding: 5,
    minWidth: 250,
  },
  buttonTextStyle: {
    padding: 5,
    color: 'white',
    textAlign: 'center',
  },
});

export default App;
