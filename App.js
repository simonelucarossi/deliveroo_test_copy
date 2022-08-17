import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <View className="flex-1 items-center justify-center text-color-red">
          <Text>Test simone!</Text>
          <StatusBar style="auto" />
        </View>
      </TailwindProvider>
    </NavigationContainer>
  );
}
