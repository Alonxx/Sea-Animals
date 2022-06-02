import { View, HStack, ScrollView } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";

import { Animal } from "../../components";

import { TAnimal } from "models";

export const Ocean: React.FC = () => {
  const animals: TAnimal[] = [
    {
      title: "Shark",
      style: { width: 170, height: 170 },
      animalBackground: require("../../assets/animals/shark.jpeg"),
      animalPath: require("../../assets/animals/shark.json"),
      animalSound: require("../../assets/animals/shark.mp3"),
    },
    {
      title: "Octopus",
      style: { width: 200, height: 200 },
      animalBackground: require("../../assets/animals/octopus.jpeg"),
      animalPath: require("../../assets/animals/octopus.json"),
      animalSound: require("../../assets/animals/octopus.mp3"),
    },
    {
      title: "Turtle",
      style: { width: 200, height: 200 },
      animalBackground: require("../../assets/animals/turtle.jpeg"),
      animalPath: require("../../assets/animals/turtle.json"),
      animalSound: require("../../assets/animals/turtle.mp3"),
    },
    {
      title: "Squid",
      style: { width: 170, height: 170 },
      animalBackground: require("../../assets/animals/squid.jpeg"),
      animalPath: require("../../assets/animals/squid.json"),
      animalSound: require("../../assets/animals/squid.mp3"),
    },
    {
      title: "Blowfish",
      style: { width: 170, height: 170, marginTop: -15 },
      animalBackground: require("../../assets/animals/blowfish.jpeg"),
      animalPath: require("../../assets/animals/blowfish.json"),
      animalSound: require("../../assets/animals/blowfish.mp3"),
    },
    {
      title: "Fish",
      style: { width: 130, height: 130 },
      animalBackground: require("../../assets/animals/fish.jpeg"),
      animalPath: require("../../assets/animals/fish.json"),
      animalSound: require("../../assets/animals/fish.mp3"),
    },
    {
      title: "Dolphin",
      style: { width: 130, height: 130 },
      animalBackground: require("../../assets/animals/dolphin.jpeg"),
      animalPath: require("../../assets/animals/dolphin.json"),
      animalSound: require("../../assets/animals/dolphin.mp3"),
    },
    {
      title: "Crab",
      style: { width: 120, height: 120 },
      animalBackground: require("../../assets/animals/crab.jpeg"),
      animalPath: require("../../assets/animals/crab.json"),
      animalSound: require("../../assets/animals/crab.mp3"),
    },
    {
      title: "Starfish",
      style: { width: 120, height: 120, marginLeft: 15 },
      animalBackground: require("../../assets/animals/starfish.jpeg"),
      animalPath: require("../../assets/animals/starfish.json"),
      animalSound: require("../../assets/animals/starfish.mp3"),
    },
  ];

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
        <SafeAreaView>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <HStack
              ml={10}
              justifyContent={"flex-start"}
              flexWrap={"wrap"}
              width={"full"}
            >
              {animals.map((animal) => (
                <Animal key={animal.title} {...animal} />
              ))}
            </HStack>
          </ScrollView>
        </SafeAreaView>
      </LottieView>
    </View>
  );
};
