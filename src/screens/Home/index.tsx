import { Box, Text, VStack, ScrollView, Center } from "native-base";
import LottieView from "lottie-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WaterButton } from "../../components";

interface Props {
  navigation: any;
}

export const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <Box>
      <LottieView
        resizeMode="cover"
        style={{
          minHeight: "100%",
          minWidth: "100%",
          width: "100%",
          height: "100%",
        }}
        autoPlay
        loop
        source={require("../../assets/UI/ocean.json")}
      >
        <SafeAreaView>
          <ScrollView
            width={"full"}
            height="full"
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <Center>
              <VStack alignItems={"center"} space={3}>
                <Text color={"#f2e205"} fontWeight={"bold"} fontSize={"6xl"}>
                  Sea Animals 🦑
                </Text>

                <WaterButton
                  title="Oceano 🐙"
                  titleColor="black"
                  handler={() => navigation.navigate("Ocean")}
                  buttonColor={"#f2e205"}
                  style={{ width: 100, height: 100 }}
                />
                <WaterButton
                  title="Juegos 🐬"
                  titleColor="black"
                  handler={() => navigation.navigate("DDGame")}
                  buttonColor={"#f2e205"}
                  style={{ width: 100, height: 100 }}
                />
              </VStack>
            </Center>
          </ScrollView>
        </SafeAreaView>
      </LottieView>
    </Box>
  );
};
