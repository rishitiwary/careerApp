import React from 'react';
import styles from '../config/style';
import {View,Text,TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import COLORS from '../config/colors';
import {useNavigation} from '@react-navigation/native';
export const BottomNavigation=()=>{
    const navigation = useNavigation();
    return(
<View style={styles.bottomNavigation}>
<TouchableOpacity onPress={()=>navigation.navigate('Home')}>
<View style={styles.bottomIcon}>
<FontAwesome name="home" color={COLORS.white} size={26} />
<Text style={styles.bottomText}>Home</Text>
</View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>navigation.navigate('My Purchased')}>
<View style={styles.bottomIcon}>
<FontAwesome name="cart-arrow-down" color={COLORS.white} size={26} />
<Text style={styles.bottomText}>My Purchased</Text>
</View>
</TouchableOpacity>

{/* <TouchableOpacity onPress={()=>navigation.navigate('Chat')}>
<View style={styles.bottomIcon}>
<FontAwesome name="comments" color={COLORS.white} size={26} />
<Text style={styles.bottomText}>Chat</Text>
</View>
</TouchableOpacity> */}

<TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
<View style={styles.bottomIcon}>
<FontAwesome name="bars" color={COLORS.white} size={26} />
<Text style={styles.bottomText}>Menu</Text>
</View>
</TouchableOpacity>
        
        </View>
    )
    
}