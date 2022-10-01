import COLORS from '../../config/colors';
import {Dimensions, StyleSheet, Platform} from 'react-native';
const {height} = Dimensions.get('screen');
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
    color: COLORS.dark,    
  },

  header: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 3,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderColor: COLORS.primary,
    borderRadius: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bolder',
    marginTop: -20,
  color:COLORS.dark
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
 marginHorizontal:10,
 marginVertical:10,
    padding: 10,
    width: Dimensions.get('window').width/1.1,
    height: Dimensions.get('window').height / 4,
    borderRadius: 10,
    backgroundColor:COLORS.white,
    
    
  },
  cardText: {
    fontSize: 17,
    fontWeight:'bold',
    color: 'black',
    marginTop:25,
    justifyContent:'flex-start',

  },
  image:{
    
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').height / 4.6,
   
  },
  elevation: {  
    shadowColor: '#52006A',  
    elevation: 4,  
  },  
  row:{
    flex:1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent:'space-between'
  },
  
  description2:{
    flex:1,
    alignItems:'center',
    flexDirection: "row",
    flexWrap: "wrap",
   marginLeft:Dimensions.get('window').width / 2.9,
   marginTop:30
  },
  description3:{
    flex:1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent:'space-between',
    marginLeft:Dimensions.get('window').width / 2.9,
  },
  title:{
    fontSize:15,
    fontWeight:"bold",
    paddingHorizontal:5
    
  },
descriptionText:{
  paddingVertical:5,
  paddingHorizontal:5,
  fontSize:12,
  color:COLORS.dark
  
},
strike:{
  textDecorationLine: 'line-through', 
  textDecorationStyle: 'solid',
 
 
},
buynow:{
  flex:1,
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:COLORS.bgColor,
  width:Dimensions.get('window').width / 4,
  borderRadius:8,
 
},
demo:{
  flex:1,
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:COLORS.primary,
  width:Dimensions.get('window').width / 4,
  borderRadius:6,
 
},
courseTile:{
 marginVertical:5,
  justifyContent:'space-evenly',
  alignContent:'flex-start'
},
activityIndicator: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  height: 80
}

});
export default styles;
