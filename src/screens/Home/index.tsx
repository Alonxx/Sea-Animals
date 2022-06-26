import {
  Box,
  Text,
  VStack,
  ScrollView,
  Center,
  Button,
  Image,
} from "native-base";

import { SafeAreaView } from "react-native-safe-area-context";
import { WaterButton, AdBanner } from "../../components";
import { useNavigate } from "react-router-native";
import I18n from "../../i18n/index";
import { Ionicons } from "@expo/vector-icons";

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
          <AdBanner />
          <Button
            backgroundColor={"transparent"}
            position="absolute"
            zIndex={5}
            left={0}
            onPress={() => navigate("/")}
          >
            <Ionicons name="arrow-back" size={30} color="white" />
          </Button>
          <Center>
            <VStack alignItems={"center"} space={3}>
              <Text color={"#f2e205"} fontWeight={"bold"} fontSize={"6xl"}>
                {I18n.t("general.title")}🦑
              </Text>

              <WaterButton
                title={I18n.t("general.oceanButton")}
                titleColor="black"
                handler={() => navigate("/ocean")}
                buttonColor={"#f2e205"}
                style={{ width: 100, height: 100 }}
              />
              <WaterButton
                title={I18n.t("general.gameButton")}
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
