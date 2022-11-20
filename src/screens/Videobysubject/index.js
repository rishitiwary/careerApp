import React, {useState, useEffect, useMemo} from 'react';
import axios from 'axios';
import {BASE_URL, IMG_URL} from '../../config/config';
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
import {DownloadPdf} from '../../components/DownloadPdf';
// import ImagePlaceholder from 'react-native-img-placeholder';

const Videobysubject = ({route}) => {
  let flag = route.params.flag;

  const navigation = useNavigation();
  const regex = /(&nbsp|amp|quot|lt|gt|;|<([^>]+)>)/gi;
  const [imageLoading, setImageLoading] = useState(true);
  const [getData, setData] = useState([]);
  const [flags, setFlag] = useState(flag);

  const [activityIndicator, setActivityIndicator] = useState(true);
  let url;
  let pageName;

  if (route.name == 'FreeVideos') {
    url = `${BASE_URL}/getFreeVideos`;
    pageName = 'Free Videos';
  } else {
    let id = route.params.id;
    let category = route.params.category;
    let type = route.params.type;
    url =
      category == undefined
        ? `${BASE_URL}/videos/${id}`
        : `${BASE_URL}/getSubjectVideo/${category}/${id}`;
    pageName = route.params.name;
  }

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
  const handleClick = async item => {
    let video = item.videos;
    let description = item.description;
    await navigation.navigate('Description', {
      video,
      description,
      flag,
    });
  };
  const ViewPdf = item => {
    navigation.navigate('ViewPdf', {
      pdfs: item.pdfs,
    });
  };
  useEffect(() => {
    navigation.setOptions({title: pageName});
    setFlag(flag);
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
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View
            style={[
              styles.card,
              styles.elevation,
              flag == 1 ? styles.opacity : '',
            ]}>
            <TouchableOpacity
              onPress={() => handleClick(item)}
              disabled={flags == 1 ? true : false}>
              <View style={styles.image}>
                {imageLoading ? (
                  <Image
                    key={item.id}
                    source={require('../../../assets/images/placeholder.jpeg')}
                    style={styles.image}
                    onLoad={() => setImageLoading(false)}
                  />
                ) : (
                  <Image
                    key={item.id}
                    source={{uri: `${IMG_URL + item.thumbnail}`}}
                    style={styles.image}
                  />
                )}
              </View>
            </TouchableOpacity>
            <View
              style={{
                minHeight: 40,
                maxHeight: 40,
                paddingHorizontal: 20,
                marginTop: 15,
              }}>
              <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => ViewPdf(item)}
                disabled={flags == 1 ? true : false}>
                <View style={styles.buynow}>
                  <Text style={{color: 'white'}}>View PDF</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => DownloadPdf(item.pdfs)}
                disabled={flags == 1 ? true : false}>
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
