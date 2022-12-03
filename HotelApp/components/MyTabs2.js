import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screen/HomeScreen";
import FavoriteScreen from "../screen/FavoriteScreen"
import SettingsScreen from "../screen/SettingsScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import DetailsScreen from '../screen/DetailHotel';
import HistoryScreen from '../screen/HistoryScreen';
import SearchScreen from '../screen/SearchScreen';
import LoginScreen from '../screen/LoginScreen';
import BookingScreen from '../screen/BookingScreen';
import CheckoutScreen from '../screen/CheckoutScreen';

//Screen name
const homeName = 'Home';
const favoriteName = 'Favorite';
const profileName = 'Profile';
const historyName = 'History';
const settingsName = 'Settings';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () =>{
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name = "Home" component={HomeScreen} />
            <Stack.Screen name = "DetailsScreen" component={DetailsScreen} /> 
            <Stack.Screen name="SeaarchScreen" component={SearchScreen}/>
            {(() => {
                if(localStorage.getItem("id")){
                    return(
                        <Stack.Screen name="BookingScreen" component={BookingScreen}/>
                    )
                }else{
                    return(
                        <Stack.Screen name = "login" component={LoginScreen} />
                    )
                }
            })()}
            <Stack.Screen name="Check" component={CheckoutScreen}/>
        </Stack.Navigator>
    )
}
const FavoriteStack = () =>{
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            {(() => {
                if(localStorage.getItem("id")){
                    return(
                        <Stack.Screen name={favoriteName} component={FavoriteScreen}/>
                    )
                }else{
                    return(
                        <Stack.Screen name = "login" component={LoginScreen} />
                    )
                }
            })()}
        </Stack.Navigator>
    )
}
const ProfileStack = () =>{
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            {(() => {
                if(localStorage.getItem("id")){
                    return(
                        <Stack.Screen name={profileName} component={HistoryScreen}/>
                    )
                }else{
                    return(
                        <Stack.Screen name = "login" component={LoginScreen} />
                    )
                }
            })()}
        </Stack.Navigator>
    )
}
const SettingStack = () =>{
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            {(() => {
                if(localStorage.getItem("id")){
                    return(
                        <Stack.Screen name={settingsName} component={SettingsScreen}/>
                    )
                }else{
                    return(
                        <Stack.Screen name = "login" component={LoginScreen} />
                    )
                }
            })()}
        </Stack.Navigator>
    )
}

// const ProfileStack = () =>{
//     return(
//         <Stack.Navigator>
//             <Stack.Screen name = "Profile" component={HistoryScreen} />
//             <Stack.Screen name="CheckoutScreen" component={CheckoutScreen}/>
//         </Stack.Navigator>
//     )
// }
    

const MyTabs = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName){
                        iconName = focused ? 'home' : 'home-outline';
                    }else if (rn === historyName){
                        iconName = focused ? 'documents' : 'document-text-outline';
                    }else if(rn === favoriteName){
                        iconName = focused ? 'heart' : 'heart-outline';
                    }else if(rn === profileName){
                        iconName = focused ? 'person' : 'person-outline';
                    }else if (rn === settingsName){
                        iconName = focused ? 'settings' : 'settings-outline';
                    }

                    
                    return <Ionicons name={iconName} size={size} color={color}/>
                    

                },
            })}>
                <Tab.Screen name={homeName} component={HomeStack}/>
                <Tab.Screen name={favoriteName} component={FavoriteStack}/>
                <Tab.Screen name={profileName} component={ProfileStack}/>
                <Tab.Screen name={settingsName} component={SettingStack}/>
            </Tab.Navigator>
            </NavigationContainer>
    )
}

export default MyTabs;
