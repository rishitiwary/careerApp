
import React from 'react';
// Import React native Components
import {
  Platform,
  PermissionsAndroid,
  ToastAndroid
} from 'react-native';

// Import RNFetchBlob for the file download
import RNFetchBlob from 'rn-fetch-blob';
import { IMG_URL } from '../config/config';
 
const showToast = () => {
  ToastAndroid.show("Your pdf is start to download go to notification !", ToastAndroid.SHORT);
};

  export const DownloadPdf = async (pdfs) => {
    showToast();
    let fileUrl = IMG_URL+pdfs;
alert(fileUrl);
   
    if (Platform.OS === 'ios') {
     downloadFile(fileUrl);
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message:
              'Application needs access to your storage to download File',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Start downloading
       await downloadFile(fileUrl);
       alert('granted');
          console.log('Storage Permission Granted.');
        } else {
          // If permission denied then show alert
          Alert.alert('Error','Storage Permission Not Granted');
        }
      } catch (err) {
        alert(err);
        // To handle permission related exception
        console.log("++++"+err);
      }
    }
  };

     const  downloadFile = async (fileUrl) => {
    // File URL which we want to download
    let FILE_URL = fileUrl;  
    alert(FILE_URL);  
    // Function to get extention of the file url
    let file_ext = getFileExtention(FILE_URL);
   alert(file_ext);
    file_ext = '.' + file_ext[0];
   
    // config: To get response by passing the downloading related options
    // fs: Root directory path to download
    const { config, fs } = RNFetchBlob;
    let RootDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        path:
          RootDir+
          '/Career ' + fileUrl,
        description: 'downloading file...',
        notification: true,
        // useDownloadManager works with Android only
        useDownloadManager: true,   
      },
    };
  await  config(options)
      .fetch('GET', FILE_URL)
      .then(res => {
        alert('success');
        // Alert after successful downloading
        // console.log('res -> ', JSON.stringify(res));
        alert('File Downloaded Successfully.');
      })
      .catch((err) => {
        alert('download error, err is', JSON.stringify(err));
    });
  };

  const getFileExtention = fileUrl => {
    // To get the file extension
    return /[.]/.exec(fileUrl) ?
             /[^.]+$/.exec(fileUrl) : undefined;
  };
 
 

 
 