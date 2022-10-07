import COLORS from '../../config/colors';
import {Dimensions, StyleSheet, Platform} from 'react-native';
const {height,width} = Dimensions.get('screen');
const height_logo = height * 0.1;

const styles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingLeft: 0,
    color: 'black',
  },
  inputAndroid: {
    fontSize: 16,
    paddingLeft: 0,
    color: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: height_logo,
    width: height_logo,
  },

  text: {
    paddingTop: 20,
    color: '#fff',
    fontSize: 25,
  },

  header: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 3,
    minWidth:'100%'
  
    
  },
  input: {
    borderColor: COLORS.primary,
    borderRadius: 2,
  },
  title: {
    color: '#05375a',
    fontSize: 24,
    fontWeight: 'bolder',
    marginTop: -20,
  },

  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    marginTop: 15,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    flexDirection: 'row',
  },
  textSingIn: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.light,
    paddingLeft: 15,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#000',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
    paddingBottom: 10,
    marginTop: -30,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  scrollview: {
    marginHorizontal: 5,
  },
  view: {
    padding: 10,
  },
  card: {
    flex: 1,
   margin:5,
    width: Dimensions.get('window').width /1.03,
    height: Dimensions.get('window').height / 2.5,
    borderRadius: 10,
    backgroundColor:COLORS.white,
    
  },
  cardText: {
    fontSize: 18,
    fontWeight:'bold',
    color: 'red',
    marginVertical:20,
    marginHorizontal:10,
    justifyContent:'flex-start',

  },
  image:{
   paddingHorizontal:10,
   paddingVertical:15,
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height / 3.5,
    borderRadius:5 ,
    resizeMode: 'contain' 
  },
  elevation: {  
    shadowColor: '#52006A',  
    elevation: 10,  
  },  
  headerBanner: {
    flex: 0.4,
    width:width,
    backgroundColor:COLORS.bgColor,
 
  },
  headerText: {
    flex:2,
    color:COLORS.white,
    marginVertical:20,
    paddingHorizontal:10,
    fontSize:20,
    fontWeight:'bold'
 
  },
  descriptionText:{
   
    fontSize:14,
    color:COLORS.dark
    
  },
});
export default styles;
