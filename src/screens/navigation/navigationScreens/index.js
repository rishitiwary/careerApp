import React from 'react';
 
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Course from '../../Course';
import HomeScreen from '../../Home';
import Category from '../../Category';
import COLORS from '../../../config/colors';
import Description from '../../Description';

const Stack = createNativeStackNavigator();
const NavigationScreens = () => {
 
  return (
    <Stack.Navigator   screenOptions={{
      headerStyle: {
        backgroundColor: COLORS.bgColor,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen
        name="Course"
        component={Course}
      />
      <Stack.Screen
        name="Description"
        component={Description}
      />
    </Stack.Navigator>
  );
};
export default NavigationScreens;
