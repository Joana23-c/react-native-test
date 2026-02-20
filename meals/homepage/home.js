import {View, Text, Button} from 'react-native'

export default function Home({ route, navigation }){
 const { email } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems : 'center',}}>
      <Text>KE ARRITUR NE HOME PAGE</Text>
       <Text>Emaili yt: {email}</Text>
      <Button title="Log Out" onPress={() => navigation.navigate('Login')} />
    </View>  
    );
}