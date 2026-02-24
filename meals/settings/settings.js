import {View, Text, Button , ScrollView , Image, StyleSheet, FlatList,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { UserContext } from '../UserContext.js';
import data from '../data.json';

export default function Settings(){
    const navigation = useNavigation();
    const { username } = useContext(UserContext);
    const handlePressFav = () => {
         navigation.navigate('Fav');
        }
    const handlePressLogOut = () => {
         navigation.navigate('Login');
        }
        const gobacktohome = () => {
         navigation.navigate('Home');
        }
    return(
        <View style={styles.body}>
          <View style={styles.container}>
            <View style={styles.img}>
              <TouchableOpacity onPress={gobacktohome}>
              <Image
                source={require('../images/candy.png')}
                style={{ width: 60, height: 60 }}
              /></TouchableOpacity>
              <Image
                source={require('../images/settings.png')}
                style={{ width: 60, height: 60 }}
              />
            </View>
        
            <View style={styles.textDiv}>
              <Text style={styles.hellotxt}>Hello {username}!</Text>
           </View>

            <View style={{justifyContent : 'center',marginTop:60,}}>
                <Button title="Favourites" color="#6E3089" onPress={handlePressFav}></Button>
                <Button title="LogOut" color="red"  onPress={handlePressLogOut}></Button>
                       </View>
           </View>
        </View>
    )
};
const styles = StyleSheet.create({

  body: {
    flex: 1,
    backgroundColor: 'rgb(118, 118, 222)',
    alignItems: 'center',
    // paddingTop: 30,
  },

  container: {
    flex: 1,
    backgroundColor : 'rgb(247, 247, 247)',
    width: '90%',
    maxWidth: 700,
  },

  img: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 15,
  },

  logo: {
    width: 60,
    height: 60,
  },

  settings: {
    
    width: 60,
    height: 60, 
  },
  textDiv: {
    marginTop : -70,
    justifyContent: 'center',
     alignItems: 'center',
  },
  hellotxt:{
    fontFamily : 'Abhaya Libre Medium',
    fontSize : 22,
    color : '#B6B6B6',
  },
  title : {
    fontFamily : 'Abhaya Libre Medium',
    fontSize : 27,
    fontWeight : 'bold',
    color : '#6E3089',
  },
  motivdiv:{
    marginTop : 6,
    marginBottom : 6,
    width : 300,
    height : 30,
    borderWidth : 1,
    borderRadius : 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  motivtxt : {
    fontFamily : 'Abhaya Libre Medium',
    fontSize : 15,
  },

});
