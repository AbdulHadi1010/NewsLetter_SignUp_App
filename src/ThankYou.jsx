import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import axios from "axios";

export default function ThankYou({route, navigation}){
  const [apiData, setApiData] = useState();
  const [loading, setLoading] = useState(true);
    const image = require( "../assets/LastImg.jpg");
    const img = require( "../assets/logoNew.png");
    const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

    const callApi = () => {
      var config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://api.goprogram.ai/inspiration',
        headers: { }
      };
      
      axios(config)
      .then(function (response) {
        setApiData(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
    };
    useEffect(() => {callApi();}, []);

    return(
    <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
    <View style = {styles.logo}>
    <Image source={img} style={styles.image1}/>
    </View>
    <View style={styles.new}>
    <Text style = {styles.heading}>Thank You <B>{route.params.paramKey} {route.params.paramKey1}</B> for signing up for the NewsLetter</Text>
    <Text style = {{marginTop: 5,paddingTop: 5,fontSize: 20,textAlign: 'center'}}>We will be sending you updates at:</Text><Text style = {{marginTop: 5, marginBottom: 5,paddingBottom: 5,fontSize: 20,}}><B>{route.params.paramKey2}</B></Text>
    <View style={styles.quote}>
    <Text><B>Quote of the day:</B></Text>
    {loading ? (<ActivityIndicator size="large" color="#00ff00" />):(<><Text style = {{marginTop: 10,fontSize: 15,textAlign:'center',}}>"{apiData?.quote}"</Text><Text style = {{marginTop: 10}}><B>{apiData?.author}</B></Text></>)}
    </View>
    <Text style = {{padding: 15,fontSize: 20}}>(Have a Nice Day! ❤️)</Text>
    </View>
    <TouchableOpacity style = {styles.div}  onPress={() => navigation.navigate("Home")}>
        <Text style= {{color: "silver"}}>Go Home</Text>
        </TouchableOpacity>
    </ImageBackground>
    </View>
    );
}
const styles = StyleSheet.create({
  logo:{
    margin: 20,
    borderColor: '#E3F6FF',
    backgroundColor: '#E3F6FF',   
    borderRadius: 100,
  },
  quote:{
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 10,
    alignItems:'center',
    borderWidth: 5,
    borderColor: '#C0EDA6',
    backgroundColor: '#C0EDA6',   
    borderRadius: 30,
  },
    new:{
      padding: 20,
      margin: 20,
      alignItems:'center',
      borderWidth: 5,
      borderColor: '#9DF1DF',
      backgroundColor: '#9DF1DF',   
      borderRadius: 30,
    },
    image1: {
      width: 150, 
      height: 150,
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
        padding: 10, 
        fontSize: 20,
        textAlign: 'center',
      }
      
  });