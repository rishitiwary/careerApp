import React from 'react';
import {Text,View,Image,StatusBar,StyleSheet, LogBox} from 'react-native';
import style from './style'
import * as Animatable from 'react-native-animatable';
import Logo from '../../../assets/images/logo.png';
  const SplashScreen =()=>{
    return (
        <Animatable.View style={style.container}
        animation="fadeInUpBig"
        >
         <StatusBar hidden={true}/>
         <Image source={Logo} style={style.logo}/>
            <Text style={style.text}>Welcome To Career Foundation</Text>
        </Animatable.View>
    )
}
export default SplashScreen;

 