import { StyleProp, ViewStyle } from "react-native";

export type TAnimal = {
  style: StyleProp<ViewStyle>;
  title: string;
  animalBackground: any;
  animalPath: any;
  animalSound: any;
  pressable?: boolean;
  setCountPressToShowAd?: React.Dispatch<React.SetStateAction<number>>;
};
