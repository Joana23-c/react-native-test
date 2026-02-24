import { View,Text,TextInput, Button, Alert, Platform, StyleSheet,TouchableOpacity,Image} from 'react-native';

export default function Instructions(props){
    return(
        <View>
            <Text style={styles.title}>Instructions</Text>
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