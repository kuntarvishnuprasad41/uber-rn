import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center w-screen justify-center content-center bg-white">
      <View>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
}
