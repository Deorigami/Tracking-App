import React from "react";
import Svg, {
  Defs,
  LinearGradient,
  Path,
  Stop,
  Text,
  TSpan,
} from "react-native-svg";

const TraqLogo = () => {
  return (
    <Svg
      width="75"
      height="24"
      viewBox="0 0 75 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Text
        id="TraqIt"
        fill="url(#paint0_linear)"
        style="white-space: pre"
        font-family="Poppins"
        font-size="24"
        font-style="italic"
        font-weight="800"
        letter-spacing="0em"
      >
        <TSpan x="-0.664062" y="17.4">
          TraqIt
        </TSpan>
      </Text>
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1="-1"
          y1="9"
          x2="75"
          y2="9"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stop-color="#CAE8FE" />
          <Stop offset="1" stop-color="#88BAE3" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default TraqLogo;
