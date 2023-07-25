import React, { useState, useEffect } from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  Modal,
  Pressable,
  Alert,
  ScrollView,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { storage, db } from "../../config";

//Components
import Screen from "../components/Screen";
import CircleLine from "../components/common/CircleLine";
import HeaderMode from "../components/common/HeaderMode";
import AppButton from "../components/common/AppButton";
import ImageInputList from "../components/common/ImageInputList";

//config
import Colors from "../config/Colors";

export default function ShopProductsAddScreen(props) {
  const [Name, onChangeName] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [imageUri, setImageUri] = useState([]);

  const handleAdd = (uri) => {
    setImageUri([...imageUri, uri]);
  };
  const handleRemove = (uri) => {
    setImageUri(imageUri.filter((imageUri) => imageUri !== uri));
  };
  const handleNext = async () => {
    // Validate if the user has selected at least one image
    if (imageUri.length === 0) {
      Alert.alert("Error", "Please select at least one image.");
      return;
    }

    // Upload images to Firebase Storage and get the download URLs
    const imageUrls = [];
    try {
      for (const uri of imageUri) {
        const response = await fetch(uri);
        const blob = await response.blob();
        const imageName = Date.now().toString(); // You can use a more meaningful name if needed
        const ref = storage.ref().child(`images/${imageName}`);
        await ref.put(blob);
        const url = await ref.getDownloadURL();
        imageUrls.push(url);
      }

      // Now, you have the image URLs in the 'imageUrls' array.
      // You can save them to Firebase Firestore or Realtime Database
      // along with other data you may want to store.

      // For example, you can save the URLs to Firestore like this:
      const categoryData = {
        name: Name,
        images: imageUrls,
      };
      // Assuming you have initialized Firebase Firestore in your app

      await db.collection("categories").add(categoryData);

      // Move to the next screen
      props.navigation.navigate("ShopDays");
    } catch (error) {
      console.error("Error uploading images:", error);
      Alert.alert("Error", "Failed to upload images. Please try again later.");
    }
  };

  return (
    <Screen
      style={{
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: Colors.lightWhite,
      }}
    >
      {/* headerMode */}
      <View style={{ width: "100%", alignItems: "center" }}>
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
            width: "90%",
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
            <Text style={{ color: Colors.white }}>2</Text>
          </View>
          <View
            style={{
              width: RFPercentage(5),
              height: RFPercentage(0.3),
              backgroundColor: Colors.secondary,
            }}
          />
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

        {/* button */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setModalVisible(true)}
          style={{ marginTop: RFPercentage(6), marginBottom: RFPercentage(4) }}
        >
          <AppButton title="Create category" />
        </TouchableOpacity>
      </View>

      {/* category creation Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 29,
          }}
        >
          <View
            style={{
              width: "90%",
              height: RFPercentage(37),
              backgroundColor: "white",
              borderRadius: 20,
              padding: 35,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            <Pressable
              style={{ width: "100%", alignItems: "flex-end" }}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Image
                style={{
                  width: RFPercentage(4),
                  height: RFPercentage(4),
                }}
                source={require("../../assets/images/cancelicon.png")}
              />
            </Pressable>

            <View style={{ width: "90%", marginTop: RFPercentage(1) }}>
              <Text
                style={{
                  fontSize: RFPercentage(2),
                  fontWeight: "700",
                  color: Colors.secondary,
                  marginBottom: RFPercentage(1.5),
                }}
              >
                create category
              </Text>

              <View
                style={{
                  width: RFPercentage(35),
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
                  onChangeText={onChangeName}
                  value={Name}
                  placeholder={"Enter category"}
                  placeholderTextColor={Colors.placeholder}
                />
              </View>

              {/* button */}
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setModalVisible(!modalVisible)}
                style={{
                  marginTop: RFPercentage(2),
                  marginBottom: RFPercentage(2),
                }}
              >
                <View
                  style={{
                    width: RFPercentage(35),
                    height: RFPercentage(6),
                    borderRadius: RFPercentage(1),
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: RFPercentage(2),
                    backgroundColor: "#FF9900",
                  }}
                >
                  <Text
                    style={{
                      color: Colors.white,
                      fontSize: RFPercentage(2.2),
                      fontWeight: "700",
                    }}
                  >
                    create
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* image Add container */}
      <View
        style={{
          marginTop: RFPercentage(1),
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ width: "85%", justifyContent: "center" }}>
          <Text
            style={{
              color: Colors.secondary,
              fontWeight: "600",
              fontSize: RFPercentage(2.5),
            }}
          >
            Clothes
          </Text>
        </View>
      </View>

      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={{
              marginTop: RFPercentage(2),
              borderWidth: 0.2,
              borderColor: Colors.grey,
              height: RFPercentage(25),
              width: "100%",
              borderRadius: RFPercentage(1),
              marginLeft: RFPercentage(5),
              justifyContent: "center",
              paddingRight: RFPercentage(4),
            }}
          >
            <ImageInputList
              imageUri={imageUri}
              OnAddImage={handleAdd}
              onRemoveImage={handleRemove}
            />
          </View>
        </ScrollView>
      </View>

      {/* button */}
      <View style={{ width: "100%", alignItems: "center" }}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleNext}
          style={{ marginTop: RFPercentage(6), marginBottom: RFPercentage(4) }}
        >
          <AppButton title="Next" />
        </TouchableOpacity>
      </View>
    </Screen>
  );
}
