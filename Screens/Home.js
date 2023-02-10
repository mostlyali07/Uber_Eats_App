import { View, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../Components/Headertabs";
import SearchBar from "../Components/SearchBar";
import Categories from "../Components/Categories";
import RestaurantItems, {
  localRestaurant,
} from "../Components/RestaurantItems";

const YELP_API_KEY =
  "EsYloYqP37HhzSoF3wb9in5RbnwXpK-1qpguSRM-i8kDe7VYSEUe93lf3TLbtPeumha-vom1J4Ob9lABzH9a6JOV9I0Vw1_oqj84Fhm7H6Cn6LgWxXNPJ7iGLsi7Y3Yx";

export default function Home() {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurant);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };
  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "#fff", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}
