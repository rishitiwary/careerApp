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
  Alert
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Topmenu} from '../../components/Topmenu';
import styles from './style';
import {BottomNavigation} from '../../components/BottomNavigation';


const Subject = ({route}) => {
  let id = route.params.id;
  let type = route.params.type;
  const navigation = useNavigation();
  const handleClick = async (item) => {
    let courseId = item.id;
    let type = item.type;
    let name = item.subname;
  await  navigation.navigate('SubjectCategory', {
      courseId: courseId,
      type: type,
      name: name,
    });
  };
  const handleClick2 = async (item) => {
    let id = item.id;
    let category = item.category;
    let type = item.type;
    let name = item.subname;
  await  navigation.navigate('Videobysubject', {
      id,
      type,
      name,
      category,
    });
  };
  const [getData, setData] = useState([]);
  const [imageLoading, setImageLoading] = useState(true);
  const [activityIndicator, setActivityIndicator] = useState(true);
  const handleFetchData = useMemo(async () => {
    let url = `${BASE_URL}/getSubjectById/${id}`;
    let result = await axios({
      method: 'GET',
      url: url,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    setData(result.data);
  });

  useEffect(() => {
    navigation.setOptions({title: route.params.subject});
    handleFetchData;
    setActivityIndicator(false);
  }, []);

  return (
    <View style={styles.container}>
      {activityIndicator ?
        <ActivityIndicator
          color="#000099"
          size="large"
          style={styles.activityIndicator}
        />
       : ''
      }
      <View style={styles.header}>
        <Topmenu />
      </View>

      <View style={styles.footer}>
        {type == 'new' ? (
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
                    <Text style={styles.cardText}>{item.subname} </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}
            numColumns={2}
          />
        ) : (
          <FlatList
            data={getData.data}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => handleClick2(item)}>
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
                      flex: 10,
                      justifyContent: 'space-evenly',
                      alignItems: 'flex-start',
                      paddingTop: 100,
                    }}>
                    <Text style={styles.cardText}>{item.subname} </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}
            numColumns={2}
          />
        )}
      </View>
      <BottomNavigation />
    </View>
  );
};

export default Subject;
