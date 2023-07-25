import React, { useEffect } from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  FlatList,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome5";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";

//screens
import SplashScreen from "./app/screens/SplashScreen";
import SignInScreen from "./app/screens/SignInScreen";
import HomeScreen from "./app/screens/HomeScreen";
import SignUpScreen from "./app/screens/SignUpScreen";
import ForgotPassword from "./app/screens/ForgotPassword";
import ReelsScreen from "./app/screens/ReelsScreen";
import ProfileScreen from "./app/screens/ProfileScreen";
import ChatScreen from "./app/screens/ChatScreen";
import FavouriteScreen from "./app/screens/FavouriteScreen";
import ShopListBusiness from "./app/screens/ShopListBusiness";
import ShopDetailsScreen from "./app/screens/ShopDetailsScreen";
import ShopDays from "./app/screens/ShopDays";
import ShopPagelinksScreen from "./app/screens/ShopPagelinksScreen";
import ShopDataSuccess from "./app/screens/ShopDataSuccess";
import AboutUsScreen from "./app/screens/AboutUsScreen";
import ThankYouScreen from "./app/screens/ThankYouScreen";
import FeedbackScreen from "./app/screens/FeedbackScreen";
import EditProfile from "./app/screens/EditProfile";
import UpgradePremium from "./app/screens/UpgradePremium";
import PaymentDetails from "./app/screens/PaymentDetails";
import StatementScreen from "./app/screens/StatementScreen";
import InnerShopScreen from "./app/screens/InnerShopScreen";
import PostReelScreen from "./app/screens/PostReelScreen";
import ReelsRecordScreen from "./app/screens/ReelsRecordScreen";
import ReelCaption from "./app/screens/ReelCaption";
import PublishReelsScreen from "./app/screens/PublishReelsScreen";
import MessageScreen from "./app/screens/MessageScreen";
import ShopProductsAddScreen from "./app/screens/ShopProductsAddScreen";
import ReelRecordPractice from "./app/screens/ReelRecordPractice";
import Reels from "./app/screens/Reels";

//colors
import Colors from "./app/config/Colors";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: "#A0A3B1",
        headerShown: false,
        tabBarStyle: {
          height: wp("15%"),
          padding: 3,
          paddingBottom: RFPercentage(1),
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          tabBarLabel: "Chat",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chat" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Reels"
        component={Reels}
        options={{
          tabBarLabel: "Reels",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="arrow-right-drop-circle-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerMode: "false" }}
        initialRouteName="SplashScreen"
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="FavouriteScreen" component={FavouriteScreen} />
        <Stack.Screen name="ShopListBusiness" component={ShopListBusiness} />
        <Stack.Screen name="ShopDetailsScreen" component={ShopDetailsScreen} />
        <Stack.Screen name="ShopDays" component={ShopDays} />
        <Stack.Screen
          name="ShopPagelinksScreen"
          component={ShopPagelinksScreen}
        />
        <Stack.Screen name="ShopDataSuccess" component={ShopDataSuccess} />
        <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} />
        <Stack.Screen name="ThankYouScreen" component={ThankYouScreen} />
        <Stack.Screen name="FeedbackScreen" component={FeedbackScreen} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="UpgradePremium" component={UpgradePremium} />
        <Stack.Screen name="PaymentDetails" component={PaymentDetails} />
        <Stack.Screen name="StatementScreen" component={StatementScreen} />
        <Stack.Screen name="InnerShopScreen" component={InnerShopScreen} />
        <Stack.Screen name="PostReelScreen" component={PostReelScreen} />
        <Stack.Screen name="ReelsRecordScreen" component={ReelsRecordScreen} />
        <Stack.Screen name="ReelCaption" component={ReelCaption} />
        <Stack.Screen
          name="PublishReelsScreen"
          component={PublishReelsScreen}
        />
        <Stack.Screen name="MessageScreen" component={MessageScreen} />
        <Stack.Screen
          name="ShopProductsAddScreen"
          component={ShopProductsAddScreen}
        />
        <Stack.Screen
          name="ReelRecordPractice"
          component={ReelRecordPractice}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
