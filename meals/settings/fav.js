import { View, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../UserContext.js';
import data from '../data.json';
import Card from '../homepage/card.js';

const images = {
  "Japanesecheesecake-scaled.jpg": require('../images/Japanesecheesecake-scaled.jpg'),
  "Rice Paper Spanakopita.png": require('../images/Rice Paper Spanakopita.png'),
  "ItalianSushiRecipe.png": require('../images/ItalianSushiRecipe.png'),
  "CottageCheeseEggs.png": require('../images/CottageCheeseEggs.png'),
};

export default function Fav() {
  const navigation = useNavigation();
  const route = useRoute();
  const { username } = useContext(UserContext);

  const { id } = route.params || {}; // ky rregullon ReferenceError
  const [favs, setFavs] = useState([]);
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const usersJSON = await AsyncStorage.getItem('users');
        const users = usersJSON ? JSON.parse(usersJSON) : [];
        const user = users.find(u => u.username === username);

        if (user) {
          setFavs(user.favourites || []);
        }

        if (id) {
          const itemFound = data.find(d => d.id === id);
          setCurrentItem(itemFound || null);
        }
      } catch (error) {
        console.log('Error loading data:', error);
      }
    };
    loadData();
  }, [username, id]);

  const handlePress = (cardId) => {
    navigation.navigate('Detail', { id: cardId });
  };

  const gobacktohome = () => navigation.navigate('Home');
  const gotoSettings = () => navigation.navigate('Settings');

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <View style={styles.img}>
          <TouchableOpacity onPress={gobacktohome}>
            <Image source={require('../images/candy.png')} style={{ width: 60, height: 60 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={gotoSettings}>
            <Image source={require('../images/settings.png')} style={{ width: 60, height: 60, zIndex: 10 }} />
          </TouchableOpacity>
        </View>

        {currentItem && (
          <View style={styles.imagediv}>
            <Image source={images[currentItem.image]} style={{ width: 400, height: 200, borderRadius: 10 }} />
          </View>
        )}

        <View style={{justifyContet:'center', alignItems:'center',}}>
        <ScrollView style={{ flex: 1, }}>
          {favs.map(favId => {
            const recipe = data.find(i => i.id === favId);
            if (!recipe) return null;

            return (
              <TouchableOpacity key={recipe.id} onPress={() => handlePress(recipe.id)}>
                <Card
                  image={images[recipe.image]}
                  title={recipe.title}
                  desc={recipe.desc}
                  time={recipe.time}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: { flex: 1, backgroundColor: 'rgb(118, 118, 222)', alignItems: 'center' },
  container: { flex: 1, backgroundColor: 'rgb(247, 247, 247)', width: '90%', maxWidth: 700 },
  img: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 15 },
  imagediv: { justifyContent: 'center', alignItems: 'center' },
});