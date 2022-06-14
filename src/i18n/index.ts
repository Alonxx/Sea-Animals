import I18n from "i18n-js";

//Importamos los lenguages
import en from "./en";
import es from "./es";

//Definimos las traducciones
I18n.translations = {
  en,
  es,
};

I18n.fallbacks = true;
export default I18n;
