import { View,Text,TextInput, Button, Alert, Platform, StyleSheet,TouchableOpacity,Image} from 'react-native';

export default function About(props){
    return(
        <View>
            <Text style={styles.title}>About:</Text>
            <Text style={[styles.title, {fontWeight: 'normal',fontSize:15, }]}>{props.info}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    title : {
        fontFamily : 'Abhaya Libre Medium',
        fontSize: 18,
        fontWeight : 'bold',
    }

});