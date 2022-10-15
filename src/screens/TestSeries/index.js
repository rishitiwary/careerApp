import React from 'react';

import {
  StyleSheet,
  SafeAreaView
} from 'react-native';
import {WebView} from 'react-native-webview';
import {AuthContext} from '../../components/AuthContext';
const TestSeries = () => {
  const {userInfo}=React.useContext(AuthContext);
  let id=JSON.parse(userInfo).user_detail.id;
 return(
  <SafeAreaView style={{ flex: 1 }}>
   <WebView
        source={{uri: 'https://www.careerfoundation.org.in/webview?id='+id}}
      />
</SafeAreaView>
 )
};
export default TestSeries;

const styles = StyleSheet.create({  
  container: {  
      flex: 1, 
      height:'100%' 
  }  
})  
