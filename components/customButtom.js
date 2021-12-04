import React from "react";
import { StyleSheet, View, Button } from "react-native";

export default function CustomButton({ titleText, submitHandler }) {
  return (
    <View style={styles.btn}>
      <Button title={titleText} color="white" onPress={() => submitHandler()} />
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    alignSelf: "center",
    backgroundColor: "dodgerblue",
    borderRadius: 10,
    width: 350,
    height: 50,
    marginTop: 20,
    borderColor: "dodgerblue",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
