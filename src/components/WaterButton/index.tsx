import LottieView from "lottie-react-native";
import { StyleProp, ViewStyle } from "react-native";
import { Pressable, Box, Text } from "native-base";

/**
 *  Componete que renderiza un button con animacion de deformacion aquosa
 */

interface Props {
  title: string;
  titleColor?: string;
  handler: () => void;
  style: StyleProp<ViewStyle>;
  buttonColor?: string;
}

export const WaterButton: React.FC<Props> = ({
  title,
  handler,
  style,
  buttonColor = "#00ff00",
  titleColor = "white",
}) => {
  const random = Math.random() * (1.5 - 1.1) + 1.1;

  return (
    <>
      <Pressable onPress={handler}>
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
              <LottieView
                style={style}
                colorFilters={[
                  {
                    keypath: "*",
                    color: buttonColor,
                  },
                ]}
                autoPlay
                speed={random}
                loop
                source={require("../../assets/UI/buttonWater.json")}
              />
              <Box
                position={"absolute"}
                height={"full"}
                width={"full"}
                justifyContent={"center"}
              >
                <Text
                  fontWeight={"semibold"}
                  fontSize={"xl"}
                  color={titleColor}
                  textAlign={"center"}
                >
                  {title}
                </Text>
              </Box>
            </Box>
          );
        }}
      </Pressable>
    </>
  );
};
