import {
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import React, { useState, useRef } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
const { width } = Dimensions.get("window");
const SPACING = 10;
const THUMB_SIZE = 80;

const IMAGES = {
  image1: require("../assets/transparent-logo.png"),
  image2: require("../assets/transparent-logo.png"),
};

state = {
  data: [
    {
      name: "Carpet Cleaning",
      photo:
        "https://image.shutterstock.com/image-vector/persian-carpet-original-design-tribal-600w-2023724756.jpg",
    },
    {
      name: "Carpet Repairing",

      photo:
        "https://image.shutterstock.com/image-photo/low-section-person-cleaning-carpet-600w-1079107034.jpg",
    },
    {
      name: "Carpet Stretching",

      photo:
        "https://image.shutterstock.com/image-photo/close-washing-carpets-high-pressure-600w-1938454543.jpg",
    },
    {
      name: "Upholstery Cleaning",

      photo:
        "https://image.shutterstock.com/image-photo/cleaning-couch-steam-cleaner-600w-621158207.jpg",
    },
    {
      name: "Hardwood Floor Cleaning",

      photo:
        "https://image.shutterstock.com/image-photo/carpets-chemical-cleaning-professionally-disk-600w-412627123.jpg",
    },
    {
      name: "Flooring Installation",

      photo:
        "https://image.shutterstock.com/image-photo/people-housework-housekeeping-concept-close-600w-267355748.jpg",
    },
  ],
};

export default function HomeScreen({ navigation }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };
  const [images, setImages] = useState([
    { id: "1", image: IMAGES.image1 },
    { id: "2", image: IMAGES.image2 },
  ]);
  const [indexSelected, setIndexSelected] = useState(0);

  const onSelect = (indexSelected) => {
    setIndexSelected(indexSelected);
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
          placeholder="Search for Services"
          onChangeText={changeHandler}
        />
      </View>
      <View style={{ flex: 1, marginTop: 20 }}>
        <Carousel
          layout="default"
          data={images}
          sliderWidth={width}
          itemWidth={width}
          renderItem={({ item, index }) => (
            <Image
              key={index}
              style={{ width: "100%", height: "100%" }}
              resizeMode="contain"
              source={item.image}
            />
          )}
        />
        <Pagination
          inactiveDotColor="gray"
          dotColor={"orange"}
          activeDotIndex={indexSelected}
          dotsLength={images.length}
          animatedDuration={150}
          inactiveDotScale={1}
        />
      </View>
      <Text style={[styles.title, { fontWeight: "bold" }]}>Our Services</Text>
      <View style={styles.containerlist}>
        <FlatList
          numColumns={3}
          style={{ flex: 1 }}
          data={this.state.data}
          renderItem={({ item }) => <Item item={item} />}
          // keyExtractor={(item) => item.email}
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
    backgroundColor: "#fff",
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
  containerlist: {
    backgroundColor: "#fff",

    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: "#FFF",
    // width: "80%",
    flex: 1,
    alignSelf: "center",
    borderRadius: 5,
  },
});

function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <Image
        source={{ uri: item.photo }}
        style={{ width: 80, height: 80, alignSelf: "center" }}
      />
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
      </View>
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      ></TouchableOpacity>
    </View>
  );
}
