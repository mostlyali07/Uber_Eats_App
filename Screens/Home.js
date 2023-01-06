import { View, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect } from "react";
import HeaderTabs from "../Components/Headertabs";
import SearchBar from "../Components/SearchBar";
import Categories from "../Components/Categories";
import RestaurantItems, {
  localRestaurant,
} from "../Components/RestaurantItems";

const YELP_API_KEY =
  "bdRJutLhFAQJ36t7b89CWjHFBU40Kzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";

export default function Home() {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurant);
  const getRestaurantsFromYelp = () => {
    const yelpUrl =
      "https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego";
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => setRestaurantData(json.businesses));
  };
  useEffect(() => {
    // getRestaurantsFromYelp();
  }, []);
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
