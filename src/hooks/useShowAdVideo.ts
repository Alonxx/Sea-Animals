import React, { useCallback } from "react";
import { AdMobInterstitial } from "expo-ads-admob";
import { AD_VIDEO_ID } from "../utils/constants";

const showAdVideof = async () => {
  await AdMobInterstitial.setAdUnitID(AD_VIDEO_ID);

  await AdMobInterstitial.requestAdAsync({
    servePersonalizedAds: true,
  });
  await AdMobInterstitial.showAdAsync();
  return;
};

export const useShowAdVideo = (
  count: number,
  setCount: React.Dispatch<React.SetStateAction<number>>
) => {
  const showAdVideo = useCallback(() => {
    React.useEffect(() => {
      if (count >= 4) {
        AdMobInterstitial.getIsReadyAsync()
          .then((isReady) => {
            if (isReady) {
              AdMobInterstitial.dismissAdAsync().then(() => {
                showAdVideof();
                setCount(0);
              });
            } else {
              showAdVideof();
              setCount(0);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }, [count]);

    React.useEffect(() => {
      return () => {
        AdMobInterstitial.getIsReadyAsync()
          .then((isReady) => {
            if (isReady) {
              AdMobInterstitial.dismissAdAsync();
              AdMobInterstitial.removeAllListeners();
            }
          })
          .catch((error) => {
            console.log(error);
          });
      };
    }, []);
  }, [count]);

  return showAdVideo();
};
