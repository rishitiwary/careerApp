import React, {useState, useEffect, useMemo} from 'react';
import axios from 'axios';
import {BASE_URL, IMG_URL} from '../../config/config';
import Book from '../../../assets/images/book.jpeg';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Topmenu} from '../../components/Topmenu';
import styles from './style';

const SubjectCategory = ({route}) => {
  const navigation = useNavigation();
  const regex = /(&nbsp|amp|quot|lt|gt|;|<([^>]+)>)/gi;
  let id = route.params.courseId;
  let type = route.params.type;
  const [imageLoading, setImageLoading] = useState(true);
  const [getData, setData] = useState([]);
  const [activityIndicator, setActivityIndicator] = useState(true);
  const handleFetchData = useMemo(async () => {
    let result = await axios({
      method: 'GET',
      url: `${BASE_URL}/subjectbylevel/${id}`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    setData(result.data);
  });
  const handleClick = async(item) => {
    let id = item.id;
    let type = item.type;
    let name = item.subname;
   await navigation.navigate('SubjectSubCategory', {
      id,
      type,
      name,
    });
  };
  useEffect(() => {
    navigation.setOptions({title: route.params.name});
    handleFetchData;
    setActivityIndicator(false);
  }, []);

  return (
    <View style={styles.container}>
      {activityIndicator ? (
        <ActivityIndicator
          color="#000099"
          size="large"
          style={styles.activityIndicator}
        />
      ) : (
        ''
      )}

      <View style={styles.footer}>
        <FlatList
          data={getData.data}
          renderItem={({item}) => (
            <View style={[styles.card, styles.elevation]}>
              <View style={styles.row}>
                <View style={styles.image}>
                {imageLoading?<Image
                        key={item.id}
                        source={require('../../../assets/images/book.jpeg')}
                        style={styles.image}
                        onLoad={()=>setImageLoading(false)}
                      />:<Image
                      key={item.id}
                      source={{uri: `${IMG_URL + item.images}`}}
                      style={styles.image}
                    />}
                  
                </View>
                <View style={styles.row}>
                  <Text style={[styles.title, styles.text]}>
                    {item.subname}
                  
                  </Text>
                </View>
              </View>
              <View style={styles.description2}>
                <Text style={styles.descriptionText}>
                  {item.description.replace(regex, '')}
                </Text>
              </View>
              <View style={styles.description3}>
                <TouchableOpacity onPress={() => handleClick(item)}>
                  <View style={styles.buynow}>
                    <Text style={{color: 'white'}}>View</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default SubjectCategory;
