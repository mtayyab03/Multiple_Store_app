import React, { useState } from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  FlatList,
  onPress,
  ScrollView,
  ImageBackground,
  Modal,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swiper from "react-native-swiper";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/common/AppButton";
import InputField from "../components/common/InputField";

//config
import Colors from "../config/Colors";

export default function InnerShopScreen(props) {
  const [fillstar, setFillstar] = useState(false);
  const [description, onChangeDescription] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [radioButton, setRadioButton] = useState(false);
  const linkList = [
    {
      id: "1",
      imageSource: require("../../assets/images/shop1.png"),
    },
    {
      id: "2",
      imageSource: require("../../assets/images/shop2.png"),
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
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        {/* Swiper */}
        <View
          style={{
            width: "100%",
            height: RFPercentage(35),
            backgroundColor: Colors.grey,
          }}
        >
          <Swiper activeDotColor={Colors.primary} style={{}}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                style={{
                  width: "100%",
                  height: RFPercentage(35),
                }}
                source={require("../../assets/images/shop1.png")}
              />
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                style={{
                  width: "100%",
                  height: RFPercentage(35),
                }}
                source={require("../../assets/images/shop2.png")}
              />
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                style={{
                  width: "100%",
                  height: RFPercentage(35),
                }}
                source={require("../../assets/images/shop3.png")}
              />
            </View>
          </Swiper>
        </View>

        {/* shop data */}
        <View
          style={{
            width: "90%",
            alignItems: "center",
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
          <Text
            style={{
              fontWeight: "700",
              fontSize: RFPercentage(2.7),
              color: Colors.secondary,
            }}
          >
            Alumni Designer
          </Text>

          <TouchableOpacity
            activeOpacity={0.7}
            style={{ position: "absolute", right: RFPercentage(2) }}
          >
            <Image
              style={{
                width: RFPercentage(3.5),
                height: RFPercentage(3.2),
              }}
              source={require("../../assets/images/orangehearticon.png")}
            />
          </TouchableOpacity>
        </View>

        <Text
          style={{
            fontWeight: "500",
            fontSize: RFPercentage(1.7),
            color: Colors.secondary,
            marginTop: RFPercentage(3),
          }}
        >
          Servicing Since 2015
        </Text>

        {/* shop contacts */}
        <View
          style={{
            width: "90%",
            marginTop: RFPercentage(7),
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          {/* phoneicon */}
          <TouchableOpacity
            activeOpacity={0.7}
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <Image
              style={{
                width: RFPercentage(4),
                height: RFPercentage(4),
              }}
              source={require("../../assets/images/phoneicon.png")}
            />
            <Text
              style={{
                fontWeight: "500",
                fontSize: RFPercentage(1.2),
                color: Colors.secondary,
                marginTop: RFPercentage(2),
              }}
            >
              Call the store
            </Text>
          </TouchableOpacity>

          {/* chaticon */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              props.navigation.navigate("BottomTab", { screen: "ChatScreen" });
            }}
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <Image
              style={{
                width: RFPercentage(4),
                height: RFPercentage(4),
              }}
              source={require("../../assets/images/chaticon.png")}
            />
            <Text
              style={{
                fontWeight: "500",
                fontSize: RFPercentage(1.2),
                color: Colors.secondary,
                marginTop: RFPercentage(2),
              }}
            >
              Chat with Provider
            </Text>
          </TouchableOpacity>

          {/* mailicon */}
          <TouchableOpacity
            activeOpacity={0.7}
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <Image
              style={{
                width: RFPercentage(4),
                height: RFPercentage(4),
              }}
              source={require("../../assets/images/mailicon.png")}
            />
            <Text
              style={{
                fontWeight: "500",
                fontSize: RFPercentage(1.2),
                color: Colors.secondary,
                marginTop: RFPercentage(2),
              }}
            >
              Contact via email
            </Text>
          </TouchableOpacity>
        </View>

        {/* shop open time */}
        <View style={{ width: "95%", marginTop: RFPercentage(6) }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: RFPercentage(3),
            }}
          >
            <Text
              style={{
                fontWeight: "500",
                fontSize: RFPercentage(2),
                marginLeft: RFPercentage(3),
                color: Colors.secondary,
              }}
            >
              Opening time
            </Text>
            <View style={{ position: "absolute", right: RFPercentage(3) }}>
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: RFPercentage(2),
                  marginLeft: RFPercentage(3),
                  color: "#959595",
                }}
              >
                10am to 9pm
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: RFPercentage(4),
            }}
          >
            <Text
              style={{
                fontWeight: "500",
                fontSize: RFPercentage(2),
                marginLeft: RFPercentage(3),
                color: Colors.secondary,
              }}
            >
              People Recommended
            </Text>
            <View style={{ position: "absolute", right: RFPercentage(3) }}>
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: RFPercentage(2),
                  marginLeft: RFPercentage(3),
                  color: "#4CAF50",
                }}
              >
                75%
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: RFPercentage(4),
            }}
          >
            <Text
              style={{
                fontWeight: "500",
                fontSize: RFPercentage(2),
                marginLeft: RFPercentage(3),
                color: Colors.secondary,
              }}
            >
              Address
            </Text>
            <View style={{ position: "absolute", right: RFPercentage(3) }}>
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
                  191 Leonora Lane, Pitsburgh PA
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* links */}
        <View style={{ width: "95%", marginTop: RFPercentage(5) }}>
          <Text
            style={{
              fontWeight: "700",
              fontSize: RFPercentage(2.5),
              marginLeft: RFPercentage(3),
              color: Colors.secondary,
            }}
          >
            Find me on:
          </Text>
        </View>
        <View
          style={{
            width: "90%",
            marginTop: RFPercentage(3),
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          {/* globeicon */}
          <TouchableOpacity
            activeOpacity={0.7}
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <Image
              style={{
                width: RFPercentage(3),
                height: RFPercentage(3),
              }}
              source={require("../../assets/images/globeicon.png")}
            />
          </TouchableOpacity>

          {/* youtubeicon */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              props.navigation.navigate("BottomTab", { screen: "ChatScreen" });
            }}
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <Image
              style={{
                width: RFPercentage(3),
                height: RFPercentage(3),
              }}
              source={require("../../assets/images/youtubeicon.png")}
            />
          </TouchableOpacity>

          {/* facebookicon */}
          <TouchableOpacity
            activeOpacity={0.7}
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <Image
              style={{
                width: RFPercentage(3),
                height: RFPercentage(3),
              }}
              source={require("../../assets/images/facebookicon.png")}
            />
          </TouchableOpacity>

          {/* instagram icon */}
          <TouchableOpacity
            activeOpacity={0.7}
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <Image
              style={{
                width: RFPercentage(3),
                height: RFPercentage(3),
              }}
              source={require("../../assets/images/instagramicon.png")}
            />
          </TouchableOpacity>
        </View>

        {/* recent posts */}
        <View style={{ width: "85%", marginTop: RFPercentage(5) }}>
          <Text
            style={{
              fontWeight: "700",
              fontSize: RFPercentage(2.5),
              color: Colors.secondary,
            }}
          >
            Recent Posts
          </Text>
        </View>

        <FlatList
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
            marginLeft: RFPercentage(3),
          }}
          style={{ width: "100%", marginTop: RFPercentage(1.5), flexGrow: 0 }}
          data={linkList}
          keyExtractor={(linkList) => linkList.id.toString()}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({ item }) => (
            <View
              style={{
                width: RFPercentage(15),
                height: RFPercentage(15),
                alignItems: "center",
                justifyContent: "center",
                marginLeft: RFPercentage(1),
              }}
            >
              <ImageBackground
                style={{
                  width: RFPercentage(15),
                  height: RFPercentage(15),
                }}
                source={item.imageSource}
              >
                <View
                  style={{
                    width: RFPercentage(15),
                    height: RFPercentage(15),
                    backgroundColor: "#868686",
                    opacity: 0.6,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <Image
                      style={{
                        width: RFPercentage(5),
                        height: RFPercentage(5),
                      }}
                      source={require("../../assets/images/playicon.png")}
                    />
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
          )}
        />

        {/* like posts */}
        <View style={{ width: "85%", marginTop: RFPercentage(5) }}>
          <Text
            style={{
              fontWeight: "700",
              fontSize: RFPercentage(2.5),
              color: Colors.secondary,
            }}
          >
            Would you recommend
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: RFPercentage(3),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {radioButton ? (
              <View
                style={{
                  width: RFPercentage(2),
                  height: RFPercentage(2),
                  borderRadius: RFPercentage(2),
                  borderColor: Colors.grey,
                  borderWidth: RFPercentage(0.5),
                }}
              ></View>
            ) : (
              <View
                style={{
                  width: RFPercentage(2),
                  height: RFPercentage(2),
                  borderRadius: RFPercentage(2),
                  backgroundColor: Colors.primary,
                }}
              ></View>
            )}

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                [setRadioButton(false)];
              }}
            >
              <Image
                style={{
                  width: RFPercentage(5),
                  height: RFPercentage(5),
                  marginLeft: RFPercentage(1),
                }}
                source={require("../../assets/images/thumblikeicon.png")}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingLeft: RFPercentage(8),
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {radioButton ? (
              <View
                style={{
                  width: RFPercentage(2),
                  height: RFPercentage(2),
                  borderRadius: RFPercentage(2),
                  backgroundColor: Colors.primary,
                }}
              ></View>
            ) : (
              <View
                style={{
                  width: RFPercentage(2),
                  height: RFPercentage(2),
                  borderRadius: RFPercentage(2),
                  borderColor: Colors.grey,
                  borderWidth: RFPercentage(0.5),
                }}
              ></View>
            )}
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                [setRadioButton(true)];
              }}
            >
              <Image
                style={{
                  width: RFPercentage(5),
                  height: RFPercentage(5),
                  marginLeft: RFPercentage(1),
                }}
                source={require("../../assets/images/thumbunlikeicon.png")}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* add review */}
        <View
          style={{
            width: "85%",
            marginTop: RFPercentage(5),
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "700",
              fontSize: RFPercentage(2.5),
              color: Colors.secondary,
            }}
          >
            Add a Review
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setModalVisible(true)}
            style={{
              width: RFPercentage(5),
              height: RFPercentage(5),
              borderRadius: RFPercentage(1),
              backgroundColor: Colors.grey,
              alignItems: "center",
              justifyContent: "center",
              marginLeft: RFPercentage(3),
            }}
          >
            <Text
              style={{
                fontWeight: "700",
                fontSize: RFPercentage(3),
                color: Colors.white,
              }}
            >
              +
            </Text>
          </TouchableOpacity>
        </View>

        {/* Review Modal */}
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
              justifyContent: "flex-end",
              alignItems: "center",
              marginTop: 29,
            }}
          >
            <View
              style={{
                width: "100%",
                height: RFPercentage(67),
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

              {/* title */}
              <TouchableOpacity activeOpacity={0.7}>
                <Text
                  style={{
                    fontSize: RFPercentage(3),
                    color: Colors.primary,
                    fontWeight: "600",
                  }}
                >
                  Add a Review
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  width: "100%",
                  marginTop: RFPercentage(3),
                  marginRight: RFPercentage(3),
                }}
              >
                <InputField title="Name" placeholder="Enter Name" />
                <View style={{ marginTop: RFPercentage(3) }}>
                  <Text
                    style={{
                      fontSize: RFPercentage(2),
                      fontWeight: "700",
                      color: Colors.secondary,
                      marginBottom: RFPercentage(1.5),
                    }}
                  >
                    Comment
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
                      style={{
                        fontSize: RFPercentage(2),
                        width: RFPercentage(45),
                      }}
                      onChangeText={onChangeDescription}
                      value={description}
                      placeholder="Enter comment"
                      placeholderTextColor={Colors.placeholder}
                    />
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: RFPercentage(3),
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "600",
                      fontSize: RFPercentage(2.5),
                      color: Colors.secondary,
                    }}
                  >
                    Rate it
                  </Text>
                  <View
                    style={{
                      width: "50%",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {/* 1 star */}
                    {fillstar == true ? (
                      <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {
                          setFillstar(false);
                        }}
                      >
                        <Image
                          style={{
                            width: RFPercentage(4),
                            height: RFPercentage(4),
                          }}
                          source={require("../../assets/images/staricon.png")}
                        />
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {
                          setFillstar(true);
                        }}
                      >
                        <Image
                          style={{
                            width: RFPercentage(4),
                            height: RFPercentage(4),
                          }}
                          source={require("../../assets/images/holostaricon.png")}
                        />
                      </TouchableOpacity>
                    )}

                    {/* 2 star */}
                    {fillstar == true ? (
                      <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {
                          setFillstar(false);
                        }}
                      >
                        <Image
                          style={{
                            width: RFPercentage(4),
                            height: RFPercentage(4),
                          }}
                          source={require("../../assets/images/staricon.png")}
                        />
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {
                          setFillstar(true);
                        }}
                      >
                        <Image
                          style={{
                            width: RFPercentage(4),
                            height: RFPercentage(4),
                          }}
                          source={require("../../assets/images/holostaricon.png")}
                        />
                      </TouchableOpacity>
                    )}

                    {/* 3 star */}
                    {fillstar == true ? (
                      <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {
                          setFillstar(false);
                        }}
                      >
                        <Image
                          style={{
                            width: RFPercentage(4),
                            height: RFPercentage(4),
                          }}
                          source={require("../../assets/images/staricon.png")}
                        />
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {
                          setFillstar(true);
                        }}
                      >
                        <Image
                          style={{
                            width: RFPercentage(4),
                            height: RFPercentage(4),
                          }}
                          source={require("../../assets/images/holostaricon.png")}
                        />
                      </TouchableOpacity>
                    )}

                    {/* 4 star */}
                    {fillstar == true ? (
                      <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {
                          setFillstar(false);
                        }}
                      >
                        <Image
                          style={{
                            width: RFPercentage(4),
                            height: RFPercentage(4),
                          }}
                          source={require("../../assets/images/staricon.png")}
                        />
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {
                          setFillstar(true);
                        }}
                      >
                        <Image
                          style={{
                            width: RFPercentage(4),
                            height: RFPercentage(4),
                          }}
                          source={require("../../assets/images/holostaricon.png")}
                        />
                      </TouchableOpacity>
                    )}

                    {/* 5 star */}
                    {fillstar == true ? (
                      <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {
                          setFillstar(false);
                        }}
                      >
                        <Image
                          style={{
                            width: RFPercentage(4),
                            height: RFPercentage(4),
                          }}
                          source={require("../../assets/images/staricon.png")}
                        />
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {
                          setFillstar(true);
                        }}
                      >
                        <Image
                          style={{
                            width: RFPercentage(4),
                            height: RFPercentage(4),
                          }}
                          source={require("../../assets/images/holostaricon.png")}
                        />
                      </TouchableOpacity>
                    )}
                  </View>
                </View>

                {/* button */}
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => setModalVisible(!modalVisible)}
                  style={{
                    marginTop: RFPercentage(4),
                    marginBottom: RFPercentage(4),
                  }}
                >
                  <AppButton title="Submit" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        {/* Reviews */}
        <View
          style={{
            width: "90%",
            marginTop: RFPercentage(2),
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {/* picture */}
            <View
              style={{
                width: RFPercentage(10),
                height: RFPercentage(10),
                alignItems: "center",
                justifyContent: "center",
                borderRadius: RFPercentage(5),
                overflow: "hidden",
              }}
            >
              <Image
                style={{ width: RFPercentage(7), height: RFPercentage(7) }}
                source={require("../../assets/images/profilepic.png")}
              />
            </View>

            {/* text */}
            <View style={{ marginLeft: RFPercentage(1) }}>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontWeight: "600",
                    fontSize: RFPercentage(2),
                    color: Colors.secondary,
                  }}
                >
                  Lara Shane
                </Text>
                <View
                  style={{
                    position: "absolute",
                    right: 0,
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
                    5
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  fontWeight: "300",
                  fontSize: RFPercentage(1.5),
                  color: Colors.grey,
                  marginTop: RFPercentage(1),
                }}
              >
                Really Amazing service provide by this Designer
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}
