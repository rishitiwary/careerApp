import React, {useState, useEffect, useRef} from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';

import {
  View,
  ActivityIndicator,
  TouchableOpacity,
  useWindowDimensions,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './style';

const Fullscreen = ({route}) => {
  let video = route.params.video;

  const [activityIndicator, setActivityIndicator] = useState(true);
  const playerRef = useRef(null);
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    setActivityIndicator(false);
  }, []);

  return (
    <View style={styles.fullscreen}>
      <StatusBar hidden={true} />
   

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
        <TouchableOpacity style={styles.hideSharefullScreenleft} />
      </View>
    </View>
  );
};

export default Fullscreen;
