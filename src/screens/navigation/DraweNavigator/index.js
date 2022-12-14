import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
 import {Linking} from 'react-native';
import ContactUs from '../../ContactUs';
import EditProfile from '../../Editprofile';
import ChangePassword from '../../ChangePassword';
import Faq from '../../Faq';
import AboutUs from '../../Aboutus';
import CustomDrawer from '../CustomDrawer';
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
        drawerActiveBackgroundColor: COLORS.bgColor,
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
        headerStyle: {
          backgroundColor: COLORS.bgColor,
        },
        headerTintColor: '#fff',
        headerShown: false,
        swipeEnabled: false,
      }}>
      <Drawer.Screen
        name="HomeScreen"
        component={NavigationScreens}
        options={{
          title: 'Home',
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Edit Profile"
        component={EditProfile}
        options={{
          title: 'Edit Profile',
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
        screenOptions={{
          tabBarHideOnKeyboard: true
        }}
      />
      <Drawer.Screen
        name="Change Password"
        component={ChangePassword}
        options={{
          title: 'Change Password',
          drawerIcon: ({color}) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
        screenOptions={{
          tabBarHideOnKeyboard: true
        }}
      />
      {/* <Drawer.Screen
        name="FAQ"
        component={Faq}
        options={{
          title: 'FAQ',
          drawerIcon: ({color}) => (
            <Ionicons name="help-outline" size={22} color={color} />
          ),
        }}
      /> */}
      <Drawer.Screen
        name="About Us"
       component={AboutUs}
        options={{
          title: 'About Us',
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Contactus"
        component={ContactUs}
        options={{
          title: 'Contact Us',
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      
    </Drawer.Navigator>
  );
}
