import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { Input, Button } from "react-native-elements";
import { auth } from "../../config";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";

//screen
import Screen from "../components/Screen";
import AppButton from "../components/common/AppButton";

//config
import Colors from "../config/Colors";

const SignInScreen = (props) => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Handle successful login
        console.log("User logged in successfully!", userCredential.user);
        navigation.replace("BottomTab", { screen: "HomeScreen" });
      })
      .catch((error) => {
        // Handle login errors
        console.log("Login error:", error);
      });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      {/* Image Logo */}
      <View
        style={{
          marginTop: RFPercentage(1),
          marginBottom: RFPercentage(7),
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{ width: RFPercentage(15.8), height: RFPercentage(15) }}
          source={require("../../assets/images/bizlogo.png")}
        />
      </View>
      <Input
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        label="Password"
        value={password}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />

      {/* login */}
      <TouchableOpacity
        onPress={handleLogin}
        style={styles.loginbutton}
        activeOpacity={0.7}
      >
        <AppButton title="Login" buttonColor={Colors.blue} />
      </TouchableOpacity>

      {/* //forget text */}
      <View
        style={{
          width: RFPercentage(45),
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            props.navigation.navigate("ForgotPassword");
          }}
        >
          <Text
            style={{
              marginTop: RFPercentage(3),
              color: Colors.secondary,
              fontSize: RFPercentage(1.6),
              fontWeight: "400",
            }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>

      {/* belowbuttonline */}
      <View
        style={{
          marginTop: RFPercentage(10),
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#A1A4B2", fontSize: RFPercentage(1.5) }}>
          ALREADY HAVE AN ACCOUNT?
        </Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            props.navigation.navigate("SignUpScreen");
          }}
        >
          <Text
            style={{
              color: Colors.primary,
              fontSize: RFPercentage(1.5),
              fontWeight: "500",
            }}
          >
            SIGN UP
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  loginbutton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(1),
  },
});

export default SignInScreen;
