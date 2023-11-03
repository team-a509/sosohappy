import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from '@/screens/Chat';
import ChatList from '@/screens/ChatList';
import CreateHelp from '@/screens/CreateHelp';
import Login from '@/screens/Login';
import Main from '@/screens/Main';
import Map from '@/screens/Map';
import MyPage from '@/screens/MyPage';
import SignUpAuth from '@/screens/SignUpAuth';
import SignUpInput from '@/screens/SignUpInput';
import SignUpSeparate from '@/screens/SignUpSeparate';
import NavigatorDummy from '@/screens/NavigatorDummy';
import Character from '@/screens/Character';


const Stack = createStackNavigator();

interface propsType{
  location: any;
}

const Navigation = ({location}: propsType) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: false }} initialRouteName='Main'>
        <Stack.Screen name="Dummy" component={NavigatorDummy}/>
        <Stack.Screen name="Chat" component={Chat}/>
        <Stack.Screen name="ChatList" component={ChatList}/>
        <Stack.Screen name="CreateHelp" component={CreateHelp}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Main" component={Main}/>
        <Stack.Screen name="Map">
          {
            props => (
                <Map location={location} />
            )
          }
        </Stack.Screen>        <Stack.Screen name="MyPage" component={MyPage}/>
        <Stack.Screen name="SignUpAuth" component={SignUpAuth}/>
        <Stack.Screen name="SignUpInput" component={SignUpInput}/>
        <Stack.Screen name="SignUpSeparate" component={SignUpSeparate}/>
        <Stack.Screen name="Character" component={Character}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

