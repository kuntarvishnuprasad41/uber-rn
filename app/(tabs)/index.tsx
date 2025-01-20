import { useEffect } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  useEffect(() => {
    StatusBar.setBarStyle("dark-content");
  }, []);
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white">
      <View className="">
        <Text>Hello World</Text>
      </View>
    </SafeAreaView>
  );
}
