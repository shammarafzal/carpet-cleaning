import { StyleSheet, View, Text, TextInput, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import DealsItem from "../components/dealsItem";
import logo from "../assets/transparent-logo.png";

export default function HomeScreen({ navigation }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  const [deals, setDeals] = useState([{ img: logo, key: "1" }]);
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((deals) => deals.key != key);
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <MaterialIcons name="map" size="25" />
        <Text style={styles.title}>330 Amity Rd, Woodvridge, CT 0625</Text>
      </View>
      <View style={styles.searchSection}>
        <MaterialIcons
          style={styles.searchIcon}
          name="search"
          size={20}
          color="#000"
        />
        <TextInput
          style={styles.input}
          placeholder="New Todo"
          onChangeText={changeHandler}
        />
      </View>
      <View style={styles.list}>
        <FlatList
          data={deals}
          renderItem={({ item }) => (
            <DealsItem item={item} pressHandler={pressHandler} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    padding: 20,
  },
  head: {
    flexDirection: "row",
    marginTop: 50,
    justifyContent: "space-around",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    color: "black",
    flex: 1,
  },
  searchSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    marginTop: 10,
    borderColor: "grey",
  },
  searchIcon: {
    padding: 10,
    color: "grey",
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "grey",
  },
});
