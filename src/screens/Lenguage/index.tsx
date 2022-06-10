import { Center, Text, Box, HStack, VStack, Button } from "native-base";
import { useNavigate } from "react-router";

export const Lenguage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Center margin={"auto"}>
        <VStack space={8} alignItems={"center"}>
          <Button
            onPress={() => navigate("/home")}
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
            onPress={() => navigate("/home")}
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
