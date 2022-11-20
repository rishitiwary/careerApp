import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
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
import {AuthContext} from '../../components/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';
const {height} = Dimensions.get('screen');
const Register = () => {
  const {register,isLoading} = useContext(AuthContext);
  const navigation = useNavigation();
  const [data, setData] = useState({
    username: '',
    email: '',
    address: '',
    mobile: '',
    password: '',
    confirm_password: '',
    device_type: 'Android',
    check_usernameInputChange: false,
    check_emailInputChange: false,
    check_addressInputChange: false,
    check_mobileInputChange: false,
    secureTextEntry: true,
    confirmsecureTextEntry: true,
  });

  const usernameInputChange = val => {
    if (val.length != 0) {
      setData({
        ...data,
        username: val,
        check_usernameInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_usernameInputChange: false,
      });
    }
  };
  const emailInputChange = val => {
    if (val.length != 0) {
      setData({
        ...data,
        email: val,
        check_emailInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_emailInputChange: false,
      });
    }
  };
  const mobileInputChange = val => {
    if (val.length != 0) {
      setData({
        ...data,
        mobile: val,
        check_mobileInputChange: true,
      });
    } else {
      setData({
        ...data,
        mobile: val,
        check_mobileInputChange: false,
      });
    }
  };
  const addressInputChange = val => {
    if (val.length != 0) {
      setData({
        ...data,
        address: val,
        check_addressInputChange: true,
      });
    } else {
      setData({
        ...data,
        address: val,
        check_addressInputChange: false,
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
  const confirmHandlePassword = val => {
    if (val.length != 0) {
      setData({
        ...data,
        confirm_password: val,
      });
    } else {
      setData({
        ...data,
        confirm_password: val,
      });
    }
  };
  const updateSecureText = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const updateConfirmSecureText = () => {
    setData({
      ...data,
      confirmsecureTextEntry: !data.confirmsecureTextEntry,
    });
  };
  const handleRegister=()=>{
    if(data.username.length>0 && data.email.length>0 && data.address.length>0 && data.mobile.length>0 && data.password.length>0 && data.confirm_password.length>0 && data.password.length>0){
     if(data.password!==data.confirm_password){
       alert('Confirm password not matched');
     }else{
      register(data);
     }
     }else{
      alert('Please fill all the fields.');
     }
  }
  return (
    <View style={styles.container}>
      <Spinner visible={isLoading}/>
      <Animatable.View style={styles.header} animation="fadeInDownBig">
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.text}>Register Now</Text>
      </Animatable.View>

      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />

          <TextInput
            placeholder="Username"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => usernameInputChange(val)}
            placeholderTextColor="#000"
          />
          {data.check_usernameInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        <View style={styles.action}>
          <FontAwesome name="envelope-o" color="#05375a" size={20} />

          <TextInput
            placeholder="Email Address"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => emailInputChange(val)}
            placeholderTextColor="#000"
          />
          {data.check_emailInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        <View style={styles.action}>
          <FontAwesome name="address-card-o" color="#05375a" size={20} />

          <TextInput
            placeholder="Address"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => addressInputChange(val)}
            placeholderTextColor="#000"
           
          />
          {data.check_addressInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        <View style={styles.action}>
          <FontAwesome name="mobile" color="#05375a" size={20} />

          <TextInput
            placeholder="Mobile Number"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => mobileInputChange(val)}
            placeholderTextColor="#000"
            keyboardType='numeric'
          />
          {data.check_mobileInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>

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

        <View style={styles.action}>
          <FontAwesome name="lock" color="#05375a" size={20} />

          <TextInput
            placeholder="Confirm Your password"
            style={styles.textInput}
            autoCapitalize="none"
            secureTextEntry={data.confirmsecureTextEntry ? true : false}
            onChangeText={val => confirmHandlePassword(val)}
            placeholderTextColor="#000"
          />
          <TouchableOpacity onPress={updateConfirmSecureText}>
            {data.confirmsecureTextEntry ? (
              <Feather name="eye-off" color="green" size={20} />
            ) : (
              <Feather name="eye" color="green" size={20} />
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {
           handleRegister();
          }}>
          <LinearGradient colors={['#0000ff', '#000099']} style={styles.signIn}>
            <Text style={styles.textSingIn}>Register Now</Text>
            <MaterialIcon name="navigate-next" color="#fff" size={20} />
          </LinearGradient>
        </TouchableOpacity>
        <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text
              style={[
                styles.textSingIn,
                {
                  color: 'black',
                },
              ]}>
              Existing User ? Login
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
      </Animatable.View>
    </View>
  );
};
export default Register;
