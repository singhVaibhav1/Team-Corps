import { Image, StyleSheet, Text, View, TextInput,ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
  const navigation= useNavigation();
  const handleRegister= ()=>{
    navigation.navigate("Signup");

  }
  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image
          source={require("../assets/topVector.png")}
          style={styles.topImage}
        />
      </View>
      <View>
        <Text style={styles.createAccountText}>Create Account</Text>
      </View>
      <View style={styles.inputContainer}>
         <FontAwesome name={"user"} size={24} color={"#9A9A9A"} style={styles.inputicon} 
        placeholder="Username"/>
        <TextInput style={styles.textInput} />
      </View>
      <View style={styles.inputContainer}>
        <Fontisto name={"locked"} size={24} color={"#9A9A9A"} style={styles.inputicon} 
        placeholder="Password" secureTextEntry/> 
        <TextInput style={styles.textInput} />
      </View>
      <View style={styles.inputContainer}>
         <AntDesign name={"mail"} size={24} color={"#9A9A9A"} style={styles.inputicon} 
        placeholder="Email"/>
        <TextInput style={styles.textInput} />
      </View>
      <View style={styles.inputContainer}>
         <AntDesign name={"mobile1"} size={24} color={"#9A9A9A"} style={styles.inputicon} 
        placeholder="Mobile"/>
        <TextInput style={styles.textInput} />
      </View>
      <View style={styles.signInButtonContainer}>
        <Text style={styles.signIn}>Sign in</Text>
        <LinearGradient colors={['#F97794', '#623AA2']} style={styles.linearGradient}>
           <AntDesign name={"arrowright"} size={24} color={"white"} style={styles.inputicon}/> 
        </LinearGradient>
      </View>
      <View style={styles.footerContainer}>
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.footerText}> Or create account using social media</Text>
      <View style={styles.socialMediaContainer}>
      <Entypo name={"facebook-with-circle"} size={30} color={"blue"} style={styles.socialIcon}/>
      <Entypo name={"twitter-with-circle"} size={30} color={"blue"} style={styles.socialIcon}/>
      <AntDesign name={"google"} size={30} color={"blue"} style={styles.socialIcon}/>
      </View>
      </TouchableOpacity>
      </View>
      <View style={styles.leftVectorContainer}>
        <ImageBackground source={require("../assets/bottom.png")} style={styles.leftVectorImage}/>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    flex: 1,
    position: "relative",
  },
  topImageContainer: {},
  topImage: {
    width: "100%",
    height: 130,
  },
  helloContainer: {},
  helloText: {
    textAlign: "center",
    fontSize: 70,
    fontWeight: "500",
    color: "#262626",
  },
  createAccountText: {
    textAlign: "center",
    fontSize: 30,
    color: "#262626",
    marginBottom: 30,
    fontWeight: "bold",
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    FlexDirection: "row",
    borderRadius: 20,
    merginHorizontal: 40,
    elevation: 10,
    marginVertical: 20,
    alignItems: "center",
    height: 50,
    width: "80%",
    alignSelf:"center",
  },
  inputicon: {
    marginLeft: 15,
    marginRight: 5,
  },
  textInput: {
    flex: 1,
  },
  forgotPasswordText:{
    color: "#BEBEBE",
    textAlign: "right",
    width: "90%",
    fontSize: 15,
  },
  signInButtonContainer:{
    flexDiretion: "row",
    marginTop: 40,
    width: "90%",
    justifyContent: "flex-end",
    alignSelf:'center',
    flexDirection:'row',
  },
  signIn: {
    color: "#262626",
    fontSize: 25,
    fontWeight: "bold",
  },
  linearGradient: {
    height: 34,
    width: 56,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  footerText: {
    color: "#262626",
    textAlign: "center",
    fontSize: 16,
  },
  leftVectorContainer:{
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  leftVectorImage:{
    height: 350,
    width: 150,
  },
  footerContainer: {
    marginTop: 25,
  },
  socialMediaContainer: {
    dispaly: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  socialIcon:{
    backgroundColor: "white",
    elevation: 10,
    margin: 10,
    padding: 10,
    borderRadius: 50,
  }
});
