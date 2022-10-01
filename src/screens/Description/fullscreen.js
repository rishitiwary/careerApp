import React, {useState, useEffect, useCallback, useRef} from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';

import {
  View,
  ActivityIndicator,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './style';

const Fullscreen = ({route}) => {
  console.log(route);
  const navigation = useNavigation();
  let video = route.params.video;
 
  const [activityIndicator, setActivityIndicator] = useState(true);
  const playerRef = useRef(null);
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  const [playing, setPlaying] = useState(false);
  // const onStateChange = useCallback(state => {
  //   if (state === 'ended') {
  //     setPlaying(false);
  //     Alert.alert('video has finished playing!');
  //   }
  // }, []);

  // const togglePlaying = useCallback(() => {
  //   setPlaying(prev => !prev);
  // }, []);

  useEffect(() => {
    
    setActivityIndicator(false);
  }, []);

  return (
    <View style={styles.fullscreen}>
      {activityIndicator ? (
        <ActivityIndicator
          color="#000099"
          size="large"
          style={styles.activityIndicator}
        />
      ) : (
        ''
      )}

      <View style={styles.fullscreenVideo}>
        <YoutubePlayer
          ref={playerRef}
          height={height}
          width={width}
          play={playing}
          videoId={video}
          initialPlayerParams={{
            modestbranding: 'false',
            preventFullScreen: 'true',
            frameborder: 'false',
          }}
        />

        <TouchableOpacity style={styles.hideSharefullScreen} />
      </View>
     
    </View>
  );
};

export default Fullscreen;
