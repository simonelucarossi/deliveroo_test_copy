import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
// import { StarIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/FontAwesome";

const RestaurantCard = ({
  title,
  stimatedTime,
  rating,
  numberOfReviews,
  distance,
  costOfDelivery,
  image,
  address,
  category,
  description,
  menus,
}) => {
  const colorsOfReviews = {
    LOW: "red",
    MEDIUM: "orange",
    HIGH: "blue",
    EXCELLENT: "green",
    undefined: "gray",
  };

  const classNameOfReview = {
    LOW: "text-red-800",
    MEDIUM: "text-orange-600",
    HIGH: "text-blue-600",
    EXCELLENT: "text-green-600",
    undefined: "text-gray-600",
  };

  const getStatusOfReview = (rating) => {
    if (rating >= 4.75) return "EXCELLENT";
    else if (rating >= 3.5) return "HIGH";
    else if (rating >= 2.5) return "MEDIUM";
    else if (!rating) return "undefined";
    return "LOW";
  };

  const navigate = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigate.navigate("Restaurant", {
          title,
          stimatedTime,
          rating,
          numberOfReviews,
          distance,
          costOfDelivery,
          image,
          address,
          category,
          description,
          menus,
        })
      }
      className="bg-white rounded-md mt-2 relative mr-2"
    >
      <Image
        source={{
          uri: image,
        }}
        className="w-64 h-36 mb-2 rounded-t-md"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <Icon
            name="star"
            size={15}
            opacity={0.5}
            color={colorsOfReviews[getStatusOfReview(rating)]}
          />
          <Text
            className={`text-sm ${
              classNameOfReview[getStatusOfReview(rating)]
            }`}
          >{`${rating ?? "No"} ${
            !rating ? "review" : getStatusOfReview(rating).toLocaleLowerCase()
          }`}</Text>
          <Text className="text-xs text-gray-400">{`(${
            numberOfReviews > 500 ? "500+" : numberOfReviews
          })`}</Text>
        </View>
        <View className="flex-row items-center space-x-1 pt-1">
          <Text className="text-xs text-gray-600">{`Distance: ${distance} km ${
            costOfDelivery === 0 ? "· Free delivery" : ""
          }`}</Text>
        </View>
      </View>
      {costOfDelivery === 0 ? (
        <View className="absolute top-1 left-1 rounded-sm bg-red-800 px-2 py-1">
          <Text className="text-white text-xs font-bold">Free delivery</Text>
        </View>
      ) : null}
      <View className="absolute right-4 top-2/4 mt-1 rounded-md shadow bg-white flex-col py-1 px-3 items-center">
        <Text className="text-md font-bold"> {stimatedTime}</Text>
        <Text className="text-xs text-gray-400"> min</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
