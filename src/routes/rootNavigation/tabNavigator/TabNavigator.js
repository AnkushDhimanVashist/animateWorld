import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../../../screens/rootScreens/Home';
import {Profile} from '../../../screens/rootScreens/Profile';
import {fontFamilyGroup} from '../../../constants/fontFamilyConstant/FontFamilyConstant';
import {ThemeColors} from '../../../constants/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        headerStyle: {backgroundColor: ThemeColors.otpFieldBackground},
        headerTintColor: ThemeColors.black,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: fontFamilyGroup.boldFont600,
        },
        tabBarActiveTintColor: ThemeColors.purple,
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'cart' : 'cart-outline';
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
