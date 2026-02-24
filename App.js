import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { UserProvider } from './meals/UserContext.js';

import SignIn from './meals/Login_Signin/SignIn.js';
import Login from './meals/Login_Signin/login.js';
import Home from './meals/homepage/home.js';
import Detail from './meals/homepage/detail.js';
import Settings from './meals/settings/settings.js';
import Fav from './meals/settings/fav.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <UserProvider>
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="SignIn"> */}
      <Stack.Navigator >
        {/* <Stack.Screen name="SignIn" component={SignIn} /> */}
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }}/>
        <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }}/>
        <Stack.Screen name="Fav" component={Fav} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  </UserProvider>
  );
}