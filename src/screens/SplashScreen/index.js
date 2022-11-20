import React from 'react';
import {Image,StatusBar} from 'react-native';
import style from './style'
import * as Animatable from 'react-native-animatable';
import Logo from '../../../assets/images/career.gif';
  const SplashScreen =()=>{
    return (
        <Animatable.View style={style.container}
        animation="fadeInUpBig"
        >
         <StatusBar hidden={true}/>
         <Image source={Logo} style={style.logo}/>
            {/* <Text style={style.text}>Welcome To Career Foundation</Text> */}
        </Animatable.View>
    )
}
export default SplashScreen;

 