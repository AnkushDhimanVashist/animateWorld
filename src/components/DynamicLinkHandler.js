import {useEffect} from 'react';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {useNavigation} from '@react-navigation/native';

const DynamicLinkHandler = () => {
  const navigation = useNavigation();
  useEffect(() => {
    handleDynamicLink();
    // when app in forground state
    const unsubscribe = dynamicLinks().onLink(handleLink);
    return () => unsubscribe();
  }, []);

  const handleDynamicLink = async () => {
    // when app in kill state
    const initialLink = await dynamicLinks().getInitialLink();
    if (initialLink) {
      handleLink(initialLink);
    }
  };

  const handleLink = link => {
    // here we can add conditional redirection
    console.log('Its url object', link);
    navigation.navigate('Profile');
  };

  return null;
};

export default DynamicLinkHandler;
