import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BASE_URL, IMG_URL} from '../../config/config';
import {View, Text, FlatList, TouchableOpacity, Image,ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Topmenu} from '../../components/Topmenu';
import styles from './style';
import {BottomNavigation} from '../../components/BottomNavigation';
 
const Category = () => {
  const navigation = useNavigation();
  const handleClick = item => {
    let courseId = item.id;
    let courseName = item.course_name;
    navigation.navigate('Course',{courseId:courseId,courseName:courseName});
  };
  const [getData, setData] = useState([]);
  const [activityIndicator,setActivityIndicator]=useState(true);
  const handleFetchData = async () => {
    let result = await axios({
      method: 'GET',
      url: `${BASE_URL}/categories`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    setData(result.data);
  };

  useEffect(() => {
    navigation.setOptions({'title':'All Course'});
    handleFetchData();
    setActivityIndicator(false);
  }, []);

  return (
    <View style={styles.container}>
         {activityIndicator?<ActivityIndicator
        color="#000099"
        size="large"
        style={styles.activityIndicator}
      />:''} 
      <View style={styles.header}>
        <Topmenu />
      </View>

      <View style={styles.footer}>
        <FlatList
          data={getData.data}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => handleClick(item)}>
              <View style={[styles.card, styles.elevation]}>
                <View
                  style={{
                    flex: 2,
                    justifyContent: 'space-evenly',
                    paddingBottom: 50,
                    paddingHorizontal:10
                  }}>
                  <Image
                    source={{uri: `${IMG_URL + item.images}`}}
                    style={styles.image}
                  />
                </View>
                <View
                  style={{
                    flex: 25,
                    justifyContent: 'center',
                    alignItems:'flex-start',
                    paddingTop: 100,
                  }}>
                  <Text style={styles.cardText}>{item.course_name}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </View>
      <BottomNavigation />
    </View>
  );
};

export default Category;
