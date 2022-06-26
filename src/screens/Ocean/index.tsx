import { View, HStack, ScrollView, Button } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import { AdBanner, Animal } from "../../components";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigate } from "react-router-native";
import { useGetAnimals, useShowAdVideo } from "../../hooks";

interface Props {}

export const Ocean: React.FC<Props> = () => {
  const [isEnter, setIsEnter] = React.useState<boolean>(false);
  const [countPressToShowAd, setCountPressToShowAd] = React.useState<number>(0);

  const showAdVideo = useShowAdVideo(countPressToShowAd, setCountPressToShowAd);

  const navigate = useNavigate();

  const animals = useGetAnimals();

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
