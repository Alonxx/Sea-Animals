import LottieView from "lottie-react-native";
import { Box, Text, Pressable } from "native-base";
import React from "react";
import { ImageBackground } from "react-native";
import { Audio } from "expo-av";
import { useShowAdVideo } from "../../hooks";

interface Props {
  animalBackground: any;
  title: string;
  animalSound: any;
}

// Componente que renderiza la Card de un Animal con su imagen y sonido

export const AnimalCard: React.FC<Props> = ({
  title,
  animalBackground,
  animalSound,
}) => {
  const [sound, setSound] = React.useState<Audio.Sound>();
  const [counToShowAd, setCounToShowAd] = React.useState<number>(0);
  const showAdVideo = useShowAdVideo(counToShowAd, setCounToShowAd);

  // Funcion que carga y  reproduce el sonido del animal recibido en animalSound
  const playAnimalSound = async () => {
    const { sound } = await Audio.Sound.createAsync(animalSound);
    setSound(sound);
    await sound.playAsync();
    setCounToShowAd((prevState) => prevState + 1);
  };

  // UseEffect que limpia el sonido al desmontar el componente
  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <Box>
      <ImageBackground
        resizeMode="cover"
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          borderWidth: 3,
          borderColor: "yellow",
        }}
        source={animalBackground}
      />
      <Box
        style={{
          position: "absolute",
          bottom: 3,
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
        width={"99%"}
        backgroundColor={"#000000aa"}
      >
        <Pressable onPress={playAnimalSound}>
          {({ isPressed }) => {
            return (
              <Box
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.9 : 1,
                    },
                  ],
                }}
                flexDirection={"row"}
                alignItems={"center"}
              >
                <LottieView
                  style={{
                    width: 100,
                    height: 100,
                    position: "absolute",
                    zIndex: 3,
                    bottom: -7,
                    right: -5,
                  }}
                  autoPlay
                  speed={2}
                  loop
                  source={require("../../assets/UI/touch.json")}
                />

                <Text letterSpacing={6} fontSize={"6xl"} color={"white"}>
                  {title}
                </Text>
                <LottieView
                  style={{
                    width: 70,
                    height: 70,
                  }}
                  autoPlay
                  loop
                  source={require("../../assets/UI/speaker.json")}
                />
              </Box>
            );
          }}
        </Pressable>
      </Box>
    </Box>
  );
};
