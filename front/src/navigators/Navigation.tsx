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
import Certificate from '@/screens/Certificate';
import {observer} from "mobx-react";
import useStore from "@/hooks/useStore";
import useSocket from "@/hooks/useSocket";
import {useEffect} from "react";
import useLocation from "@/hooks/useLocation";
import {AppState} from "react-native";


const Stack = createStackNavigator();

interface propsType{
  // location: any;
}

const Navigation = observer(({}: propsType) => {
  const {userStore} = useStore();
  const socket = useSocket();
  const location = useLocation({});

  useEffect(() => {
    const appState = AppState.addEventListener('change', ()=>{
      if (AppState.currentState === 'active'){
        userStore.user&&location.setForeground()
      } else if (AppState.currentState === 'background' && userStore.user){
        location.setBackground();
      }
    });
    return () => {
      appState.remove();
    }
  }, []);

  useEffect(() => {
    if (location.status===0 && userStore.user){
      location.status===0&&location.setForeground();
    }
  }, [userStore.user])

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: false }} initialRouteName='Main'>
        <Stack.Screen name="Dummy" component={NavigatorDummy}/>
        <Stack.Screen name="Chat">
          {
            props => (
                <Chat helpSocket={socket}/>
            )
          }
        </Stack.Screen>
        <Stack.Screen name="ChatList">
          {
            props => (
                <ChatList socket={socket}/>
            )
          }
        </Stack.Screen>
        <Stack.Screen name="CreateHelp">
          {
            props => (
                <CreateHelp location={location.coordinate} socket={socket}/>
            )
          }
        </Stack.Screen>
        <Stack.Screen name="Login">
          {
            props => (
                <Login socket={socket}/>
            )
          }
        </Stack.Screen>
        <Stack.Screen name="Main">
          {
            props => (
                <Main socket={socket}/>
            )
          }
        </Stack.Screen>
        <Stack.Screen name="Map">
          {
            props => (
                <Map location={location.coordinate} socket={socket}/>
            )
          }
        </Stack.Screen>
        <Stack.Screen name="MyPage">
          {
            props => (
                <MyPage socket={socket}/>
            )
          }
        </Stack.Screen>
        <Stack.Screen name="SignUpAuth">
          {
            props => (
                <SignUpAuth socket={socket}/>
            )
          }
        </Stack.Screen>
        <Stack.Screen name="SignUpInput">
          {
            props => (
                <SignUpInput socket={socket}/>
            )
          }
        </Stack.Screen>
        <Stack.Screen name="SignUpSeparate">
          {
            props => (
                <SignUpSeparate socket={socket}/>
            )
          }
        </Stack.Screen>
        <Stack.Screen name="Character">
          {
            props => (
                <Character socket={socket}/>
            )
          }
        </Stack.Screen>
        <Stack.Screen name="Certificate">
          {
            props => (
                <Certificate socket={socket}/>
            )
          }
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default Navigation;

