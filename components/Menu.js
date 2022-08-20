import { View, Text } from "react-native";
import React, { useState } from "react";
import Dish from "./Dish";

const Menu = ({ title, dishes }) => {
  return (
    <View className="space-y-2 my-3">
      <Text className="px-3 text-lg font-bold">{title ?? "Menu"}</Text>
      <View className="border-gray-200 border-t bg-white">
        {dishes
          ? dishes?.map((dish, index) => (
              <Dish
                key={index}
                id={dish.id}
                title={dish.title}
                ingredients={dish.ingredients}
                image={dish.image}
                price={dish.price}
              />
            ))
          : undefined}
      </View>
    </View>
  );
};

export default Menu;
