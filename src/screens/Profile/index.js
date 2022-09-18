import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native';
const ProfileScreen = () => {
  const navigationHooks=useNavigation();
    return (
      <View style={styles.container}>
          <Text>Profile Screens</Text>
      <Button
        title="Go to Home  screen"
        onPress={() => navigationHooks.navigate("Home")}
      />
      </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});