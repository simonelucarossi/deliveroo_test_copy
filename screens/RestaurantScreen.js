import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
// import {
//   ArrowLeftIcon,
//   ArrowRightIcon,
//   ChevronRightIcon,
//   StarIcon,
// } from "react-native-heroicons/solid";
// import { LocationMarkerIcon, ShareIcon } from "react-native-heroicons/solid";
// import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import Icon from "react-native-vector-icons/AntDesign";

import Menu from "../components/Menu";
import Basket from "../components/Basket";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const {
    params: {
      title,
      stimatedTime,
      rating,
      numberOfReviews,
      distance,
      costOfDelivery,
      category,
      address,
      image,
      description,
      menus,
    },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

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

  return (
    <>
      <Basket />
      <ScrollView className="pb-10 z-0">
        {/* FEATURED IMAGE */}
        <View className="relative">
          <Image
            source={{
              uri: image,
            }}
            className="w-full h-56 p-4"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute bg-white rounded-full p-2 left-3 top-10"
          >
            <Icon name="arrowleft" color="#00CCBB" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute bg-white items-center rounded-full p-2 right-3 top-10"
          >
            <Icon name="sharealt" color="#00CCBB" />
          </TouchableOpacity>
        </View>
        {/* DESCRIPTION BOX */}
        <View className="p-3 bg-white">
          <Text className="font-bold text-xl">{title}</Text>
          <View className="pt-1 flex-row items-center space-x-1">
            <Icon
              name="staro"
              size={15}
              opacity={0.5}
              color={colorsOfReviews[getStatusOfReview(rating)]}
            />
            {/* <StarIcon
                size={15}
                opacity={0.5}
                color={colorsOfReviews[getStatusOfReview(rating)]}
              /> */}
            <Text
              className={`${
                classNameOfReview[getStatusOfReview(rating)]
              } text-xs`}
            >
              {rating} ·
            </Text>
            <Text className="text-gray-400 text-xs">{category}</Text>
            <View className="flex-row items-center space-x-1">
              {/* <LocationMarkerIcon size={15} opacity={0.5} color="gray" /> */}
              <Text className="text-gray-400 text-xs">
                {distance}km · {address}
              </Text>
            </View>
          </View>
          <Text className="text-gray-400 py-2 text-sm">{description}</Text>
        </View>
        <TouchableOpacity className="flex-row bg-white space-x-2 p-3 border-y border-gray-300">
          {/* <QuestionMarkCircleIcon color={"gray"} size={20} opacity={0.6} /> */}
          <Text className=" flex-1 text-md font-bold">
            Do you have a food allergy?
          </Text>
          {/* <ChevronRightIcon color={"#00CCBB"} size={20} /> */}
        </TouchableOpacity>
        {/* MENUS */}
        {menus ? (
          menus?.map((menu, index) => (
            <Menu key={index} title={menu.title} dishes={menu.dishes} />
          ))
        ) : (
          <View className="items-center mt-3">
            <Text className="text-gray-400 font-bold">
              No menu found for this shop
            </Text>
          </View>
        )}
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
