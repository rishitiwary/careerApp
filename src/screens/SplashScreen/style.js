import COLORS from '../../config/colors';
import {Dimensions} from 'react-native';
const {height,width} = Dimensions.get('screen');
export default {
    container:{
        
        flex:1,
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor:COLORS.bgColor,
        
    },
    logo:{
        flex:1,
        height:height,
        width:width,
        resizeMode: 'stretch'
    },
   
}