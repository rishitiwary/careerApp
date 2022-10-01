import React, {useState, useEffect, useCallback, useRef} from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';

import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  useWindowDimensions,
  Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './style';

const Description = ({route}) => {
  const navigation = useNavigation();
  const regex = /(&nbsp|amp|quot|lt|gt|;|<([^>]+)>)/gi;
  let video = route.params.video;
  let description = route.params.description;
  const [activityIndicator, setActivityIndicator] = useState(true);
  const playerRef = useRef(null);
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  const [playing, setPlaying] = useState(false);
  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);
  const fullscreen=()=>{
    setPlaying(false);
    navigation.navigate('FullScreen',{video:video});
  }
  useEffect(() => {
    navigation.setOptions({title: 'Description'});
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
          play={playing}
          videoId={video}
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
      <View style={{flex: 1.5, justifyContent: 'space-between',marginTop:10}}>
        <Button title="Full Screen" color="#000099" borderRadius="2" onPress={()=>fullscreen()}/>
       <View style={{flex:1,alignItems:'center',justifyContent:'flex-start',paddingTop:10}}>
       <Text style={{color: 'black'}}>{description.replace(regex, '')}</Text>
       </View>
       
      </View>
    </View>
  );
};

export default Description;