import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BASE_URL, IMG_URL} from '../../config/config';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Topmenu} from '../../components/Topmenu';
import styles from './style';
import {BottomNavigation} from '../../components/BottomNavigation';

const HomeScreen = () => {
  const navigation = useNavigation();
   
  return (
    <View style={styles.container}>
      <View style={styles.headerBanner}><Text style={styles.headerText}>Career Foundation</Text></View>
      <View style={styles.header}>
        <Topmenu />
      </View>

      <View style={styles.footer}>
         <Text style={{color:'black'}}>Home screen</Text>
      </View>
      <BottomNavigation />
    </View>
  );
};

export default HomeScreen;
