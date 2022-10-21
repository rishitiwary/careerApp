import React from 'react';
 
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Course from '../../Course';
import HomeScreen from '../../Home';
import Category from '../../Category';
import COLORS from '../../../config/colors';
import Description from '../../Description';
import Live from '../../Description/Live';
import Fullscreen from '../../Description/fullscreen';
import Subject from '../../Subject';
import SubjectCategory from '../../SubjectCategory';
import SubjectSubCategory from '../../SubjectSubCategory';
import Videobysubject from '../../Videobysubject';
import MyPurchase from '../../MyPurchase';
import ViewPdf from '../../ViewPdf';
import TestSeries from '../../TestSeries';
import Books from '../../Books';
import Jobs from '../../Jobs';
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
        name="My Purchased"
        component={MyPurchase}
        options={{headerShown: false}}

      />
      <Stack.Screen
        name="Description"
        component={Description}
      />
      <Stack.Screen
        name="Subject"
        component={Subject}
      />
       <Stack.Screen
        name="SubjectCategory"
        component={SubjectCategory}
      />
       <Stack.Screen
        name="SubjectSubCategory"
        component={SubjectSubCategory}
      />
         <Stack.Screen
        name="Videobysubject"
        component={Videobysubject}
      />
       <Stack.Screen
        name="FullScreen"
        component={Fullscreen}
        options={{headerShown: false,orientation: 'landscape'}}
         
      />
          <Stack.Screen
        name="ViewPdf"
        component={ViewPdf}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name="FreeVideos"
        component={Videobysubject}
        
      />
      <Stack.Screen
        name="Test Series"
        component={TestSeries}
      />
      <Stack.Screen
        name="Books"
        component={Books}
      />
        <Stack.Screen
        name="Jobs"
        component={Jobs}
      />
      <Stack.Screen
        name="Live"
        component={Live}
      />
    </Stack.Navigator>
  );
};
export default NavigationScreens;
