import { View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import HeaderTabs from "../Components/Headertabs";
import SearchBar from "../Components/SearchBar";
import Categories from "../Components/Categories";
import RestaurantItems, { localRestaurant } from "../Components/RestaurantItems";

export default function Home() {
  const [restaurantData, setrestaurantData] = React.useState(localRestaurant);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "#fff", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}
