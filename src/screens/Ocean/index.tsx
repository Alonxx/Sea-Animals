import { View, HStack, ScrollView, Button } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import { AdBanner, Animal } from "../../components";
import { TAnimal } from "models";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigate } from "react-router-native";
import I18n from "../../i18n/index";
import { useShowAdVideo } from "../../hooks";

interface Props {}

export const Ocean: React.FC<Props> = () => {
  const [isEnter, setIsEnter] = React.useState<boolean>(false);
  const [countPressToShowAd, setCountPressToShowAd] = React.useState<number>(0);

  const showAdVideo = useShowAdVideo(countPressToShowAd, setCountPressToShowAd);

  const animals: TAnimal[] = [
    {
      title: I18n.t("animals.shark"),
      style: { width: 170, height: 170 },
      animalBackground: require("../../assets/animals/shark.jpeg"),
      animalPath: require("../../assets/animals/shark.json"),
      animalSound: I18n.t("sound.shark"),
    },
    {
      title: I18n.t("animals.octopus"),
      style: { width: 200, height: 200 },
      animalBackground: require("../../assets/animals/octopus.jpeg"),
      animalPath: require("../../assets/animals/octopus.json"),
      animalSound: I18n.t("sound.octopus"),
    },
    {
      title: I18n.t("animals.turtle"),
      style: { width: 200, height: 200 },
      animalBackground: require("../../assets/animals/turtle.jpeg"),
      animalPath: require("../../assets/animals/turtle.json"),
      animalSound: I18n.t("sound.turtle"),
    },
    {
      title: I18n.t("animals.squid"),
      style: { width: 170, height: 170 },
      animalBackground: require("../../assets/animals/squid.jpeg"),
      animalPath: require("../../assets/animals/squid.json"),
      animalSound: I18n.t("sound.squid"),
    },
    {
      title: I18n.t("animals.blowfish"),
      style: { width: 170, height: 170, marginTop: -15 },
      animalBackground: require("../../assets/animals/blowfish.jpeg"),
      animalPath: require("../../assets/animals/blowfish.json"),
      animalSound: I18n.t("sound.blowfish"),
    },
    {
      title: I18n.t("animals.fish"),
      style: { width: 130, height: 130 },
      animalBackground: require("../../assets/animals/fish.jpeg"),
      animalPath: require("../../assets/animals/fish.json"),
      animalSound: I18n.t("sound.fish"),
    },
    {
      title: I18n.t("animals.dolphin"),
      style: { width: 130, height: 130 },
      animalBackground: require("../../assets/animals/dolphin.jpeg"),
      animalPath: require("../../assets/animals/dolphin.json"),
      animalSound: I18n.t("sound.dolphin"),
    },
    {
      title: I18n.t("animals.crab"),
      style: { width: 120, height: 120 },
      animalBackground: require("../../assets/animals/crab.jpeg"),
      animalPath: require("../../assets/animals/crab.json"),
      animalSound: I18n.t("sound.crab"),
    },
    {
      title: I18n.t("animals.starfish"),
      style: { width: 120, height: 120, marginLeft: 15 },
      animalBackground: require("../../assets/animals/starfish.jpeg"),
      animalPath: require("../../assets/animals/starfish.json"),
      animalSound: I18n.t("sound.starfish"),
    },
  ];
  const navigate = useNavigate();
  React.useEffect(() => {
    setIsEnter(true);
  }, []);

  return (
    <View>
      <SafeAreaView>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <AdBanner />
          <Button
            backgroundColor={"transparent"}
            position="absolute"
            onPress={() => navigate("/home")}
          >
            <Ionicons name="arrow-back" size={30} color="white" />
          </Button>

          <LottieView
            style={{
              width: 500,
              height: 500,
              position: "absolute",
              alignSelf: "center",
              zIndex: 5,
              display: isEnter ? "flex" : "none",
            }}
            onAnimationFinish={() => setIsEnter(false)}
            autoPlay
            loop={false}
            source={require("../../assets/UI/swipeUp.json")}
          />
          <HStack
            ml={10}
            justifyContent={"flex-start"}
            flexWrap={"wrap"}
            width={"full"}
          >
            {animals.map((animal) => (
              <Animal
                key={animal.title}
                setCountPressToShowAd={setCountPressToShowAd}
                {...animal}
              />
            ))}
          </HStack>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
