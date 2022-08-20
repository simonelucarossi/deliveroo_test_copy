import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { getTotalCost, selectBasketItems } from "../features/basketCounter";
import { useNavigation } from "@react-navigation/native";

const Basket = () => {
  const total = useSelector(getTotalCost);
  const itemsInTheBasket = useSelector(selectBasketItems);
  const navigation = useNavigation();

  return (
    <View className="absolute w-full flex-1 bottom-6 z-20 p-3">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket", {})}
        className="bg-[#00CCBB] p-4 items-center rounded-lg flex-row space-x-2"
      >
        <View className="bg-[#118076] p-2 rounded-sm  items-center">
          <Text className="font-extrabold text-white">
            {itemsInTheBasket.length}
          </Text>
        </View>
        <Text className="font-extrabold flex-1 text-center text-white">
          View basket
        </Text>
        <Text className="font-extrabold text-white">€{total.toFixed(2)}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Basket;
