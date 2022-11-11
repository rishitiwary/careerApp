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
import styles from './style';

const SubjectSubCategory = ({route}) => {
  let flag=route.params.flag;

  const navigation = useNavigation();
  const regex = /(&nbsp|amp|quot|lt|gt|;|<([^>]+)>)/gi;
  let id = route.params.id;
  let type = route.params.type;
  
  const [imageLoading, setImageLoading] = useState(true);
  const [getData, setData] = useState([]);
  const [activityIndicator, setActivityIndicator] = useState(true);
  const handleFetchData = useMemo(async () => {
    let result = await axios({
      method: 'GET',
      url: `${BASE_URL}/subjectfolder/${id}`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    setData(result.data);
  });
  const handleClick = async(item) => {
    let id = item.id;
    let type = item.type;
    let name = item.video_categories;
   await navigation.navigate('Videobysubject', {
      id,
      type,
      name,
      flag
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
            <TouchableOpacity onPress={() => handleClick(item)}>
              <View style={[styles.card, styles.elevation]}>
                <View
                  style={{
                    flex: 2,
                    justifyContent: 'space-evenly',
                    paddingBottom: 50,
                    paddingHorizontal: 10,
                  }}>
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
                <View
                  style={{
                    flex: 20,
                    justifyContent: 'space-evenly',
                    alignItems: 'flex-start',
                    paddingLeft: 10,
                    paddingTop: 100,
                  }}>
                  <Text style={styles.cardText}>{item.video_categories}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default SubjectSubCategory;
