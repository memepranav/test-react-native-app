import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { Defs, RadialGradient, Stop, Ellipse, Rect } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const Background = () => {
  return (
    <View style={styles.container}>
      <Svg height="100%" width="100%" style={StyleSheet.absoluteFill}>
        <Defs>
          {/* Top right orange blob gradient */}
          <RadialGradient
            id="topOrange"
            cx="50%"
            cy="50%">
            <Stop offset="0%" stopColor="#ff6b4a" stopOpacity="0.85" />
            <Stop offset="30%" stopColor="#ff5c42" stopOpacity="0.65" />
            <Stop offset="60%" stopColor="#cc4a35" stopOpacity="0.38" />
            <Stop offset="85%" stopColor="#663520" stopOpacity="0.18" />
            <Stop offset="100%" stopColor="#0a1628" stopOpacity="0" />
          </RadialGradient>

          {/* Top right purple accent */}
          <RadialGradient
            id="topPurple"
            cx="50%"
            cy="50%">
            <Stop offset="0%" stopColor="#9d5dd9" stopOpacity="0.48" />
            <Stop offset="50%" stopColor="#7a4aad" stopOpacity="0.28" />
            <Stop offset="100%" stopColor="#0a1628" stopOpacity="0" />
          </RadialGradient>

          {/* Bottom right orange gradient */}
          <RadialGradient
            id="bottomOrange"
            cx="50%"
            cy="50%">
            <Stop offset="0%" stopColor="#ff6b4a" stopOpacity="0.75" />
            <Stop offset="30%" stopColor="#ff5c42" stopOpacity="0.55" />
            <Stop offset="60%" stopColor="#cc4a35" stopOpacity="0.32" />
            <Stop offset="85%" stopColor="#663520" stopOpacity="0.15" />
            <Stop offset="100%" stopColor="#0a1628" stopOpacity="0" />
          </RadialGradient>

          {/* Bottom right purple gradient */}
          <RadialGradient
            id="bottomPurple"
            cx="50%"
            cy="50%">
            <Stop offset="0%" stopColor="#b86bff" stopOpacity="0.4" />
            <Stop offset="50%" stopColor="#7a4aad" stopOpacity="0.23" />
            <Stop offset="100%" stopColor="#0a1628" stopOpacity="0" />
          </RadialGradient>
        </Defs>

        {/* Base dark blue background */}
        <Rect x="0" y="0" width="100%" height="100%" fill="#0a1628" />

        {/* Top right main orange blob - elongated and bigger */}
        <Ellipse
          cx={width * 0.85}
          cy={-height * 0.02}
          rx={width * 0.95}
          ry={width * 0.75}
          fill="url(#topOrange)"
        />

        {/* Top right purple accent - smaller, offset */}
        <Ellipse
          cx={width * 0.65}
          cy={-height * 0.03}
          rx={width * 0.5}
          ry={width * 0.42}
          fill="url(#topPurple)"
        />

        {/* Bottom right orange blob - larger */}
        <Ellipse
          cx={width * 0.85}
          cy={height * 0.88}
          rx={width * 0.55}
          ry={width * 0.5}
          fill="url(#bottomOrange)"
        />

        {/* Bottom right purple blob - at bottom edge, larger */}
        <Ellipse
          cx={width * 0.78}
          cy={height * 1.0}
          rx={width * 0.58}
          ry={width * 0.52}
          fill="url(#bottomPurple)"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a1628',
  },
});

export default Background;
