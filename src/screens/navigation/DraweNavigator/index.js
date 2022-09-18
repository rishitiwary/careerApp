import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import BottomNavigator from '../BottomNavigator';
import SettingScreen from '../../Settings';
import ProfileScreen from '../../Profile';
import CustomDrawer from '../CustomDrawer';
import HomeScreen from '../../Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../../../config/colors';
const Drawer = createDrawerNavigator();
import NavigationScreens from '../navigationScreens';
export default function MyDrawer() {
  
  return (
     
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="HomeScreen"
      
      screenOptions={{
        drawerActiveBackgroundColor:COLORS.bgColor,
        drawerActiveTintColor:'#fff',
        drawerInactiveTintColor:'#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
        headerStyle: {
          backgroundColor: COLORS.bgColor,
        },
        headerTintColor: '#fff',
         
      }}>
        
      <Drawer.Screen
        name="HomeScreen"
        
        component={NavigationScreens}
        options={{
          title: 'Home',
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
          headerShown:false
        }}
       
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="My Purchase"
        component={SettingScreen}
        options={{
          title: 'My Purchase',
          drawerIcon: ({color}) => (
            <Ionicons name="cart-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          title: 'Settings',
          drawerIcon: ({color}) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      />
      
    </Drawer.Navigator>
  );
}
