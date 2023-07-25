import React, { useState } from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//config
import Colors from "../../config/Colors";

export default function HorizontalCard({
  imageSource,
  title,
  description,
  shopLocation,
  shopStars,
  onpress,
}) {
  const [heartfill, setHeartfill] = useState(false);
  return (
    <View
      style={{
        width: "90%",
        backgroundColor: Colors.white,
        marginTop: RFPercentage(2),
        borderRadius: RFPercentage(1.5),
        height: RFPercentage(21),
        flexDirection: "row",
        overflow: "hidden",
      }}
    >
      {/* shop Image */}
      <TouchableOpacity activeOpacity={0.7} onPress={onpress}>
        <Image
          style={{ width: RFPercentage(23), height: RFPercentage(21) }}
          source={imageSource}
        />
      </TouchableOpacity>

      {/* shop data */}
      <View style={{ padding: RFPercentage(2) }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: Colors.secondary, fontWeight: "700" }}>
            {title}
          </Text>

          {heartfill ? (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                setHeartfill(false);
              }}
              style={{ paddingLeft: RFPercentage(6) }}
            >
              <Image
                style={{
                  width: RFPercentage(2.4),
                  height: RFPercentage(2.2),
                }}
                source={require("../../../assets/images/hearticon.png")}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                setHeartfill(true);
              }}
              style={{ paddingLeft: RFPercentage(6) }}
            >
              <Image
                style={{
                  width: RFPercentage(2.3),
                  height: RFPercentage(2.2),
                }}
                source={require("../../../assets/images/orangehearticon.png")}
              />
            </TouchableOpacity>
          )}
        </View>

        <View style={{ width: RFPercentage(17) }}>
          <Text
            style={{
              fontSize: RFPercentage(1.6),
              marginTop: RFPercentage(1),
              color: Colors.secondary,
            }}
          >
            {description}
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
              style={{ width: RFPercentage(2.3), height: RFPercentage(2.1) }}
              source={require("../../../assets/images/locationicon.png")}
            />
            <Text
              style={{
                color: Colors.secondary,
                fontWeight: "400",
                fontSize: RFPercentage(1.3),
                paddingLeft: RFPercentage(0.5),
              }}
            >
              {shopLocation}
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
              style={{ width: RFPercentage(2.3), height: RFPercentage(2.1) }}
              source={require("../../../assets/images/staricon.png")}
            />
            <Text
              style={{
                color: Colors.secondary,
                fontWeight: "400",
                fontSize: RFPercentage(1.6),
                paddingLeft: RFPercentage(0.3),
              }}
            >
              {shopStars}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
