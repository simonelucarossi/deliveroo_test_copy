import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Order", {});
    }, 4000);
  }, []);

  return (
    <View className="bg-[#00CCBB] flex-1 p-3">
      <SafeAreaView className="items-center justify-center flex-1">
        <Animatable.Image
          animation={"slideInUp"}
          iterationCount={1}
          className="w-full h-96"
          source={require("../assets/preparingFav1.gif")}
        />
        <Animatable.Text
          animation={"slideInUp"}
          iterationCount={1}
          className="text-white font-semibold pb-16 pt-8 text-lg"
        >
          Waiting for the approve by the restaurant!
        </Animatable.Text>
        <Progress.Circle
          size={70}
          color="white"
          indeterminate
        ></Progress.Circle>
      </SafeAreaView>
    </View>
  );
};

export default PreparingOrderScreen;
