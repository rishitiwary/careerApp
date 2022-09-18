import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native';
const SettingScreen = () => {
  const navigationHooks=useNavigation();
    return (
      <View style={styles.container}>
          <Text>Settings  Screens</Text>
      <Button
        title="Go to Home  screen"
        onPress={() => navigationHooks.navigate("Home")}
      />
      </View>
    );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});