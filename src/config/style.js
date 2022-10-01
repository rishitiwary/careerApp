import COLORS from './colors';
import {Dimensions} from 'react-native';


export default {
  logo: {},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.bgColor,
  },
  logo: {
    height: 150,
    width: 150,
  },
  text: {
    paddingTop: 20,
    color: '#fff',
    fontSize: 28,
  },
  scrollview: {
    marginHorizontal: 5,
  },
  view: {
    padding: 5,
    borderColor: COLORS.bgColor,
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 10,
    marginHorizontal: 3,
    backgroundColor: COLORS.bgColorlight,
  },
  text1: {
    color: COLORS.light,
    fontSize: 14,
  },
  bottomNavigation: {
    flexWrap: "wrap",
    flexDirection: "row",
    height: Dimensions.get('window').height / 12,
    width: '100%',
    backgroundColor: COLORS.bgColor,
    color: COLORS.white,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    
    
  },
  bottomText: {
    color: COLORS.white,
  },
  bottomIcon:{
    
    alignItems: 'center',
    justifyContent:'center',
  
   
  }
};
