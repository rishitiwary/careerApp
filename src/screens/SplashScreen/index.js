import React from 'react';
import {Image,StatusBar,View} from 'react-native';
import style from './style'
import * as Animatable from 'react-native-animatable';
import Logo from '../../../assets/images/career.gif';
  const SplashScreen =()=>{
    return (
        <View style={style.container}>
         <StatusBar hidden={true}/>
         <Image source={Logo} style={style.logo}/>
            {/* <Text style={style.text}>Welcome To Career Foundation</Text> */}
        </View>
    )
}
export default SplashScreen;

 