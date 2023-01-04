import { View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import HeaderTabs from "../Components/Headertabs";
import SearchBar from "../Components/SearchBar";
import Categories from "../Components/Categories";
import RestaurantItem from "../Components/RestaurantItem";

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "#fff", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem />
      </ScrollView>
    </SafeAreaView>
  );
}
