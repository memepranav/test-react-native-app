import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface GraphSwitchButtonProps {
  onToggle?: (isGraph: boolean) => void;
  initialState?: boolean;
}

const GraphSwitchButton: React.FC<GraphSwitchButtonProps> = ({
  onToggle,
  initialState = true,
}) => {
  const [isGraph, setIsGraph] = useState(initialState);

  const handleToggle = () => {
    const newState = !isGraph;
    setIsGraph(newState);
    onToggle?.(newState);
  };

  return (
    <TouchableOpacity onPress={handleToggle} activeOpacity={0.8}>
      <View style={styles.container}>
        {/* Outer Container */}
        <LinearGradient
          colors={['rgba(2, 35, 71, 0.1)', 'rgba(255, 255, 255, 0.1)']}
          start={{x: 0, y: -0.05}}
          end={{x: 0, y: 1.1571}}
          style={styles.outerContainer}>

          {/* Graph icon on left - always visible */}
          <View style={styles.leftIconContainer}>
            <Image
              source={require('../../assets/chart1.png')}
              style={styles.iconImage}
              resizeMode="contain"
            />
          </View>

          {/* Bar chart icon on right - always visible */}
          <View style={styles.rightIconContainer}>
            <Image
              source={require('../../assets/chart2.png')}
              style={styles.iconImage}
              resizeMode="contain"
            />
          </View>

          {/* Toggle Circle - moves left and right */}
          <LinearGradient
            colors={['rgba(2, 35, 71, 0.1)', 'rgba(255, 255, 255, 0.1)']}
            start={{x: 0, y: -0.05}}
            end={{x: 0, y: 1.1571}}
            style={[
              styles.toggleCircle,
              isGraph ? styles.toggleLeft : styles.toggleRight,
            ]}
          />
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 30,
  },
  outerContainer: {
    width: 60,
    height: 30,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'center',
    position: 'relative',
  },
  toggleCircle: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 20,
    position: 'absolute',
    top: 4,
    zIndex: 10,
  },
  toggleLeft: {
    left: 5,
  },
  toggleRight: {
    right: 5,
  },
  leftIconContainer: {
    position: 'absolute',
    left: 10,
    width: 10,
    height: 9,
    top: '50%',
    marginTop: -4.5,
    zIndex: 5,
  },
  rightIconContainer: {
    position: 'absolute',
    right: 8,
    width: 12.44,
    height: 11.34,
    top: '50%',
    marginTop: -5.67,
    zIndex: 5,
  },
  iconImage: {
    width: '100%',
    height: '100%',
  },
});

export default GraphSwitchButton;
