import React, { useState } from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//Components
import Screen from "../components/Screen";
import CircleLine from "../components/common/CircleLine";
import HeaderMode from "../components/common/HeaderMode";
import InputField from "../components/common/InputField";
import AppButton from "../components/common/AppButton";
import { storage, db } from "../../config";

//config
import Colors from "../config/Colors";

export default function ShopDetailsScreen(props) {
  const [country, onChangeCountry] = useState("");
  const [city, onChangeCity] = useState("");
  const [phone, onChangePhone] = useState("");
  const [email, onChangeEmail] = useState("");

  const saveDataToFirebase = () => {
    // Check if any of the fields are empty
    if (
      country.trim() === "" ||
      city.trim() === "" ||
      phone.trim() === "" ||
      email.trim() === ""
    ) {
      alert("Please fill in all the fields.");
      return;
    }
    // Save the data to Firebase
    db.collection("shopDetails")
      .add({
        country,
        city,
        phone,
        email,
      })
      .then(() => {
        // Data saved successfully, navigate to the next screen
        props.navigation.navigate("ShopProductsAddScreen");
      })
      .catch((error) => {
        console.error("Error saving data to Firebase: ", error);
        alert("Failed to save data to Firebase. Please try again.");
      });
  };

  return (
    <Screen
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: Colors.lightWhite,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false} style={{ width: "90%" }}>
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: RFPercentage(4),
          }}
        >
          <HeaderMode
            title="List your business"
            onpress={() => {
              props.navigation.navigate("BottomTab", {
                screen: "ProfileScreen",
              });
            }}
          />
        </View>

        {/* CircleLine */}

        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            marginTop: RFPercentage(5),
          }}
        >
          <View
            style={{
              width: RFPercentage(5),
              height: RFPercentage(5),
              borderRadius: RFPercentage(3),
              backgroundColor: Colors.primary,
              borderColor: Colors.secondary,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: Colors.white }}>1</Text>
          </View>
          <View
            style={{
              width: RFPercentage(5),
              height: RFPercentage(0.3),
              backgroundColor: Colors.secondary,
            }}
          />
          <CircleLine title="2" />
          <CircleLine title="3" />
          <CircleLine title="4" />
          <View
            style={{
              width: RFPercentage(5),
              height: RFPercentage(5),
              borderRadius: RFPercentage(3),
              borderColor: Colors.secondary,
              borderWidth: RFPercentage(0.3),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: Colors.secondary }}>5</Text>
          </View>
        </View>

        {/* Shop Details */}

        {/* country */}
        <View style={{ marginTop: RFPercentage(8) }}>
          <View style={{ width: "90%" }}>
            <Text
              style={{
                fontSize: RFPercentage(2),
                fontWeight: "700",
                color: Colors.secondary,
                marginBottom: RFPercentage(1.5),
              }}
            >
              Country
            </Text>

            <View
              style={{
                width: RFPercentage(45),
                height: RFPercentage(7),
                backgroundColor: "#F2F3F7",
                color: Colors.black,
                paddingLeft: RFPercentage(3),
                borderRadius: RFPercentage(1.5),
                justifyContent: "center",
              }}
            >
              <TextInput
                style={{ width: RFPercentage(45) }}
                onChangeText={onChangeCountry}
                value={country}
                placeholder="Select Country"
                placeholderTextColor={Colors.placeholder}
              />
            </View>
          </View>
        </View>

        {/* City */}
        <View style={{ width: "90%", marginTop: RFPercentage(3) }}>
          <Text
            style={{
              fontSize: RFPercentage(2),
              fontWeight: "700",
              color: Colors.secondary,
              marginBottom: RFPercentage(1.5),
            }}
          >
            City
          </Text>

          <View
            style={{
              width: RFPercentage(45),
              height: RFPercentage(7),
              backgroundColor: "#F2F3F7",
              color: Colors.black,
              paddingLeft: RFPercentage(3),
              borderRadius: RFPercentage(1.5),
              justifyContent: "center",
            }}
          >
            <TextInput
              style={{ width: RFPercentage(45) }}
              onChangeText={onChangeCity}
              value={city}
              placeholder="Enter City"
              placeholderTextColor={Colors.placeholder}
            />
          </View>
        </View>

        {/* Phone */}
        <View style={{ width: "90%", marginTop: RFPercentage(3) }}>
          <Text
            style={{
              fontSize: RFPercentage(2),
              fontWeight: "700",
              color: Colors.secondary,
              marginBottom: RFPercentage(1.5),
            }}
          >
            Phone
          </Text>

          <View
            style={{
              width: RFPercentage(45),
              height: RFPercentage(7),
              backgroundColor: "#F2F3F7",
              color: Colors.black,
              paddingLeft: RFPercentage(3),
              borderRadius: RFPercentage(1.5),
              justifyContent: "center",
            }}
          >
            <TextInput
              style={{ width: RFPercentage(45) }}
              onChangeText={onChangePhone}
              value={phone}
              placeholder="Enter Phone no"
              placeholderTextColor={Colors.placeholder}
            />
          </View>
        </View>
        <View style={{ width: "90%", marginTop: RFPercentage(3) }}>
          <Text
            style={{
              fontSize: RFPercentage(2),
              fontWeight: "700",
              color: Colors.secondary,
              marginBottom: RFPercentage(1.5),
            }}
          >
            Email
          </Text>

          <View
            style={{
              width: RFPercentage(45),
              height: RFPercentage(7),
              backgroundColor: "#F2F3F7",
              color: Colors.black,
              paddingLeft: RFPercentage(3),
              borderRadius: RFPercentage(1.5),
              justifyContent: "center",
            }}
          >
            <TextInput
              style={{ width: RFPercentage(45) }}
              onChangeText={onChangeEmail}
              value={email}
              placeholder="Enter Email"
              placeholderTextColor={Colors.placeholder}
            />
          </View>
        </View>

        {/* button */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={saveDataToFirebase}
          style={{ marginTop: RFPercentage(4), marginBottom: RFPercentage(4) }}
        >
          <AppButton title="Next" />
        </TouchableOpacity>
      </ScrollView>
    </Screen>
  );
}
