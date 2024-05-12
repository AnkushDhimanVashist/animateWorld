import React from 'react';
import {View, Text, Pressable, StyleSheet, Share} from 'react-native';
import {ThemeColors} from '../../constants/Colors';
import dynamicLinks from '@react-native-firebase/dynamic-links';

export const Home = () => {
  const generateLinks = async () => {
    try {
      const link = await dynamicLinks().buildLink({
        link: 'https://testingfib.page.link/DQbR',
        // link: `https://testingfib.page.link/profile`,
        domainUriPrefix: 'https://testingfib.page.link',
      });
      return link;
    } catch (error) {
      //if any error occurs
      console.log('This is error');
    }
  };

  const handleShare = async () => {
    const linkText = await generateLinks();
    try {
      await Share.share({
        message: linkText,
      });
    } catch (error) {
      console.log('this is error');
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textStyle}>Home screen</Text>
        <Pressable style={styles.buttonShareStyle} onPress={handleShare}>
          <Text style={styles.buttonTextStyle}>Share</Text>
        </Pressable>
      </View>
    </>
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
