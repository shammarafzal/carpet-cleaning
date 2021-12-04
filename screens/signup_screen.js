import React, { useState, useRef } from "react";
import { StyleSheet, Image, View, Text, Alert, Pressable } from "react-native";
import logo from "../assets/transparent-logo.png";
import cleaner_logo from "../assets/cleaner_vector.png";
import PhoneInput from "react-native-phone-number-input";
import CustomButton from "../components/customButtom";

export default function SignupScreen({ navigation }) {
  const [phoneNumber, setphoneNumber] = useState("");
  const phoneInput = useRef(null);
  const buttonPress = () => {
    Alert.alert(phoneNumber);
  };
  const pressHandler = () => {
    navigation.navigate("PinCodeScreen");
  };
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Your Carpet Service Expert</Text>
      <Text style={[styles.title, { color: "grey", fontWeight: "normal" }]}>
        Affordable . Trusted
      </Text>
      <PhoneInput
        ref={phoneInput}
        defaultValue={phoneNumber}
        defaultCode="US"
        layout="first"
        withShadow
        autoFocus
        containerStyle={styles.phoneContainer}
        textContainerStyle={styles.textInput}
        onChangeFormattedText={(text) => {
          setphoneNumber(text);
        }}
      />
      <CustomButton titleText="Continue" submitHandler={pressHandler} />
      <Image source={cleaner_logo} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 180,
    height: 180,
    alignSelf: "center",
    marginTop: 50,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  phoneContainer: {
    width: "75%",
    height: 50,
    marginTop: 40,
  },
});
