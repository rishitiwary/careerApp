import React, {useState, useEffect, useCallback, useRef} from 'react';
// import YoutubePlayer from 'react-native-youtube-iframe';

import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './style';
import WebView from 'react-native-webview-fullscreen';

const Description = ({route}) => {
  const navigation = useNavigation();
  const regex = /(&nbsp|amp|quot|lt|gt|;|<([^>]+)>)/gi;
  let video = route.params.video;
  let description = route.params.description;
  const [activityIndicator, setActivityIndicator] = useState(true);

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
        <WebView
          useWebKit
          allowsFullscreenVideo={false}
          allowsInlineMediaPlayback={true}
          mediaPlaybackRequiresUserAction
          javaScriptEnabled={true}
          scrollEnabled={false}
          resizeMode={'cover'}
          source={{
            uri: `https://www.youtube.com/embed/${video}?modestbranding=1`,
          }}
        />

        {/* <YoutubePlayer
            ref={playerRef}
            height={height}
            width={width}
            play={playing}
            videoId={video}
            showinfo={false}
            rel={false}
            initialPlayerParams={{
              modestbranding: 'false',
               preventFullScreen: 'true',
             rel:'true'
               
            }}
            
           
          /> */}

        <TouchableOpacity style={styles.hideShare} />
       
      </View>
    
      <View
        style={{
          flex: 2,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{color: 'black'}}>{description.replace(regex, '')}</Text>
      </View>
    </View>
  );
};

export default Description;
