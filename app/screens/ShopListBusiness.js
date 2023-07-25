import React, { useState } from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  Modal,
  Pressable,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import * as ImagePicker from "expo-image-picker";
import {
  // Other imports...
  storage, // Import the storage object from the config file
  db, // Import the db (Firestore) object from the config file
} from "../../config";

//Components
import Screen from "../components/Screen";
import CircleLine from "../components/common/CircleLine";
import HeaderMode from "../components/common/HeaderMode";
import InputField from "../components/common/InputField";
import AppButton from "../components/common/AppButton";

//config
import Colors from "../config/Colors";

export default function ShopListBusiness(props) {
  const [image, setImage] = useState(null);
  const [Name, onChangeName] = useState("");
  const [Description, onChangeDescription] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Select category");

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    setModalVisible(false);
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const saveDataToFirebase = async () => {
    try {
      // First, upload the image to Firebase Storage and get the download URL
      let downloadURL = null;
      if (image) {
        // Uploading the image to Firebase Storage
        const response = await fetch(image);
        const blob = await response.blob();
        const storageRef = storage.ref().child(`images/${Name}`);
        await storageRef.put(blob);

        // Get the download URL of the uploaded image
        downloadURL = await storageRef.getDownloadURL();
      }

      // Next, save the data (image URL, title, description, and category) to Firestore
      await db.collection("businesses").add({
        image: downloadURL,
        title: Name,
        description: Description,
        category: selectedCategory,
      });
      // Data saved successfully, navigate to the next screen
      props.navigation.navigate("ShopDetailsScreen");
    } catch (error) {
      console.error("Error saving data to Firebase:", error);
    }
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
            props.navigation.navigate("BottomTab", { screen: "ProfileScreen" });
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
        <CircleLine title="1" />
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

      {/* Images picker */}

      <View
        style={{
          width: RFPercentage(17),
          height: RFPercentage(17),
          borderWidth: RFPercentage(0.3),
          borderColor: Colors.lightgrey,
          borderRadius: RFPercentage(2),
          marginTop: RFPercentage(4),
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={pickImage}
          style={{ marginTop: RFPercentage(3) }}
        >
          {image ? null : (
            <Image
              style={{
                width: RFPercentage(14),
                height: RFPercentage(14),
                borderRadius: RFPercentage(2),
              }}
              source={require("../../assets/images/shop1.png")}
            />
          )}
          {image && (
            <Image
              source={{ uri: image }}
              style={{
                width: RFPercentage(14),
                height: RFPercentage(14),
                borderRadius: RFPercentage(2),
              }}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{ bottom: RFPercentage(2) }}
        >
          <Image
            style={{
              width: RFPercentage(3.5),
              height: RFPercentage(3),
            }}
            source={require("../../assets/images/cameraicon.png")}
          />
        </TouchableOpacity>
      </View>

      {/* title */}

      <View style={{ marginTop: RFPercentage(3) }}>
        <View style={{ width: "90%" }}>
          <Text
            style={{
              fontSize: RFPercentage(2),
              fontWeight: "700",
              color: Colors.secondary,
              marginBottom: RFPercentage(1.5),
            }}
          >
            Title
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
              onChangeText={onChangeName}
              value={Name}
              placeholder="title"
              placeholderTextColor={Colors.placeholder}
            />
          </View>
        </View>
      </View>

      {/* description */}
      <View style={{ marginTop: RFPercentage(3) }}>
        <Text
          style={{
            fontSize: RFPercentage(2),
            fontWeight: "700",
            color: Colors.secondary,
            marginBottom: RFPercentage(1.5),
          }}
        >
          Business Description
        </Text>

        <View
          style={{
            width: RFPercentage(45),
            height: RFPercentage(12),
            backgroundColor: "#F2F3F7",
            color: Colors.black,
            paddingLeft: RFPercentage(2),
            paddingTop: RFPercentage(1.5),
            borderRadius: RFPercentage(1.5),
          }}
        >
          <TextInput
            style={{ fontSize: RFPercentage(2) }}
            onChangeText={onChangeDescription}
            value={Description}
            placeholder="Write the description"
            placeholderTextColor={Colors.placeholder}
          />
        </View>
      </View>

      {/* category */}
      <View style={{ marginTop: RFPercentage(3) }}>
        <Text
          style={{
            fontSize: RFPercentage(2),
            fontWeight: "700",
            color: Colors.secondary,
            marginBottom: RFPercentage(1.5),
          }}
        >
          Category
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            backgroundColor: Colors.inputcolor,
            width: RFPercentage(45),
            borderRadius: RFPercentage(1.5),
            height: RFPercentage(7),
            justifyContent: "center",
          }}
          onPress={() => setModalVisible(true)}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 16,
                marginLeft: RFPercentage(2),
                color: "#333",
              }}
            >
              {selectedCategory}
            </Text>
            <View style={{ position: "absolute", right: 15 }}>
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../../assets/images/dropdownicon.png")}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>

      {/* category Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        {/* Modal content */}
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            marginTop: 29,
          }}
        >
          <View
            style={{
              width: "100%",
              height: 270,
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
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{ width: "100%", alignItems: "flex-end" }}
            >
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../../assets/images/cancelicon.png")}
              />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => handleCategorySelection("General Store")}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: Colors.primary,
                  marginTop: 20,
                  fontWeight: "600",
                }}
              >
                General Store
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => handleCategorySelection("Beauty")}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: Colors.primary,
                  marginTop: 20,
                  fontWeight: "600",
                }}
              >
                Beauty
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => handleCategorySelection("Clothing")}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: Colors.primary,
                  marginTop: 20,
                  fontWeight: "600",
                }}
              >
                Clothing
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => handleCategorySelection("Construction")}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: Colors.primary,
                  marginTop: 20,
                  fontWeight: "600",
                }}
              >
                Construction
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* button */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={saveDataToFirebase} // Call the function to save data when Next button is clicked
        style={{ marginTop: RFPercentage(2) }}
      >
        <AppButton title="Next" />
      </TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({});
