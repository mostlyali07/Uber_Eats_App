import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import HeaderTabs from "../Components/Headertabs";
import SearchBar from "../Components/SearchBar";
import Categories from "../Components/Categories";

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor:'#eee', flex: 1}}>
      <View style={{ backgroundColor:'#fff', padding: 15}}>
        <HeaderTabs />
        <SearchBar/>
      </View>
      <Categories />
    </SafeAreaView>
  );
}
