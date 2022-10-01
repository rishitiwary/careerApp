import React,{useState,useEffect} from 'react';
import {View, Text,FlatList,Image,TouchableOpacity} from 'react-native';
import axios from 'axios';
import {BASE_URL, IMG_URL} from '../../config/config';
import {useNavigation} from '@react-navigation/native';
import {Topmenu} from '../../components/Topmenu';
import styles from './style';
import {BottomNavigation} from '../../components/BottomNavigation';

const HomeScreen = () => {
  const [getData, setData] = useState([]);
  const regex = /(&nbsp|amp|quot|lt|gt|;|<([^>]+)>)/gi;
  const navigation = useNavigation();
  const handleFetchData = async () => {
    let result = await axios({
      method: 'GET',
      url: `${BASE_URL}/homepage/`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  
    setData(result.data);
  };
  useEffect(() => {
    handleFetchData();
  }, []);
  return (
    <View style={styles.container}>
      {console.log(getData)}
      <View style={styles.headerBanner}><Text style={styles.headerText}>Career Foundation</Text></View>
      <View style={styles.header}>
        <Topmenu />
      </View>

      <View style={styles.footer}>
      <FlatList
          data={getData.data}
          renderItem={({item}) => (
              <View style={[styles.card, styles.elevation]}>
                  <View style={[styles.image]}>
                    <Image
                      source={{uri: `${IMG_URL + item.image}`}}
                      style={styles.image}
                    />
                    <Text style={styles.cardText}>
                    {item.description.replace(regex, '')}
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
