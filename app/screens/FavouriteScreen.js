import React, { useState } from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  FlatList,
  onPress,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/common/AppButton";

//config
import Colors from "../config/Colors";

export default function FavouriteScreen(props) {
  const shopList = [
    {
      id: "1",
      imageSource: require("../../assets/images/shop1.png"),
      title: "Salon Shop",
      description:
        "we provide the many services related to your hair like hair cutting, beard and makeup ",
      shopLocation: "Haryana, India",
      shopStars: "5",
    },
    {
      id: "2",
      imageSource: require("../../assets/images/shop2.png"),
      title: "Barber Shop",
      description:
        "This shop has the many services related to your skin like the treatment of , beard and makeup ",
      shopLocation: "Mumbai, India",
      shopStars: "4.9",
    },
  ];

  return (
    <Screen
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: Colors.lightWhite,
      }}
    >
      {/* headrer Name */}

      <View
        style={{
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: RFPercentage(4),
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            props.navigation.navigate("BottomTab", { screen: "HomeScreen" });
          }}
          style={{ position: "absolute", left: RFPercentage(2) }}
        >
          <Image
            style={{
              width: RFPercentage(2.5),
              height: RFPercentage(2.5),
            }}
            source={require("../../assets/images/arowblogo.png")}
          />
        </TouchableOpacity>

        <Text style={{ fontWeight: "600", fontSize: RFPercentage(2.5) }}>
          Favourite
        </Text>
      </View>

      {/* flatlist Shops */}
      <FlatList
        contentContainerStyle={{ alignItems: "center" }}
        style={{
          width: "100%",
          marginTop: RFPercentage(5),
          flexGrow: 0,
        }}
        data={shopList}
        keyExtractor={(shopList) => shopList.id.toString()}
        showsVerticalScrollIndicator={false}
        vertical
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: Colors.white,
              marginTop: RFPercentage(2),
              borderRadius: RFPercentage(1.5),
              height: RFPercentage(21),
              flexDirection: "row",
              overflow: "hidden",
            }}
          >
            {/* shop Image */}
            <View>
              <Image
                style={{ width: RFPercentage(23), height: RFPercentage(21) }}
                source={item.imageSource}
              />
            </View>

            {/* shop data */}
            <View style={{ padding: RFPercentage(2) }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ color: Colors.secondary, fontWeight: "700" }}>
                  {item.title}
                </Text>

                <View style={{ paddingLeft: RFPercentage(6) }}>
                  <Image
                    style={{
                      width: RFPercentage(2.3),
                      height: RFPercentage(2.2),
                    }}
                    source={require("../../assets/images/orangehearticon.png")}
                  />
                </View>
              </View>

              <View style={{ width: RFPercentage(17) }}>
                <Text
                  style={{
                    fontSize: RFPercentage(1.6),
                    marginTop: RFPercentage(1),
                    color: Colors.secondary,
                  }}
                >
                  {item.description}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  position: "absolute",
                  bottom: RFPercentage(2),
                  right: RFPercentage(2),
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    style={{
                      width: RFPercentage(2.3),
                      height: RFPercentage(2.1),
                    }}
                    source={require("../../assets/images/locationicon.png")}
                  />
                  <Text
                    style={{
                      color: Colors.secondary,
                      fontWeight: "400",
                      fontSize: RFPercentage(1.3),
                      paddingLeft: RFPercentage(0.5),
                    }}
                  >
                    {item.shopLocation}
                  </Text>
                </View>
                <View
                  style={{
                    paddingLeft: RFPercentage(3),
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    style={{
                      width: RFPercentage(2.3),
                      height: RFPercentage(2.1),
                    }}
                    source={require("../../assets/images/staricon.png")}
                  />
                  <Text
                    style={{
                      color: Colors.secondary,
                      fontWeight: "400",
                      fontSize: RFPercentage(1.6),
                      paddingLeft: RFPercentage(0.3),
                    }}
                  >
                    {item.shopStars}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </Screen>
  );
}
