import { TAnimal } from "models";
import {
  View,
  HStack,
  VStack,
  Box,
  Center,
  Modal,
  Text,
  Button,
  ScrollView,
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import { Animal, WaterButton } from "../../components";
import { DraxProvider, DraxView } from "react-native-drax";
import { ImageBackground, Pressable } from "react-native";
import React, { useRef } from "react";
import { Audio } from "expo-av";

/*
 * Componente encargado de renderizar la screen del juego DragAndDrop
 */

import { Ionicons } from "@expo/vector-icons";

interface Props {
  navigation: any;
}

export const DDGame: React.FC<Props> = ({ navigation }) => {
  const [animalIndex, setAnimalIndex] = React.useState<number>(0);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [isWinner, setIsWinner] = React.useState<boolean>(false);
  const [showModal, setShowModal] = React.useState(false);
  const confetti: any = useRef(null);

  const animals: TAnimal[] = [
    {
      title: "Shark",
      style: { width: 90, height: 100 },
      animalBackground: require("../../assets/animals/shark.jpeg"),
      animalPath: require("../../assets/animals/shark.json"),
      animalSound: require("../../assets/animals/shark.mp3"),
    },
    {
      title: "Octopus",
      style: { width: 100, height: 115 },
      animalBackground: require("../../assets/animals/octopus.jpeg"),
      animalPath: require("../../assets/animals/octopus.json"),
      animalSound: require("../../assets/animals/octopus.mp3"),
    },
    {
      title: "Turtle",
      style: { width: 100, height: 110 },
      animalBackground: require("../../assets/animals/turtle.jpeg"),
      animalPath: require("../../assets/animals/turtle.json"),
      animalSound: require("../../assets/animals/turtle.mp3"),
    },
    {
      title: "Squid",
      style: { width: 80, height: 90, marginTop: 5 },
      animalBackground: require("../../assets/animals/squid.jpeg"),
      animalPath: require("../../assets/animals/squid.json"),
      animalSound: require("../../assets/animals/squid.mp3"),
    },
    {
      title: "Blowfish",
      style: { width: 90, height: 105, marginTop: -5 },
      animalBackground: require("../../assets/animals/blowfish.jpeg"),
      animalPath: require("../../assets/animals/blowfish.json"),
      animalSound: require("../../assets/animals/blowfish.mp3"),
    },
    {
      title: "Fish",
      style: { width: 80, height: 80, marginTop: 5 },
      animalBackground: require("../../assets/animals/fish.jpeg"),
      animalPath: require("../../assets/animals/fish.json"),
      animalSound: require("../../assets/animals/fish.mp3"),
    },
    {
      title: "Dolphin",
      style: { width: 70, height: 80, marginTop: 5 },
      animalBackground: require("../../assets/animals/dolphin.jpeg"),
      animalPath: require("../../assets/animals/dolphin.json"),
      animalSound: require("../../assets/animals/dolphin.mp3"),
    },
    {
      title: "Crab",
      style: { width: 60, height: 70, marginTop: 5 },
      animalBackground: require("../../assets/animals/crab.jpeg"),
      animalPath: require("../../assets/animals/crab.json"),
      animalSound: require("../../assets/animals/crab.mp3"),
    },
    {
      title: "Starfish",
      style: { width: 60, height: 70, marginLeft: 10, marginTop: 5 },
      animalBackground: require("../../assets/animals/starfish.jpeg"),
      animalPath: require("../../assets/animals/starfish.json"),
      animalSound: require("../../assets/animals/starfish.mp3"),
    },
  ];
  //Funcion para obtener un numero random (Se usa para obtener una imagen al azar y que no sea igual al anterior)
  const getRandomInt = (min: number, max: number, exclude?: number): number => {
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    if (exclude && random === exclude) {
      let newRandom = getRandomInt(min, max, exclude);
      return newRandom;
    }
    return random;
  };

  const [sound, setSound] = React.useState<Audio.Sound>();

  // Funcion que carga y  reproduce el sonido del animal recibido en animalSound
  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/UI/kidsOvation.mp3")
    );
    setSound(sound);
    await sound.playAsync();
  };

  // UseEffect que limpia el sonido al desmontar el componente
  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  React.useEffect(() => {
    setShowModal(true);
    setAnimalIndex(getRandomInt(0, animals.length - 1));
    setLoading(true);
  }, []);

  return (
    <View>
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
        <Center>
          <Modal
            backgroundColor={"#0000044f"}
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          >
            <Modal.Content minHeight={"xs"} maxWidth="md">
              <Modal.Body>
                <Text textAlign={"center"} fontSize={"xl"}>
                  You must drag the animal corresponding to the image to win the
                  round
                </Text>
                <Center>
                  <LottieView
                    style={{
                      width: 120,
                      height: 120,
                    }}
                    speed={-1}
                    autoPlay
                    loop={true}
                    source={require("../../assets/UI/dragAndDrop.json")}
                  />
                  <WaterButton
                    style={{ width: 100, height: 100 }}
                    buttonColor="#0062ff"
                    title="Play"
                    handler={() => setShowModal(false)}
                  />
                </Center>
              </Modal.Body>
            </Modal.Content>
          </Modal>
        </Center>

        <LottieView
          style={{
            width: 600,
            height: 600,
            position: "absolute",
            alignSelf: "center",
            bottom: 0,
            zIndex: 5,
            display: isWinner ? "flex" : "none",
          }}
          ref={confetti}
          onAnimationFinish={() => setIsWinner(false)}
          loop={false}
          source={require("../../assets/UI/confetti.json")}
        />
        <ScrollView>
          <DraxProvider>
            <SafeAreaView>
              <VStack>
                <HStack justifyContent={"center"}>
                  <Button
                    backgroundColor={"transparent"}
                    position="absolute"
                    zIndex={5}
                    left={0}
                    onPress={() => navigation.goBack()}
                  >
                    <Ionicons name="arrow-back" size={30} color="white" />
                  </Button>
                  {loading && (
                    <Box
                      mt={1}
                      alignSelf={"center"}
                      borderWidth={"3"}
                      borderStyle={"dashed"}
                      borderRadius={"5px"}
                      borderColor={"red.500"}
                      w={"md"}
                      height={"40"}
                    >
                      <DraxView
                        receivingStyle={{ opacity: 0.5 }}
                        onReceiveDragDrop={({ dragged: { payload } }) => {
                          if (payload === animals[animalIndex].title) {
                            playSound();
                            setIsWinner(true);
                            confetti?.current?.play();
                            setAnimalIndex((prevState) =>
                              getRandomInt(0, animals.length - 1, prevState)
                            );
                          }
                        }}
                        renderContent={() => (
                          <ImageBackground
                            borderRadius={5}
                            resizeMode="cover"
                            style={{
                              width: "100%",
                              height: "100%",
                              position: "relative",

                              opacity: 1,
                            }}
                            source={animals[animalIndex].animalBackground}
                          />
                        )}
                      />
                    </Box>
                  )}
                </HStack>

                <HStack
                  flexWrap={"wrap"}
                  justifyContent={"flex-start"}
                  width={"full"}
                >
                  {animals.map((animal) => (
                    <DraxView
                      key={animal.title}
                      draggingStyle={{ opacity: 0 }}
                      dragReleasedStyle={{ opacity: 0 }}
                      payload={animal.title}
                    >
                      <Animal
                        key={animal.title}
                        {...animal}
                        pressable={false}
                      />
                    </DraxView>
                  ))}
                </HStack>
              </VStack>
            </SafeAreaView>
          </DraxProvider>
        </ScrollView>
      </LottieView>
    </View>
  );
};
