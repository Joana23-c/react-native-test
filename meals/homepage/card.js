import {Text,View, StyleSheet} from 'react-native';
import { Image } from 'react-native';


export default function Card(prop){
    return(
        <View style={styles.container}>
           <Image source={prop.image} 
            style={{ width: 190, height: 100, borderRadius : 10,}} />

            <Text style={[styles.txt, { fontWeight: 'bold' }]}> {prop.title}</Text>
            <View style = {{ width: 200,marginLeft : 9,}}>
                <Text style = {styles.txt}> {prop.desc}</Text>
            </View>
            <Text style = {
                {
                    fontFamily : 'Abhaya Libre Medium',
                    color : '#7b7b7b',
                }
            }>{prop.time} minutes</Text>

        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginLeft: 30,
    width: 230,
    height: 250,

    boxShadow: '0px 2px 6px rgba(0,0,0,0.6)',
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',

      // iOS
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
       // Android
        elevation: 5,
    },

  txt:{
    marginTop: 6,
    marginBottom: 6,
    fontFamily : 'Abhaya Libre Medium',
   },
});