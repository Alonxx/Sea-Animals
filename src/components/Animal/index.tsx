import { TAnimal } from "models";
import { Box, Pressable, Modal, Center } from "native-base";
import React from "react";
import { AnimalCard } from "../AnimalCard";
import { Animated, Easing } from "react-native";
/**
 * Componente que renderiza un animal y su funcion para ver la Card (imagen y sonido)
 */

export const Animal: React.FC<TAnimal> = ({
  title,
  animalBackground,
  animalComponent,
  animalSound,
  pressable = true,
  setCountPressToShowAd,
}) => {
  const [showCard, setShowCard] = React.useState<boolean>(false);
  const [verticalVal, setverticalVal] = React.useState<any>(
    new Animated.Value(0)
  );

  //Useeffect para animacion de los animales
  React.useEffect(() => {
    let random = Math.random() * (1300 - 1000) + 1000;

    Animated.timing(verticalVal, {
      toValue: 10,
      duration: random,
      easing: Easing.inOut(Easing.quad),
      useNativeDriver: false,
    }).start();
    verticalVal.addListener(({ value }: any) => {
      if (value == 10) {
        Animated.timing(verticalVal, {
          toValue: 0,
          duration: random,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: false,
        }).start();
      } else if (value == 0) {
        Animated.timing(verticalVal, {
          toValue: 10,
          duration: random,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: false,
        }).start();
      }
    });
  }, []);

  return (
    <>
      <Center>
        {/* Modal que muestra el Componente AnimalCard que contiene imagen y sonido del animal
         */}
        <Modal
          animationPreset="slide"
          size={"xl"}
          isOpen={showCard}
          onClose={() => setShowCard(false)}
        >
          <Modal.Content maxH={"90%"}>
            <Modal.CloseButton />
            <AnimalCard
              title={title}
              animalBackground={animalBackground}
              animalSound={animalSound}
            />
          </Modal.Content>
        </Modal>
      </Center>
      {/*Pressable en el animal que que muestra el modal */}
      <Pressable
        onPress={() => {
          pressable && setShowCard(true);
          if (setCountPressToShowAd) {
            setCountPressToShowAd((prevState) => prevState + 1);
          }
        }}
      >
        {({ isPressed }) => {
          return (
            <Box
              style={{
                width: 900,
                height: 120,
                aspectRatio: 1 * 1.35,
                transform: [
                  {
                    scale: isPressed ? 0.9 : 1,
                  },
                ],
              }}
            >
              <Animated.View
                style={{
                  transform: [{ translateY: verticalVal }],
                }}
              >
                {animalComponent}
              </Animated.View>
            </Box>
          );
        }}
      </Pressable>
    </>
  );
};
