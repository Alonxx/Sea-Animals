import { AdMobBanner } from "expo-ads-admob";
import { Center } from "native-base";
import { AD_BANNER_ID } from "../../utils/constants";

interface Props {}

export const AdBanner: React.FC<Props> = () => {
  return (
    <Center w={"100%"}>
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID={AD_BANNER_ID}
        servePersonalizedAds
      />
    </Center>
  );
};
