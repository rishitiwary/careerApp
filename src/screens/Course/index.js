import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BASE_URL, IMG_URL} from '../../config/config';
import {AuthContext} from '../../components/AuthContext';
import {View, Text, FlatList, TouchableOpacity, Image,ActivityIndicator,ToastAndroid} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import RazorpayCheckout from 'react-native-razorpay';

const buyNow=([{purchaseVal,item}])=>{
  
  let options = {
    description: item.description,
    image: 'https://www.careerfoundation.org.in/assets/images/logo/logo.png',
    currency: 'INR',
    key: 'rzp_live_QkaMpUNBYhZzQU',
    amount: item.price*100,
    name: item.sub_name,
    // order_id: 'order_DslnoIgkIDL8Zt',//Replace this with an order_id created using Orders API.
    prefill: {
      email: purchaseVal.email,
      contact: purchaseVal.mobile,
      name: purchaseVal.name
    },
    theme: {color: '#000099'}
  }
  RazorpayCheckout.open(options).then((data) => {
    let courseInfo={
      amount:item.price,
      purpose:item.sub_name,
      courseid:item.id,
      pay_status:'Credit',
      razorpay_payment_id:data.razorpay_payment_id
    }
   let paySuccessVal= Object.assign(purchaseVal,courseInfo);
     handlePayment(paySuccessVal);

  }).catch((error) => {
    // handle failure
    console.log(`Error: ${error.code} | ${error.description}`);
  });
}
const handlePayment=async (paySuccessVal)=>{
  
  await axios({
    method: 'POST',
    url: `${BASE_URL}/razorpay`,
    data: paySuccessVal,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
    .then(function (response) {
      let result = JSON.stringify(response.data.message);
      alert(`Payment Successful: Your TransactionId - ${paySuccessVal.razorpay_payment_id}`);
     
    })
    .catch(function (error) {
     // console.log('error', error.response.message);
      alert(`Sorry some error occured.Please try again.${error.response.message}`);
    });
  }
const Course = ({route}) => {

const {userInfo}=React.useContext(AuthContext);
let purchaseVal={
  name:JSON.parse(userInfo).user_detail.username,
  email:JSON.parse(userInfo).user_detail.email,
  mobile:JSON.parse(userInfo).user_detail.phone,
  uid:JSON.parse(userInfo).user_detail.id
}
  const navigation = useNavigation();
  
  let flag=route.params.flag;
  

  const regex = /(&nbsp|amp|quot|lt|gt|;|<([^>]+)>)/gi;
  let courseId = route.params.courseId;
  const [getData, setData] = useState([]);
  const [imageLoading, setImageLoading] = useState(true);
  const [activityIndicator,setActivityIndicator]=useState(true);
  const handleFetchData = async () => {
    let result = await axios({
      method: 'GET',
      url: `${BASE_URL}/courses/${courseId}`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    setData(result.data);
  };
const handleClick=(item)=>{
  let video =item.video;
  let description =item.description;
   navigation.navigate('Description',{
     video,description
   });
}

const handleClick2=async (item)=>{
  let type =item.type;
  let id =item.id;
  let subject=item.sub_name;
  await navigation.navigate('Subject',{
     type,id,subject,flag
   });
}
  useEffect(() => {
    navigation.setOptions({title: route.params.courseName});
    handleFetchData();
    setActivityIndicator(false);
  }, []);

  return (
    <View style={styles.container}>
     {activityIndicator?<ActivityIndicator
        color="#000099"
        size="large"
        style={styles.activityIndicator}
      />:''} 

      <View style={styles.footer}>
        <FlatList
          data={getData.data}
          renderItem={({item}) => (
           
              <View style={[styles.card, styles.elevation]}>
              
                <View style={styles.row}>
                <TouchableOpacity onPress={() => handleClick2(item)}>
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
                  </TouchableOpacity>
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
                  <TouchableOpacity onPress={()=>buyNow([{purchaseVal,item}])}>
                    <View style={styles.buynow}>
                      <Text style={{color: 'white'}}>Buy Now</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleClick(item)}>
                    <View style={styles.demo}>
                      <Text style={{color: 'white'}}>See Demo</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            
          )}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      
    </View>
  );
};

export default Course;
