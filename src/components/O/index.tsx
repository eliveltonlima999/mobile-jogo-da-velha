import React from 'react';
import { Animated, Easing } from 'react-native';

import styles from './styles';

function O() {
  const circle = new Animated.Value(0);

  Animated.timing(circle, {
    toValue: 60,
    duration: 700,
    easing: Easing.elastic(1.5),
    useNativeDriver: false,
  }).start();

  return (
    <Animated.View style={styles.container}>
      <Animated.View style={[styles.circle, { height: circle }]} />
    </Animated.View>
  );
}

export default O;
