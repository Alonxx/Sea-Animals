import { Box, Text, VStack, ScrollView, Center } from "native-base";
import LottieView from "lottie-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WaterButton } from "../../components";
import { useNavigate } from "react-router-native";
interface Props {}

export const Home: React.FC<Props> = () => {
  const navigate = useNavigate();
  return (
    <Box>
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
                handler={() => navigate("/ocean")}
                buttonColor={"#f2e205"}
                style={{ width: 100, height: 100 }}
              />
              <WaterButton
                title="Juegos 🐬"
                titleColor="black"
                handler={() => navigate("/ddgame")}
                buttonColor={"#f2e205"}
                style={{ width: 100, height: 100 }}
              />
            </VStack>
          </Center>
        </ScrollView>
      </SafeAreaView>
    </Box>
  );
};
