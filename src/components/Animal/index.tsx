import LottieView, { AnimationObject } from "lottie-react-native";
import { TAnimal } from "models";
import { Box, Pressable, Modal, Center } from "native-base";
import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { AnimalCard } from "../AnimalCard";

//Componente que renderiza un animal(lottie).

export const Animal: React.FC<TAnimal> = ({
  style,
  title,
  animalBackground,
  animalPath,
  animalSound,
}) => {
  const [showCard, setShowCard] = React.useState<boolean>(false);

  return (
    <>
      <Center>
        {/* Modal que muestra el Componente AnimalCard que contiene imagen y sonido */}
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
      {/* Funcion en el lottie que que muestra el modal  y renderiza el json*/}
      <Pressable onPress={() => setShowCard(true)}>
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
            >
              <LottieView style={style} autoPlay loop source={animalPath} />
            </Box>
          );
        }}
      </Pressable>
    </>
  );
};
