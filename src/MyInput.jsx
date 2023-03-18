import { StyleSheet, TextInput } from "react-native";
import React from 'react'

export default function MyInput({MyChange, myholder}) {
  return (
    <TextInput placeholder= {myholder} onChangeText={MyChange} style ={styles.box}></TextInput>
  )
}

const styles = StyleSheet.create({
    box:{
      textAlign:'center' ,
      backgroundColor: "white", 
      borderColor:"black", 
      borderWidth:2, 
      width: 175, 
      borderRadius: 10, 
      margin: 5, padding: 1,
    }
  });


