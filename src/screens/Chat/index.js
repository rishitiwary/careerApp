import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { View, Text, Button, StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native';
const Chat = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])
    return (
      <GiftedChat
      style={{color:'black'}}
      messages={messages}
      multiline={true}
      loadEarlier={true}
      scrollToBottom={true}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      textInputStyle={{
      
        color:'black',
        borderRadius:20,
        
      
      }}
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