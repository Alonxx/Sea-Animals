import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export type TAnimal = {
  title: string;
  animalBackground: any;
  animalSound: any;
  pressable?: boolean;
  setCountPressToShowAd?: React.Dispatch<React.SetStateAction<number>>;
  animalComponent: any;
};
