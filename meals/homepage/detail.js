import { View,Text,TextInput, Button, Alert, Platform, StyleSheet,TouchableOpacity,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { UserContext } from '../UserContext.js';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import data from '../data.json';
import About from './about.js';
import Instructions from './instructions.js';
import { useState } from 'react';

const images = {
  "Japanesecheesecake-scaled.jpg": require('../images/Japanesecheesecake-scaled.jpg'),
  "Rice Paper Spanakopita.png": require('../images/Rice Paper Spanakopita.png'),
  "ItalianSushiRecipe.png": require('../images/ItalianSushiRecipe.png'),
  "CottageCheeseEggs.png": require('../images/CottageCheeseEggs.png'),
};

export default function Detail() {

    const navigation = useNavigation();
    const { username } = useContext(UserContext);
    
    const route = useRoute();
    const { id } = route.params;

    const gobacktohome = () => {
         navigation.navigate('Home');}
        const gotoSettings = () => {
         navigation.navigate('Settings');
        }
        
    const item = data.find(i => i.id === id);
    
    // if (item) {
    //     const image = images[item.image];
    //     const title = item.title;
    //     const desc = item.desc;
    //     const time = item.time;
    //     const category = item.category;
        
    //     console.log(image, title, desc, time, category);
    // }

     const [activeComponent, setActiveComponent] = useState(1);
     
     const addtofv = async () => {
        try{
            const usersJSON = await AsyncStorage.getItem('users');
            const users = usersJSON ? JSON.parse(usersJSON) : [];

            const user = users.find(u =>u.username ===username );
            if(!user){
             console.log("useri nuk ekziston");
                return;
            }
            let favourites = user.favourites || [];
            if (!favourites.includes(id)) {
            favourites.push(id);
              }
              
              user.favourites = favourites;
              
              await AsyncStorage.setItem('users', JSON.stringify(users));

              console.log('Success', 'Recipe added to favourites!');
              showAllStorage();

        }catch(error){
            console.log('Error saving favourites: ', error);
        }

     };

     const showAllStorage = async () => {
        const usersJSON = await AsyncStorage.getItem('users');
        const x = usersJSON ? JSON.parse(usersJSON) : [];
        console.log('Të gjithë user-at:', x);
    };
    return(
        <View style={styles.body}>
          <View style={styles.container}>
            <View style={styles.img}>
              <TouchableOpacity onPress={gobacktohome}>
              <Image
                source={require('../images/candy.png')}
                style={{ width: 60, height: 60 }}
              /></TouchableOpacity>
              <TouchableOpacity onPress={gotoSettings}>
                    <Image
        source={require('../images/settings.png')}
        style={{ width: 60, height: 60, zIndex: 10 }}
      />
      </TouchableOpacity>
            </View>
        
            <View style = {styles.imagediv}>
            <Image source={images[item.image]} 
            style={{ width: 400, height: 200, borderRadius : 10,}} />
            </View>

            <View style={styles.textDiv}>
               <Text style={styles.title}>{item.title}</Text>
               <Text style={styles.hellotxt}>{item.category} / {item.time} minutes</Text>
            </View>

            <View style={[styles.img,{justifyContent : 'none',marginLeft:30,}]}>
                <Button title="About" color="#6E3089" onPress={() => setActiveComponent(1)}></Button>
                <Button title="Instructions" color="#7b777d"  onPress={() => setActiveComponent(2)}></Button>
            </View>

            <View style={styles.det}>
             {activeComponent === 1 ? ( <About info={item.about} />) : activeComponent === 2 ? (<Instructions info={item.instruction} />) : (<Text>Zgjedh një komponent</Text>)}
            </View>

            <View style={[styles.img,{justifyContent : 'center',}]}>
                <Button title="Add To favourites" color="red" onPress={addtofv}></Button>
            </View>
          </View>
        </View>
    //   <View>
            
    //      <Text>{id}</Text>
    //      <TouchableOpacity onPress={handlePress}>
    //         <Text>Detajee</Text>
    //     </TouchableOpacity>
    //     </View> 
        
    );
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

  imagediv : {
     justifyContent: 'center',
     alignItems: 'center',
  },
  textDiv: {
    // marginTop : -70,
    justifyContent: 'center',
     alignItems: 'center',
  },
  hellotxt:{
    fontFamily : 'Abhaya Libre Medium',
    fontSize : 18,
    color : '#B6B6B6',
  },
  title : {
    fontFamily : 'Abhaya Libre Medium',
    fontSize : 22,
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
  det: {
    marginLeft:18,
    marginRight:18,
  },

});


