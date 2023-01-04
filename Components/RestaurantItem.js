import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantItem() {
  return (
    <View>
      <RestaurantImage />
      {/* <RestaurantInfo/> */}
    </View>
  );
}

const RestaurantImage = () => (
  <>
    <Image
      source={{
        uri: "https://images.dailyhive.com/20160607065519/WineRestaurantsMontreal.jpg",
      }}
      style={{
        width: "100%",
        height: 180,
      }}
    />
    <TouchableOpacity style={{position: "absolute", right: 20, top: 20,}}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);
