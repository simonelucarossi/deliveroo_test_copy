import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import { ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  getTotalCost,
  removeFromBasket,
  selectBasketItems,
} from "../features/basketCounter";

const BasketScreen = () => {
  const navigation = useNavigation();
  const itemsInTheBasket = useSelector(selectBasketItems);
  const total = useSelector(getTotalCost);
  const dispatch = useDispatch();
  const [groupedItems, setGroupedItems] = useState([]);

  const removeElementFromBasket = (id) => {
    if (itemsInTheBasket.length === 0) return;
    dispatch(removeFromBasket({ id }));
  };

  useEffect(() => {
    const grouped = itemsInTheBasket.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItems(grouped);
  }, [itemsInTheBasket]);

  return (
    <>
      <SafeAreaView className="flex-1">
        {/* HEADER */}
        <View className="bg-gray-100 shadow-xs p-5 border-b border-[#00CCBB]">
          <Text className="text-center text-lg font-bold">Basket</Text>
          <Text className="text-center text-md text-gray-400">Restaurant</Text>
          <TouchableOpacity
            className="absolute right-5 top-5 p-2 bg-[#00CCBB] rounded-full"
            onPress={navigation.goBack}
          >
            <Icon name="close" size={20} color="white" />
          </TouchableOpacity>
        </View>
        {/* TIME TO DELIVERY */}
        <View className="flex-row p-3 mt-5 items-center space-x-3 bg-white border-y border-gray-300 shadow-xs">
          <Image
            source={{
              uri: "https://www.iconpacks.net/icons/2/free-delivery-truck-icon-2049-thumb.png",
            }}
            className="w-12 h-12 bg-gray-200 rounded-full p-4"
          />
          <Text className="text-md font-bold flex-1 pl-3">
            Delivery in 02-05 minutes
          </Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB] font-bold">Change</Text>
          </TouchableOpacity>
        </View>
        {/* ITEMS */}
        <ScrollView className="mt-3 border-t border-gray-300 ">
          {itemsInTheBasket.length > 0 ? (
            Object.entries(groupedItems)?.map(([key, item]) => {
              return (
                // ITEM
                <View
                  key={key}
                  className="flex-row p-2 items-center space-x-3 border-b border-gray-300 bg-white"
                >
                  {/* COUNTER AND IMAGE */}
                  <View className="flex-row items-center space-x-2">
                    <Text className="pl-1 text-[#00CCBB] font-semibold">
                      {item.length}x
                    </Text>
                    <Image
                      source={{
                        uri: item[0]?.image,
                      }}
                      className="w-12 h-12 bg-gray-200 rounded-full p-4"
                    />
                  </View>
                  {/* TEXT AND PRICE */}
                  <View className="flex-row flex-1 flex">
                    <Text className="flex-1 font-semibold text-gray-500 text-md">
                      {item[0]?.title}
                    </Text>
                    <Text>€{item[0]?.price}</Text>
                  </View>
                  {/* REMOVE */}
                  <TouchableOpacity
                    onPress={() => removeElementFromBasket(Number(key))}
                  >
                    <Text className="pr-1 font-semibold text-[#00CCBB]">
                      Remove
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })
          ) : (
            <Text className="p-3 font-bold text-gray-400 text-center">
              {" "}
              No items in the basket! :(
            </Text>
          )}
          <View></View>
        </ScrollView>
      </SafeAreaView>
      <View className="bg-white p-3 pb-12">
        {/* SUBTOTAL */}
        <View className="justify-between flex-row pb-1">
          <Text className="text-gray-400 text-sm">Subtotal</Text>
          <Text className="text-gray-400 text-sm">€{total.toFixed(2)}</Text>
        </View>
        {/* DELIVERY FEE */}
        <View className="justify-between flex-row pb-1">
          <Text className="text-gray-400 text-sm">Delivery Fee</Text>
          <Text className="text-gray-400 text-sm">Free</Text>
        </View>
        {/* TOTAL */}
        <View className="justify-between flex-row pb-3">
          <Text className="font-semibold text-lg">Order Total</Text>
          <Text className="font-bold text-lg">€{total.toFixed(2)}</Text>
        </View>
        {/* BUTTON PLACE ORDER */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Preparing", {})}
          className="bg-[#00CCBB] p-4 rounded-lg items-center"
        >
          <Text className="text-white font-bold text-lg">Place order</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default BasketScreen;
