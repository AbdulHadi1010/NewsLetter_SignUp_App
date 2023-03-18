import React from 'react'
import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function LandingPage ({navigation}) {
  const img1 = require('../assets/BgPic.jpeg');
  const img = require( "../assets/logoNew.png");
  return (
    <View style={styles.container}>
    <ImageBackground source={img1} style={styles.image}>
    <Image source={img} style={styles.image1}/>
    <Text style = {styles.heading}>Welcome to New Future of Designs</Text>
    <View style = {styles.new}>
      <Text style = {styles.heading}>Click the Button to Sign up for the Newsletter</Text>
      <TouchableOpacity style = {styles.div}  onPress={() => navigation.navigate("Form")}>
        <Text style= {{color: "silver", fontSize: 15}}>Go to form</Text>
        </TouchableOpacity>
        <Text style = {{padding: 15,fontSize: 15}}>(Good Luck! 👍)</Text>
    </View>
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  new:{
    padding: 30,
    margin: 20,
    alignItems:'center',
    borderColor: '#D7FBF6',
    backgroundColor: '#D7FBF6',   
    borderRadius: 30,
  },
  image1: {
    width: 200, 
    height: 200,
  },
    image: {
      flex: 1,
      alignItems:'center',
    },
    div: {
      padding: 10,
      backgroundColor: "#0E0220", 
      margin: 10,
      borderRadius: 10, 
      alignItems:'center',
      width: 100,
      justifyContent: 'center',
    },
    container: {
      flex: 1,
    },
    heading:{
      color: "#261C2C", 
      padding: 25, 
      fontSize: 21,
      fontWeight: 'bold',
      textAlign: 'center',
    }
    
});