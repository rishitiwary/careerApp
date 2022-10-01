import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text,View, ImageBackground,Image} from 'react-native';
import {AuthContext} from '../../../components/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';
import {
    DrawerContentScrollView,
    DrawerItemList,
  } from '@react-navigation/drawer';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import  FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomDrawer=(props)=>{
  const {singOut,isLoading,userInfo}=React.useContext(AuthContext);
 return(
     <View style={{flex:1}} >
             <Spinner visible={isLoading}/>
    <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'#8200d6'}}>
      <ImageBackground source={require('../../../../assets/images/menu-bg.jpeg')} style={{padding:20}}>
<Image source={require('../../../../assets/images/user-profile.jpeg')} style={{height:80,width:80,borderRadius:40,marginBottom:10}}/>
 <Text style={{color:'#fff',fontSize:18,fontFamily:'Roboto-Medium',textTransform: 'capitalize'}}>Hello {JSON.parse(userInfo).user_detail.username}</Text>
       <View style={{flexDirection:'row'}}>
       <Text style={{color:'#fff',fontSize:16,fontFamily:'Roboto-Regular'}}> <FontAwesome5 name="mobile" size={14} color='#fff'/>  {JSON.parse(userInfo).user_detail.phone}</Text>
       </View>
     

        </ImageBackground>
    <View style={{flex:1,backgroundColor:'#fff',paddingTop:10}}>
    <DrawerItemList {...props} />
    </View>
  </DrawerContentScrollView>
   
  <View style={{padding:20,borderTopWidth:1,borderTopColor:'#ccc'}}>
  <TouchableOpacity onPress={() => singOut()} style={{paddingVertical:15}} >
<View style={{flexDirection:'row',alignItems:'center'}}>

  <Ionicons name="exit-outline" size={22} color="black"/>
  <Text style={{fontSize:15,fontFamily:'Roboto-Medium',marginLeft:5,color:'black'}}>Logout</Text>
</View>

  </TouchableOpacity>

  <TouchableOpacity  style={{paddingVertical:15}} >
<View style={{flexDirection:'row',alignItems:'center' }}>

  <Ionicons name="share-social-outline" size={22} color="black"/>
  <Text style={{fontSize:15,fontFamily:'Roboto-Medium',marginLeft:5,color:'black'}}>Tell Us Your Friend</Text>
</View>

  </TouchableOpacity>
  </View>
  </View>
 
 )
}
export default CustomDrawer;