import React, {} from 'react';
import {View, Text, ScrollView} from 'react-native';
 
import styles from './style';
 
import * as Animatable from 'react-native-animatable';
import {BottomNavigation} from '../../components/BottomNavigation';
import {Topmenu} from '../../components/Topmenu';

const ContactUs = () => {
 
  return (
    <View style={styles.container}>
    <View style={styles.headerBanner}><Text style={styles.headerText}>Contact Us</Text></View>
    <View style={styles.header}>
      <Topmenu />
    </View>
    <Animatable.View style={[styles.footer,styles.elevation]} animation="fadeInUpBig">
    <ScrollView>
      <Text style={{color:'black',fontSize:20,paddingTop:10,fontWeight:'bold'}}>
      CONTACT US
      </Text>
      <Text style={styles.text}>
      If you have any query then contact us
</Text>
<Text style={styles.text}>
Address : Itkhori Jharkhand
</Text>
<Text style={styles.text}>
Email : inventorprakash1@gmail.com
</Text>
<Text style={styles.text}>
Mobile : +917070802888
</Text>

      
    <Text style={styles.title}>
    We are the most excellent institute for students preparing for competitive exams online. Today many students are not able to reach educational institutions or for those who are able to reach careerfoundation.org.in is the best platform.We provide mock test series, current affairs pdf, video lectures is similar to Ram Baan which ensures his success in examinations. Our institution has different experts in all subjects who have been in various institutions, colleges for the past many years. , Offering their services in universities.
    </Text>
    </ScrollView>
      </Animatable.View>
      <BottomNavigation />
    </View>
  );
};
export default ContactUs;
