import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

const items = [
  {
    image: require("../Assests/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image: require("../Assests/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../Assests/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../Assests/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("../Assests/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../Assests/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    image: require("../Assests/images/desserts.png"),
    text: "Desserts",
  },
];

export default function Categories() {
  return (
    <View style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
    }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
            <Image
              source={item.image}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
              }}
            />
            <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
