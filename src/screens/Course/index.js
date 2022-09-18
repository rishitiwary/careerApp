import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BASE_URL, IMG_URL} from '../../config/config';
import {View, Text, FlatList, TouchableOpacity, Image,ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Topmenu} from '../../components/Topmenu';
import styles from './style';

 
 

const Course = ({route}) => {
  const navigation = useNavigation();
  const regex = /(&nbsp|amp|quot|lt|gt|;|<([^>]+)>)/gi;
  let courseId = route.params.courseId;
  const [getData, setData] = useState([]);
  const [activityIndicator,setActivityIndicator]=useState(true);
  const handleFetchData = async () => {
    let result = await axios({
      method: 'GET',
      url: `${BASE_URL}/courses/${courseId}`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    setData(result.data);
  };

  useEffect(() => {
    navigation.setOptions({title: route.params.courseName});
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

      <View style={styles.footer}>
        <FlatList
          data={getData.data}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => handleClick(item)}>
              <View style={[styles.card, styles.elevation]}>
                <View style={styles.row}>
                  <View style={styles.image}>
                    <Image
                      source={{uri: `${IMG_URL + item.images}`}}
                      style={styles.image}
                    />
                  </View>
                  <View style={styles.row}>
                    <Text style={[styles.title, styles.text]}>
                      {item.sub_name}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                    }}>
                    <Text style={[styles.title, styles.strike, styles.text]}>
                      {item.mrp}
                    </Text>
                    <Text style={[styles.title, styles.text]}>
                      {item.price} ₹
                    </Text>
                  </View>
                </View>
                <View style={styles.description2}>
                  <Text style={styles.descriptionText}>
                    {item.description.replace(regex, '')}
                  </Text>
                </View>
                <View style={styles.description3}>
                  <TouchableOpacity>
                    <View style={styles.buynow}>
                      <Text style={{color: 'white'}}>Buy Now</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.demo}>
                      <Text style={{color: 'white'}}>See Demo</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Course;
