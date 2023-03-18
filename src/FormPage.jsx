import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MyInput from "./MyInput";

export default function FormPage({ navigation }) {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [Email, setEmail] = useState("");
  const img = require("../assets/logoNew.png");
  const image = require("../assets/formImg.jpeg");
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.logo}>
          <Image source={img} style={styles.image1} />
        </View>
        <View style={styles.new}>
          <Text style={styles.heading}>Welcome to NewsLetter Form!</Text>
          <MyInput
            myholder="First Name"
            MyChange={(e) => {
              setfName(e);
            }}
          />
          <MyInput
            myholder="Last Name"
            MyChange={(e) => {
              setlName(e);
            }}
          />
          <MyInput
            myholder="Email Address"
            MyChange={(e) => {
              setEmail(e);
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.div}
          onPress={() =>
            navigation.navigate("ThankYou", {
              paramKey: fName,
              paramKey1: lName,
              paramKey2: Email,
            })
          }
        >
          <Text style={{ color: "white", fontSize: 20, margin: 2 }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    margin: 20,
    borderColor: "#CBEDD5",
    backgroundColor: "#CBEDD5",
    borderRadius: 100,
  },
  new: {
    padding: 20,
    margin: 20,
    alignItems: "center",
    borderWidth: 5,
    borderColor: "#E8F3D6",
    backgroundColor: "#E8F3D6",
    borderRadius: 60,
  },
  image1: {
    width: 150,
    height: 150,
  },
  image: {
    flex: 1,
    alignItems: "center",
  },
  div: {
    padding: 10,
    backgroundColor: "#439A97",
    borderColor: "white",
    width: -100,
    margin: 20,
    borderRadius: 20,
  },
  container: {
    flex: 1,
  },
  heading: {
    color: "black",
    padding: 20,
    fontSize: 25,
    textAlign: "center",
  },
});
