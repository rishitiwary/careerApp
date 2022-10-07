import React, {useState, useEffect, useMemo} from 'react';
import axios from 'axios';
import Book from '../../../assets/images/book.jpeg';
import {BASE_URL, IMG_URL} from '../../config/config';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Platform,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './style';
import { DownloadPdf } from '../../components/DownloadPdf';


const Videobysubject = ({route}) => {
 
  const navigation = useNavigation();
  const regex = /(&nbsp|amp|quot|lt|gt|;|<([^>]+)>)/gi;
  let id = route.params.id;
  let category = route.params.category;
  let type = route.params.type;
  const [getData, setData] = useState([]);
  const [activityIndicator, setActivityIndicator] = useState(true);
  let url =
    category == undefined
      ? `${BASE_URL}/videos/${id}`
      : `${BASE_URL}/getSubjectVideo/${category}/${id}`;
  const handleFetchData = useMemo(async () => {
    let result = await axios({
      method: 'GET',
      url: url,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    setData(result.data);
  });
  const handleClick = async (item) => {
    let video = item.videos;
    let description = item.description;

   await navigation.navigate('Description', {
      video,
      description,
    });
  };
  const ViewPdf=(item)=>{
 navigation.navigate('ViewPdf',{
   pdfs:item.pdfs
 })
  }
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
      <FlatList
        data={getData.data}
        renderItem={({item}) => (
          <View style={[styles.card, styles.elevation]}>
         
            <TouchableOpacity onPress={() => handleClick(item)}>
              <View style={styles.image}>

              {item.thumbnail.length<=0?<Image
                  key={item.id}
                  source={Book}
                  style={styles.image}/>:<Image
                  key={item.id}
                    source={{uri: `${IMG_URL + item.thumbnail}`}}
                    style={styles.image}
                  />}
                
              </View>
            </TouchableOpacity>
            <View style={{paddingVertical: 10}}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.descriptionText}>
                {item.description.replace(regex, '')}
              </Text>


            
            </View>
            <View style={styles.row}>
    <TouchableOpacity onPress={()=>ViewPdf(item)}>
      <View style={styles.buynow}>
        <Text style={{color: 'white'}}>View PDF</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>DownloadPdf(item.pdfs)}>
      <View style={styles.demo}>
        <Text style={{color: 'white'}}>Download PDF</Text>
      </View>
    </TouchableOpacity>
  </View>
            
          </View>
        )}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Videobysubject;
