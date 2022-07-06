import React from 'react';
import { Animated, Easing } from 'react-native';

import styles from './styles';

function X() {
  const lineOne = new Animated.Value(0);
  const lineTwo = new Animated.Value(0);

  Animated.timing(lineOne, {
    toValue: 45,
    duration: 500,
    easing: Easing.elastic(1.5),
    useNativeDriver: true,
  }).start();

  Animated.timing(lineTwo, {
    toValue: -45,
    duration: 700,
    easing: Easing.elastic(1.5),
    useNativeDriver: true,
  }).start();

  const r1 = lineOne.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });
  const r2 = lineTwo.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View style={styles.container}>
      <Animated.View
        style={[
          styles.line,
          {
            transform: [{ perspective: 1000 }, { rotate: r1 }],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.line,
          {
            transform: [{ perspective: 1000 }, { rotate: r2 }],
          },
        ]}
      />
    </Animated.View>
  );
}

export default X;
