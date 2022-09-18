import React, {createContext,useState, useEffect,useMemo} from 'react';
import {BASE_URL} from '../config/config';
import  axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();
 
export const AuthProvider = ({children}) => {
  const [userInfo,setUserInfo]=useState([]);
  const [isLoading,setIsLoading]=useState(false);
  const [message,setMessage]=useState(null);
  const register = async data => {
    setIsLoading(true);

    let formData ={
      username: data.username,
      address: data.address,
      email: data.email,
      phone: data.mobile,
      device_type: data.device_type,
      confirm_password: data.confirm_password
    };
    
 
    await axios({
      method:'POST',
      url:`${BASE_URL}/register`,
      data:formData,
      headers:{
        'Content-Type':'multipart/form-data'
      }
    }
    
    ).then(function(response){
      let result=JSON.stringify(response.data.message);
      setUserInfo(result);
      AsyncStorage.setItem('userInfo',result);
      setIsLoading(false);
     
    }).catch(function (error){
      console.log("error",error.response.data);
      setIsLoading(false);
    })
      
  };

  const login = async data => {
    console.log(data);
    setMessage(null);
    setIsLoading(true);
    let formData ={
      email: data.email,
      password: data.password,
      deviceId:data.deviceId
    };
    
    
    await axios({
      method:'POST',
      url:`${BASE_URL}/login`,
      data:formData,
      headers:{
        'Content-Type':'multipart/form-data'
      }
    }
    
    ).then(function(response){
    let result=JSON.stringify(response.data);
      setUserInfo(result);
      AsyncStorage.setItem('userInfo',result);
      setIsLoading(false);
      setMessage(JSON.parse(result).message);
   
    }).catch(function (error){
      console.log("error",error.response.data);
      setIsLoading(false);
    })
      
  };
  //logout
  const singOut = async data => {
    setMessage(null);
    setIsLoading(true);
  let res=JSON.parse(userInfo);
    let formData ={
      user_id: res.user_detail.id,
    };
    await axios({
      method:'POST',
      url:`${BASE_URL}/logout`,
      data:formData,
      headers:{
        'Content-Type':'multipart/form-data'
      }
    }
    
    ).then(function(response){
      AsyncStorage.removeItem('userInfo');
      setUserInfo([]);
      setIsLoading(false);
      setMessage('Logout succesfully !');
    }).catch(function (error){
      console.log("error",error);
      setIsLoading(false);
    })
      
  };
  //isloggedin

  const isloggedin=async ()=>{
 try{
   console.log('isLoggedin');
   setMessage(null);
  let userInfo=await AsyncStorage.getItem('userInfo');
  if(userInfo){
    setUserInfo(userInfo);
  }
 }catch(e){
   console.log('logged in error',e);
 }
   
}
useEffect(()=>{
isloggedin();
},[]);
  return (
    <AuthContext.Provider value={{register,login,singOut,message,isLoading,userInfo}}>{children}</AuthContext.Provider>
  );
};
