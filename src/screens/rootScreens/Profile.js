import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {ThemeColors} from '../../constants/Colors';
export const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Profile screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: '#000',
    fontSize: 20,
  },
  buttonShareStyle: {
    backgroundColor: ThemeColors.purple,
    padding: 10,
    borderRadius: 5,
  },
  buttonTextStyle: {
    color: '#fff',
  },
});
