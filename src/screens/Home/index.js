import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ToastAndroid,
  Image
} from 'react-native';
import {AuthContext} from '../../components/AuthContext';
import axios from 'axios';
import {BASE_URL, IMG_URL} from '../../config/config';
import {useNavigation} from '@react-navigation/native';
import {Topmenu} from '../../components/Topmenu';
import styles from './style';
import {BottomNavigation} from '../../components/BottomNavigation';
 
const HomeScreen = () => {
  const {singOut, userInfo} = React.useContext(AuthContext);
  let deviceid = JSON.parse(userInfo).user_detail.deviceId;
  let userid = JSON.parse(userInfo).user_detail.id;

  const [getData, setData] = useState([]);
  const regex = /(&nbsp|amp|quot|lt|gt|;|<([^>]+)>)/gi;
  const navigation = useNavigation();
  const handleFetchData = async () => {
    try {
      let result = await axios({
        method: 'GET',
        url: `${BASE_URL}/homepage/`,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  let checklogin = async () => {
    try {
      let deviceResponse = await axios({
        method: 'GET',
        url: `${BASE_URL}/checkdeviceId/${userid}/${deviceid}`,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(deviceResponse.status);
    } catch (error) {
      console.log(error);
      // ToastAndroid.show(
      //   'Please logout from other devices !',
      //   ToastAndroid.LONG,
      // );
      // singOut();
    }
  };

  useEffect(() => {
    checklogin();
    handleFetchData();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.headerBanner}>
        <Text style={styles.headerText}>Career Foundation</Text>
      </View>
      <View style={styles.header}>
        <Topmenu />
      </View>

      <View style={styles.footer}>
     
        <FlatList
          data={getData.data}
          keyExtractor={(item) => item.id}
          removeClippedSubviews
          initialNumToRender={4}
          nestedScrollEnabled
          scrollEnabled={true}
          renderItem={({item}) => (
            <View style={[styles.card, styles.elevation]}>
              <View style={[styles.image]}>
                <Image
               
                  source={{uri: `${IMG_URL + item.image}`}}
                  style={styles.image}
                  resizeMode="cover"
                />
                <Text style={styles.cardText}>
                  {item.title.replace(regex, '')}
                </Text>
              </View>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <BottomNavigation />
    </View>
  );
};

export default HomeScreen;
