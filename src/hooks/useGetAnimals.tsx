import { TAnimal } from "../models";
import {
  Dolphin,
  Shark,
  Octopus,
  Squid,
  Crab,
  Fish,
  Blowfish,
  Starfish,
  Turtle,
  Seahorse,
  Whale,
  Seacow,
} from "../assets/animals/index";
import I18n from "../i18n/index";

import { useCallback } from "react";

export const useGetAnimals = () => {
  const getAnimals = useCallback(() => {
    const animals: TAnimal[] = [
      {
        title: I18n.t("animals.shark"),
        animalBackground: require("../assets/animals/shark.jpeg"),
        animalComponent: <Shark width={"100%"} heigth={"100%"} />,
        animalSound: I18n.t("sound.shark"),
      },
      {
        title: I18n.t("animals.dolphin"),
        animalBackground: require("../assets/animals/dolphin.jpeg"),
        animalComponent: <Dolphin width={"100%"} heigth={"100%"} />,
        animalSound: I18n.t("sound.dolphin"),
      },
      {
        title: I18n.t("animals.octopus"),
        animalBackground: require("../assets/animals/octopus.jpeg"),
        animalComponent: <Octopus width={"100%"} heigth={"100%"} />,
        animalSound: I18n.t("sound.octopus"),
      },
      {
        title: I18n.t("animals.squid"),
        animalBackground: require("../assets/animals/squid.jpeg"),
        animalComponent: <Squid width={"100%"} heigth={"100%"} />,
        animalSound: I18n.t("sound.squid"),
      },
      {
        title: I18n.t("animals.whale"),
        animalBackground: require("../assets/animals/whale.jpeg"),
        animalComponent: <Whale width={"100%"} heigth={"100%"} />,
        animalSound: I18n.t("sound.whale"),
      },
      {
        title: I18n.t("animals.crab"),
        animalBackground: require("../assets/animals/crab.jpeg"),
        animalComponent: <Crab width={"100%"} heigth={"100%"} />,
        animalSound: I18n.t("sound.crab"),
      },
      {
        title: I18n.t("animals.fish"),
        animalBackground: require("../assets/animals/fish.jpeg"),
        animalComponent: <Fish width={"100%"} heigth={"100%"} />,
        animalSound: I18n.t("sound.fish"),
      },
      {
        title: I18n.t("animals.seacow"),
        animalBackground: require("../assets/animals/seacow.jpeg"),
        animalComponent: <Seacow width={"100%"} heigth={"100%"} />,
        animalSound: I18n.t("sound.seacow"),
      },
      {
        title: I18n.t("animals.blowfish"),
        animalBackground: require("../assets/animals/blowfish.jpeg"),
        animalComponent: <Blowfish width={"100%"} heigth={"100%"} />,
        animalSound: I18n.t("sound.blowfish"),
      },
      {
        title: I18n.t("animals.turtle"),
        animalBackground: require("../assets/animals/turtle.jpeg"),
        animalComponent: <Turtle width={"100%"} heigth={"100%"} />,
        animalSound: I18n.t("sound.turtle"),
      },
      {
        title: I18n.t("animals.seahorse"),
        animalBackground: require("../assets/animals/seahorse.jpeg"),
        animalComponent: <Seahorse width={"100%"} heigth={"100%"} />,
        animalSound: I18n.t("sound.seahorse"),
      },
      {
        title: I18n.t("animals.starfish"),
        animalBackground: require("../assets/animals/starfish.jpeg"),
        animalComponent: <Starfish width={"100%"} heigth={"100%"} />,
        animalSound: I18n.t("sound.starfish"),
      },
    ];
    return animals;
  }, [I18n]);

  return getAnimals();
};
