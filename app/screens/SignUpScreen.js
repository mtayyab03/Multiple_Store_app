import React, { useState } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

import { Input, Button } from "react-native-elements";
import { auth } from "../../config";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";

//screen
import Screen from "../components/Screen";
import AppButton from "../components/common/AppButton";

//config
import Colors from "../config/Colors";

const SignUpScreen = (props) => {
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const navigation = useNavigation();
  const handleSignup = () => {
    auth
      .createUserWithEmailAndPassword(signupEmail, signupPassword)
      .then((userCredential) => {
        // Handle successful signup
        console.log("User signed up successfully!", userCredential.user);
        navigation.replace("SignInScreen");
      })
      .catch((error) => {
        // Handle signup errors
        console.log("Signup error:", error);
      });
  };

  return (
    <View style={styles.container}>
      {/* Image Logo */}
      <View
        style={{
          marginTop: RFPercentage(4),
          marginBottom: RFPercentage(6),
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{ width: RFPercentage(15.8), height: RFPercentage(15) }}
          source={require("../../assets/images/bizlogo.png")}
        />
      </View>
      {/* Signup inputs */}
      <Input
        label="Email"
        value={signupEmail}
        onChangeText={(text) => setSignupEmail(text)}
      />
      <Input
        label="Password"
        value={signupPassword}
        secureTextEntry
        onChangeText={(text) => setSignupPassword(text)}
      />
      {/* signup */}
      <TouchableOpacity
        onPress={handleSignup}
        style={styles.loginbutton}
        activeOpacity={0.7}
      >
        <AppButton title="Signup" buttonColor={Colors.blue} />
      </TouchableOpacity>

      {/* belowbuttonline */}
      <View
        style={{
          marginTop: RFPercentage(17),
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
            props.navigation.navigate("SignInScreen");
          }}
        >
          <Text style={{ color: Colors.primary, fontSize: RFPercentage(1.5) }}>
            SIGN IN
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

export default SignUpScreen;
