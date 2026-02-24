import {View, Text, Button , ScrollView , Image, StyleSheet, FlatList,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { UserContext } from '../UserContext.js';
import Card from './card.js';
import data from '../data.json';
import Detail from './detail.js'


const images = {
  "Japanesecheesecake-scaled.jpg": require('../images/Japanesecheesecake-scaled.jpg'),
  "Rice Paper Spanakopita.png": require('../images/Rice Paper Spanakopita.png'),
  "ItalianSushiRecipe.png": require('../images/ItalianSushiRecipe.png'),
  "CottageCheeseEggs.png": require('../images/CottageCheeseEggs.png'),
};

export default function Home(){
  const navigation = useNavigation();
  const { username } = useContext(UserContext);

const handlePress = (cardid) => {
         navigation.replace('Detail',{id: cardid});
        }
const gobacktohome = () => {
         navigation.navigate('Home');
        }
const gotoSettings = () => {
         navigation.navigate('Settings');
        }
  return (
<View style={styles.body}>
  <View style={styles.container}>
    <View style={styles.img}>
      <TouchableOpacity onPress={gobacktohome}>
      <Image
        source={require('../images/candy.png')}
        style={{ width: 60, height: 60 }}
      /></TouchableOpacity>
      <View style={{ zIndex: 10 }}>
      <TouchableOpacity onPress={gotoSettings}>
      <Image
        source={require('../images/settings.png')}
        style={{ width: 60, height: 60, zIndex: 10 }}
      />
      </TouchableOpacity></View>
    </View>

    <View style={styles.textDiv}>
      <Text style={styles.hellotxt}>Hello {username}!</Text>
      <Text style={styles.title}>Find your perfect recipe</Text>
     <View style={styles.motivdiv}>
      <Text style={styles.motivtxt}>“ Every recipe tells a story.  Let’s cook yours.”</Text>
      </View>
        <Text style={[styles.title, { marginTop: 12, marginBottom : -15 }]}>Popular Recipes</Text>
   </View>

    <ScrollView horizontal style={{maxHeight:300}}>
      {data.map((i) => (
       <TouchableOpacity key={i.id} onPress={() =>handlePress(i.id)}>
        <Card
          image={images[i.image]}
          title={i.title}
          desc={i.desc}
          time={i.time}
          id={i.id}
        />
        </TouchableOpacity>
      ))}
    </ScrollView>

    <View style={[{marginTop:5,justifyContent: 'center', alignItems: 'center',}]}>
      <Text style={styles.title} >Other Recipes</Text>
    </View>

    <View style = { {flex: 1, alignItems: 'center',}}>
    <FlatList
    data={data}
    keyExtractor={(item) => item.id.toString()}
    numColumns={2}
    renderItem={({ item }) => (
      <TouchableOpacity onPress={() => handlePress(item.id)}>
      <Card
        image={images[item.image]}
        title={item.title}
        desc={item.desc}
        time={item.time}
      />
      </TouchableOpacity>
    )}
  />
    </View>

  </View>
</View>
    );
}

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