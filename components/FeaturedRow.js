import { View, Text, ScrollView } from "react-native";
import React from "react";
// import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description, partners }) => {
  return (
    <View>
      <View className="flex-row items-center mt-4 px-4 justify-between">
        <Text className="font-bold text-lg">{title}</Text>
        {/* <ArrowRightIcon color="#00CCBB" size={20} /> */}
      </View>
      <Text className="text-xs px-4 text-gray-400">{description}</Text>

      {/* CARDS */}
      <ScrollView
        className="px-4"
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {partners?.map((partner, index) => (
          <RestaurantCard
            key={index}
            numberOfReviews={partner.numberOfReviews}
            rating={partner.rating}
            distance={partner.distance}
            costOfDelivery={partner.costOfDelivery}
            title={partner.title}
            image={partner.image}
            stimatedTime={partner.stimatedTime}
            address={"Roma, RM, Via dei Gozzadini 24"}
            category={"Test"}
            description="Nandio's is a South African multinational fast casual chain
            than specialises in flame grilled peri-peri style chicken"
            menus={partner.menus}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
