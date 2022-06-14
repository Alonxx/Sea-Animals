import { Center, Text, Box, HStack, VStack, Button } from "native-base";
import { useNavigate } from "react-router";
import i18n from "i18n-js";

export const Lenguage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Center margin={"auto"}>
        <VStack space={8} alignItems={"center"}>
          <Button
            onPress={() => {
              i18n.locale = "en";
              navigate("/home");
            }}
            width={"sm"}
            borderRadius={"3xl"}
            colorScheme={"yellow"}
          >
            <HStack alignItems={"center"}>
              <Text fontSize={"4xl"}>🇺🇸</Text>
              <Text fontWeight={"bold"} fontSize={"2xl"} color="white">
                ENGLISH
              </Text>
            </HStack>
          </Button>

          <Button
            onPress={() => {
              i18n.locale = "es";
              navigate("/home");
            }}
            width={"sm"}
            borderRadius={"3xl"}
            colorScheme={"yellow"}
          >
            <HStack alignItems={"center"}>
              <Text fontSize={"4xl"}>🇪🇸</Text>
              <Text fontWeight={"bold"} fontSize={"2xl"} color="white">
                ESPAÑOL
              </Text>
            </HStack>
          </Button>
        </VStack>
      </Center>
    </>
  );
};
