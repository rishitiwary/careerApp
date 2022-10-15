import React, {useState, useEffect, useCallback, useRef} from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import axios from 'axios';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  useWindowDimensions,
  Button,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BASE_URL, IMG_URL} from '../../config/config';
import styles from './style';

const Live = ({route}) => {
  const navigation = useNavigation();
  const [getData, setData] = useState([]);
  const [title, setTitle] = useState('Live Streaming');
  const [activityIndicator, setActivityIndicator] = useState(true);
  const playerRef = useRef(null);
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  const handleFetchData = async () => {
    let result = await axios({
      method: 'GET',
      url: `${BASE_URL}/livestream`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    setData(result.data);
  };
  let datas = getData.data !== undefined ? getData.data : 'null';
  let videoId;
  if (datas != 'null') {
    videoId = datas;
    for (let i of datas) {
      videoId = i.videos;
    }
  }
  useEffect(() => {
    navigation.setOptions({title: title});
    handleFetchData();
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

      <View style={styles.row}>
        <YoutubePlayer
          ref={playerRef}
          height={height}
          width={width}
          play={false}
          videoId={videoId}
          modestbranding={true}
          rel={false}
          initialPlayerParams={{
            modestbranding: 'true',
            preventFullScreen: 'true',
            frameborder: 'false',
          }}
        />
        <TouchableOpacity style={styles.hideShare} />
      </View>
      <View
        style={{
          flex: 2,
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '100%',
          marginTop: '16%',
          paddingHorizontal: 10,
        }}>
        <Text style={{color: 'black'}}></Text>
      </View>
    </View>
  );
};

export default Live;
