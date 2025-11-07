import React, {useEffect, useRef} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Animated,
  Dimensions,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');

interface SplashScreenProps {
  onAnimationEnd?: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({onAnimationEnd}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.3)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Start animations
    Animated.sequence([
      // Logo fades in and scales up
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          tension: 50,
          friction: 7,
          useNativeDriver: true,
        }),
      ]),
      // Subtle pulse effect
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.05,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
        {iterations: 2},
      ),
    ]).start(() => {
      // Animation complete, wait a bit then call callback
      setTimeout(() => {
        if (onAnimationEnd) {
          onAnimationEnd();
        }
      }, 500);
    });
  }, [fadeAnim, scaleAnim, pulseAnim, onAnimationEnd]);

  // Render static rays (no animation) - wide soft bands
  const renderStaticRays = () => {
    const rays = [];
    const maxDimension = Math.max(width, height) * 2;
    const rayWidth = 300; // Much wider bands
    const rayAngles = [0, 90, 180, 270]; // 4 rays in cross pattern

    rayAngles.forEach((angle, index) => {
      rays.push(
        <View
          key={index}
          style={[
            styles.rayWrapper,
            {
              transform: [
                {rotate: `${angle}deg`},
              ],
            },
          ]}>
          <View
            style={{
              width: rayWidth,
              height: maxDimension,
              backgroundColor: 'rgba(0, 0, 0, 0.05)', // Very subtle dark overlay
            }}
          />
        </View>,
      );
    });
    return rays;
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#198754"
        translucent={false}
      />
      <View style={[styles.gradient, {backgroundColor: '#198754'}]}>
        {/* Static rays in background */}
        <View style={styles.raysContainer}>
          {renderStaticRays()}
        </View>

        {/* Logo */}
        <Animated.View
          style={[
            styles.logoContainer,
            {
              opacity: fadeAnim,
              transform: [
                {scale: Animated.multiply(scaleAnim, pulseAnim)},
              ],
            },
          ]}>
          <Image
            source={require('./assets/splash-tazty-logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  raysContainer: {
    position: 'absolute',
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rayWrapper: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.6,
    height: height * 0.3,
  },
});

export default SplashScreen;
