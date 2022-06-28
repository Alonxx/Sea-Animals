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
import { AdBanner, Animal, WaterButton } from "../../components";
import { DraxProvider, DraxView } from "react-native-drax";
import { ImageBackground } from "react-native";
import React, { useRef } from "react";
import { Audio } from "expo-av";
import { useNavigate } from "react-router-native";
import I18n from "../../i18n/index";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useGetAnimals, useShowAdVideo } from "../../hooks";
import { TAnimal } from "models";

/*
 * Componente encargado de renderizar la screen del juego DragAndDrop
 */

interface Props {}

export const DDGame: React.FC<Props> = () => {
  const [animalIndex, setAnimalIndex] = React.useState<number>(0);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [isWinner, setIsWinner] = React.useState<boolean>(false);
  const [showModal, setShowModal] = React.useState(false);
  const [currentAnimals, setCurrentAnimals] = React.useState<TAnimal[]>([]);
  const [countPressToShowAd, setCountPressToShowAd] = React.useState<number>(0);
  const confetti: any = useRef(null);
  const navigate = useNavigate();

  const animals = useGetAnimals();

  const showAdVideo = useShowAdVideo(countPressToShowAd, setCountPressToShowAd);

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
    //setCountPressToShowAd((prevState) => prevState + 1);
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/UI/kidsOvation.mp3")
    );
    setSound(sound);
    await sound.playAsync();
  };

  const changeAnimals = () => {
    let newAnimals = [];
    let useIndex: number[] = [];
    let random = getRandomInt(0, animals.length - 1);

    for (let i = 0; i < 4; i++) {
      random = getRandomInt(0, animals.length - 1, random);
      while (useIndex.includes(random)) {
        random = getRandomInt(0, animals.length - 1, random);
      }
      useIndex.push(random);
      newAnimals.push(animals[random]);
    }
    setCurrentAnimals(newAnimals);
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
    changeAnimals();
    setAnimalIndex(getRandomInt(0, currentAnimals.length - 1));
    setLoading(true);
  }, []);

  return (
    <GestureHandlerRootView>
      <View>
        <SafeAreaView>
          <Center>
            <Modal
              backgroundColor={"#0000044f"}
              isOpen={showModal}
              onClose={() => setShowModal(false)}
            >
              <Modal.Content minHeight={"xs"} maxWidth="md">
                <Modal.Body>
                  <Text textAlign={"center"} fontSize={"xl"}>
                    {I18n.t("general.DDgameInstructions")}
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
                      title={I18n.t("general.playButton")}
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
          <View>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            >
              <AdBanner />
              <DraxProvider>
                <VStack>
                  <HStack justifyContent={"center"}>
                    <Button
                      backgroundColor={"transparent"}
                      position="absolute"
                      zIndex={5}
                      left={0}
                      onPress={() => navigate("/home")}
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
                            if (payload === currentAnimals[animalIndex].title) {
                              playSound();
                              setIsWinner(true);
                              confetti?.current?.play();
                              changeAnimals();
                              setAnimalIndex((prevState) =>
                                prevState + 1 > currentAnimals.length - 1
                                  ? 0
                                  : prevState + 1
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
                              source={
                                currentAnimals[animalIndex].animalBackground
                              }
                            />
                          )}
                        />
                      </Box>
                    )}
                  </HStack>

                  <HStack
                    flexWrap={"wrap"}
                    width={"full"}
                    height={"full"}
                    alignItems={"center"}
                    mt={25}
                    justifyItems={"center"}
                    justifyContent={"center"}
                  >
                    {currentAnimals.map((animal) => (
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
              </DraxProvider>
            </ScrollView>
          </View>
        </SafeAreaView>
      </View>
    </GestureHandlerRootView>
  );
};
