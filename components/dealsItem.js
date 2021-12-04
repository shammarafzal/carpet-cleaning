import React from "react";
import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import logo from "../assets/transparent-logo.png";
export default function DealsItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <Image style={styles.logo} source={logo} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: "row",
  },
  logo: {
    width: 180,
    height: 180,
    alignSelf: "center",
    marginTop: 50,
  },
  text: {
    color: "black",
  },
});
