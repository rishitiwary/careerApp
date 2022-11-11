import React, {useState, useEffect,useMemo} from 'react';
import axios from 'axios';
import {BASE_URL, IMG_URL} from '../../config/config';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {AuthContext} from '../../components/AuthContext';
import {useNavigation} from '@react-navigation/native';
import {Topmenu} from '../../components/Topmenu';
import styles from './style';
import {BottomNavigation} from '../../components/BottomNavigation';
 
const MyPurchase = () => {
  const {userInfo}=React.useContext(AuthContext);
  const navigation = useNavigation();
  const regex = /(&nbsp|amp|quot|lt|gt|;|<([^>]+)>)/gi;
  const [getData, setData] = useState([]);
  const [imageLoading, setImageLoading] = useState(true);
  let id=JSON.parse(userInfo).user_detail.id;
  const handleFetchData = useMemo(async () => {
    let result = await axios({
      method: 'GET',
      url: `${BASE_URL}/getMypurchase/${id}`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
     
    });
   
    setData(result.data);
   
  });
  const handleClick=async (item)=>{
    let type =item.type;
    let id =item.id;
    let subject=item.sub_name;
    let flag=0;
    await navigation.navigate('Subject',{
       type,id,subject,flag
     });
  }
  const description=(item)=>{
    let video =item.video;
    let description =item.description;
     navigation.navigate('Description',{
       video,description
     });
  }
  useEffect(() => {
    navigation.setOptions({'title':'My Purchased'});
    handleFetchData;
  }, []);
  return (
    <View style={styles.container}>
       
      <View style={styles.headerBanner}><Text style={styles.headerText}>My Purchased</Text></View>
      <View style={styles.header}>
        <Topmenu />
      </View>

      <View style={styles.footer}>
      <FlatList
          data={getData.data}
          renderItem={({item}) => (
           
              <View style={[styles.card, styles.elevation]}>
                <View style={styles.row}>
                  <View style={styles.image}>
                  {imageLoading?<Image
                        key={item.id}
                        source={require('../../../assets/images/book.jpeg')}
                        style={styles.image}
                        onLoad={()=>setImageLoading(false)}
                      />:<Image
                      key={item.id}
                      source={{uri: `${IMG_URL + item.images}`}}
                      style={styles.image}
                    />}
                  
                  </View>
                  <View style={styles.row}>
                    <Text style={[styles.title, styles.text]}>
                      {item.sub_name}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                    }}>
                    <Text style={[styles.title, styles.strike, styles.text]}>
                      {item.mrp}
                    </Text>
                    <Text style={[styles.title, styles.text]}>
                      {item.price} ₹
                    </Text>
                  </View>
                </View>
                <View style={styles.description2}>
                  <Text style={styles.descriptionText}>
                    {item.description.replace(regex, '')}
                  </Text>
                </View>
                <View style={styles.description3}>
                  <TouchableOpacity onPress={() => handleClick(item)}>
                    <View style={styles.buynow}>
                      <Text style={{color: 'white'}}>Subjects</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => description(item)}>
                    <View style={styles.demo}>
                      <Text style={{color: 'white'}}>Detail</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            
          )}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <BottomNavigation />
    </View>
  );
};

export default MyPurchase;
