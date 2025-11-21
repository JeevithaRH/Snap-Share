 
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function ImageCircle({ source, title }) {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.circle} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 12,
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#f9099d8c'
  },
  title: {
    marginTop: 4,
    fontSize: 12,
    color: '#0a0338ff',
  },
});