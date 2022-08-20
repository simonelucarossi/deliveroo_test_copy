import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";

const OrderScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView className="bg-[#00CCBB] z-50">
        <View className="flex-row justify-between z-0 px-6 py-5 pb-32">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Icon name="close" color="white" size={20} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-lg font-semibold text-white">Order help</Text>
          </TouchableOpacity>
        </View>
        <View className="absolute w-full top-28 left-2 z-30 pl-4 pr-7">
          <View className="p-5 w-full bg-white shadow rounded-md">
            <View className="flex-row space-x-2">
              <View className="flex-1">
                <Animatable.Text
                  animation={"fadeIn"}
                  iterationCount={1}
                  className="text-lg text-gray-400"
                >
                  Estimated arrival
                </Animatable.Text>
                <Animatable.Text
                  animation={"fadeIn"}
                  iterationCount={1}
                  className="text-4xl font-bold"
                >
                  02-05 Minutes
                </Animatable.Text>
                <Animatable.View animation={"fadeIn"} iterationCount={1}>
                  <Progress.Bar
                    size={50}
                    color="#00CCBB"
                    indeterminate
                    className="mt-3"
                  ></Progress.Bar>
                </Animatable.View>
              </View>
              <Animatable.Image
                className="w-20 h-20"
                animation={"fadeIn"}
                iterationCount={1}
                source={require("../assets/preparingFav.gif")}
              />
            </View>
            <Animatable.Text
              animation={"fadeIn"}
              iterationCount={1}
              className="text-sm pt-2 text-gray-400"
            >
              Your order is being prepared
            </Animatable.Text>
          </View>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: 41.8954221,
          longitude: 12.4355615,
          latitudeDelta: 0.005,
          longitudeDelta: 0.085,
        }}
        className="flex-1  z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: 41.8954221,
            longitude: 12.4355615,
          }}
          pinColor="#00CCBB"
          identifier="origin"
          title="Via dei gozzadini 16"
          description="Roma, RM, 00165"
        ></Marker>
      </MapView>
      <SafeAreaView className="bg-white">
        <View className="flex-row p-4 space-x-2 items-center">
          <Animatable.Image
            className="w-10 bg-gray-300 rounded-full h-10"
            animation={"fadeIn"}
            iterationCount={1}
            source={require("../assets/preparingFav.gif")}
          />
          <View className="flex-1">
            <Text className="font-semibold text-xl">Andrea Rossi</Text>
            <Text className="text-gray-300 font-bold">Your rider</Text>
          </View>
          <TouchableOpacity>
            <Text className="font-bold text-[#00CCBB] pr-3 text-lg">Call</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default OrderScreen;
