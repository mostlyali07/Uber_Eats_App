import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const localRestaurant = [
  {
    name: "Beachside Bar",
    image_url:
      "https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fEJlYWNoc2lkZSUyMEJhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    Categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "benihana",
    image_url:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHJlc3R1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    Categories: ["Cafe", "Dish"],
    price: "$$",
    reviews: 1454,
    rating: 3.5,
  },
  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1627924275601-192d69e3529b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHJlc3R1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    Categories: ["Cafe", "INdian"],
    price: "$$",
    reviews: 1114,
    rating: 4.1,
  },
];

export default function RestaurantItem() {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      {localRestaurant.map((restaurant, index) => (
        <View
          key={index}
          style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
        >
          <RestaurantImage image={localRestaurant[0].image_url} />
          <RestaurantInfo
            name={localRestaurant[0].name}
            rating={localRestaurant[0].rating}
          />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{
        width: "100%",
        height: 180,
        borderRadius: 6,
      }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
        Farmhouse Kitchen Thai Cuisine
      </Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 • min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>4.5</Text>
    </View>
  </View>
);
