import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat, Bubble,Send } from 'react-native-gifted-chat'
import { View, Text, Button, StyleSheet } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {AuthContext} from '../../components/AuthContext';
import {BASE_URL} from '../../config/config';
import axios from 'axios';
const Chat = () => {
  const {userInfo}=React.useContext(AuthContext);
  const [senderid,setSenderid]=useState(JSON.parse(userInfo).user_detail.id);
  const [messages, setMessages] = useState([]);
 
  const allmessage= async () =>{
    await axios({
      method: 'GET',
      url: `${BASE_URL}/chatmessage/${senderid}`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(function (response) {
         let result = JSON.stringify(response.data);
        const msgs=JSON.parse(result).data
      const allmsg= msgs.map((item,index)=>{
         return {
          _id: item.sender_id,
          text: item.message,
          createdAt: new Date(),
          user: {
            _id: item.sender_id,
            name: 'Career Foundation',
            avatar: 'https://www.careerfoundation.org.in/assets/images/logo/logo.png',
          },
         }
        })
        setMessages(allmsg);
          
      })
      .catch(function (error) {
        console.log('error', error.response);
        // setIsLoading(false);
      });
  }
  useEffect(() => {
    allmessage();

   
  }, [])
  const sendmessage = async data => {
    await axios({
      method: 'POST',
      url: `${BASE_URL}/sendmessage`,
      data: data,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(function (response) {
        let result = JSON.stringify(response.data.message);
        console.log(result);
        // setMessage(JSON.parse(result));
        // setIsLoading(false);
      })
      .catch(function (error) {
        console.log('error', error.response.data);
        // setIsLoading(false);
      });
   }
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    let msg=messages[0];
      let formData={
        message:msg.text,
        sender_id:msg.user._id,
        createdAt:msg.createdAt,
        reciever_id:1
      };
      sendmessage(formData);
    
  }, [])
  const renderBubble=(props)=>{
    return(
      <Bubble
      {...props}
      wrapperStyle={{
        right:{
          backgroundColor:'#000099',
        }
      }}
      textStyle={{
        right:{
          color:'#ffff'
        }
      }}
      />
    )
  }
  const renderSend=(props)=>{
    return(
      <Send {...props}>
        
        <View>
        <MaterialIcon name="send" color="#000099"  style={{marginBottom:5,marginRight:5}} size={34} />
        </View>
        </Send>
    )
  }
  const scrollToBottomComponent=(props)=>{
    return(
        <FontAwesome name="angle-double-down" size={22} color='#333'/>
    )
  }
    return (
      <GiftedChat
      style={{color:'black'}}
      messages={messages}
      multiline={true}
      loadEarlier={true}
      scrollToBottom={true}
      scrollToBottomComponent={scrollToBottomComponent}
      onSend={messages => onSend(messages)}
      user={{
        _id: senderid,
      }}
      textInputStyle={{
        color:'black',
        borderRadius:20,
      }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
    />
    );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  text:{
    color:'black',
  }
});