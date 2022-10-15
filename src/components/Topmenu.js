import React from 'react';
import styles from '../config/style';
import {ScrollView,View,Text,TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export  const Topmenu=()=>{
  const navigation = useNavigation();
    return(
<ScrollView
        style={styles.scrollview}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}      
      >
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
        <View style={styles.view}>
          <Text style={styles.text1}>Home</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Category')}>
        <View style={styles.view}>
          <Text style={styles.text1}>All Course</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('FreeVideos')}>
        <View style={styles.view}>
          <Text style={styles.text1}>Free Videos</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Test Series')}>
        <View style={styles.view}>
          <Text style={styles.text1}>Test Series</Text>
        </View>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={()=>navigation.navigate('Books')}> 
        <View style={styles.view}>
          <Text style={styles.text1}>Books</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Jobs')}>
        <View style={styles.view}>
          <Text style={styles.text1}>Jobs & Vancacies</Text>
        </View>
        </TouchableOpacity> */}
      </ScrollView>
    )

}
 