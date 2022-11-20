import React, {useState, useContext} from 'react';
import DeviceInfo from 'react-native-device-info';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Logo from '../../../assets/images/logo.png';
import styles from './style';
import {TextInput} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../../components/AuthContext';

const Login = () => {
  const {login, isLoading} = useContext(AuthContext);
  const navigation = useNavigation();
  const [data, setData] = useState({
    deviceId:'',
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });
  const textInputChange = val => {
    if (val.length != 0) {
      setData({
        ...data,
        email: val,
        deviceId:DeviceInfo.getUniqueId()._W,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };
  const handlePassword = val => {
    if (val.length != 0) {
      setData({
        ...data,
        password: val,
      });
    } else {
      setData({
        ...data,
        password: val,
      });
    }
  };
  const updateSecureText = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const handleLogin = () => {
    if (data.email.length > 0 && data.password.length > 0) {
     
      login(data);
    } else {
      alert('Please fill all the fields.');
    }
  };

  return (
    <View style={styles.container}>
 
      <Spinner visible={isLoading} />
      <Animatable.View style={styles.header} animation="fadeInDownBig">
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.text}>Login Now</Text>
      </Animatable.View>

      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.title}>Sign in with accounts</Text>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="envelope-o" color="#05375a" size={20} />

          <TextInput
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => textInputChange(val)}
            placeholderTextColor="#000"
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>

        <Text style={[styles.text_footer]}>Password</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#05375a" size={20} />

          <TextInput
            placeholder="Your password"
            style={styles.textInput}
            autoCapitalize="none"
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={val => handlePassword(val)}
            placeholderTextColor="#000"
          />
          <TouchableOpacity onPress={updateSecureText}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="green" size={20} />
            ) : (
              <Feather name="eye" color="green" size={20} />
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => handleLogin()}>
          <LinearGradient colors={['#0000ff', '#000099']} style={styles.signIn}>
            <Text style={styles.textSingIn}>Login</Text>
            <MaterialIcon name="navigate-next" color="#fff" size={20} />
          </LinearGradient>
        </TouchableOpacity>
        <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text
              style={[
                styles.textSingIn,
                {
                  color: 'black',
                },
              ]}>
              New User ? Register
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
            <Text
              style={[
                styles.textSingIn,
                {
                  color: 'blue',
                },
              ]}>
              Forgot Password
            </Text>
          </TouchableOpacity>
        </View>

        <View></View>
      </Animatable.View>
    </View>
  );
};
export default Login;
