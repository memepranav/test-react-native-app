/**
 * Hello World React Native App
 *
 * @format
 */

import React, {useState} from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, Dimensions } from 'react-native';
import Background from './src/components/Background';
import SplashScreen from './SplashScreen';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashEnd = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onAnimationEnd={handleSplashEnd} />;
  }

  return (
    <View style={styles.container}>
      <Background />
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="light-content" />
        <View style={styles.content}>
          <MaskedView
            style={styles.gradientTextContainer}
            maskElement={
              <Text style={styles.gradientText}>
                We're{'\n'}KOKORO{'\n'}Bharat
              </Text>
            }
          >
            <LinearGradient
              colors={['#FE4600', '#FF6530', '#F73636', '#FFB55E', '#85E0A3', '#02B9FF']}
              start={{x: -0.3, y: 0.5}}
              end={{x: 0.8, y: 0.5}}
              style={styles.gradient}
            >
              <Text style={[styles.gradientText, {opacity: 0}]}>
                We're{'\n'}KOKORO{'\n'}Bharat
              </Text>
            </LinearGradient>
          </MaskedView>
        </View>
      </SafeAreaView>
    </View>
  );
}

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientTextContainer: {
    position: 'absolute',
    width: 320,
    height: 200,
    left: screenWidth / 2 - 160,
    top: screenHeight / 2 - 100 - 155.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientText: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    fontSize: 48,
    lineHeight: 40,
    letterSpacing: 0,
    textAlign: 'center',
    textAlignVertical: 'center',
    includeFontPadding: false,
  },
  gradient: {
    flex: 1,
    width: 320,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
