import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
// import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  selectBasketItemsById,
  removeFromBasket,
} from "../features/basketCounter";

import Icon from "react-native-vector-icons/AntDesign";

const Dish = ({ id, title, ingredients, image, price }) => {
  const [pressed, setPressed] = useState(false);
  const itemsInTheBasket = useSelector((state) =>
    selectBasketItemsById(state, id)
  );
  const dispatch = useDispatch();

  const addElementToBasket = () => {
    dispatch(addToBasket({ id, title, ingredients, image, price }));
  };

  const removeElementFromBasket = () => {
    if (itemsInTheBasket.length === 0) return;
    dispatch(removeFromBasket({ id }));
  };

  return (
    <TouchableOpacity
      onPress={() => setPressed(!pressed)}
      className="border-b border-gray-200"
    >
      <View className="p-3 flex-row space-x-2">
        {/* TITLE & DESCRIPTION */}
        <View className="flex-1">
          {/* TITLE */}
          <Text className="text-sm font-bold pb-1">{title}</Text>
          {/* INGREDIENTS */}
          <Text className="text-xs text-gray-300">
            {ingredients.toString()}
          </Text>
          {/* PRICE */}
          <Text className="text-sm pt-2 italic text-gray-300">
            €{price.toFixed(2)}
          </Text>
        </View>
        {/* IMAGE */}
        <View>
          <Image className="w-20 h-20 rounded-sm" source={{ uri: image }} />
        </View>
      </View>
      {/* COUNTER */}
      {pressed ? (
        <View className="flex-row space-x-2 pb-3 px-3 items-center">
          <TouchableOpacity
            disabled={itemsInTheBasket.length === 0}
            onPress={removeElementFromBasket}
            className="p-2 bg-[#00CCBB] rounded-full"
          >
            {/* <MinusCircleIcon
              size={30}
              color={itemsInTheBasket.length === 0 ? "gray" : "#00CCBB"}
            /> */}
            <Icon
              name="minus"
              size={15}
              color={itemsInTheBasket.length === 0 ? "gray" : "white"}
            />
          </TouchableOpacity>
          <Text>{itemsInTheBasket.length}</Text>
          <TouchableOpacity
            onPress={addElementToBasket}
            className="p-2 bg-[#00CCBB] rounded-full"
          >
            <Icon name="plus" size={15} color="white" />
            {/* <PlusCircleIcon size={30} color="#00CCBB" /> */}
          </TouchableOpacity>
        </View>
      ) : undefined}
    </TouchableOpacity>
  );
};

export default Dish;
