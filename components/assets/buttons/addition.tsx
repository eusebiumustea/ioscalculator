import Svg, { Mask, Path, Rect } from "react-native-svg";
import { ButtonBaseProps } from "./types";
import { TouchableOpacity } from "react-native";
import { ButtonSize } from "../../../config/ui-config";

export function Addition({ onPress, svgProps }: ButtonBaseProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={{
        borderRadius: 100,
        width: ButtonSize.width,
        height: ButtonSize.height,
      }}
      onPress={onPress}
    >
      <Svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 88 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...svgProps}
      >
        <Rect width={88} height={88} rx={44} fill="#F1A33B" />
        <Mask
          id="a"
          maskUnits="userSpaceOnUse"
          x={31}
          y={33}
          width={26}
          height={25}
          fill="#000"
        >
          <Path fill="#fff" d="M31 33H57V58H31z" />
          <Path d="M32.117 47.188h23.79V43.39h-23.79v3.797zm9.985 9.703h3.796V33.688h-3.796V56.89z" />
        </Mask>
        <Path
          d="M32.117 47.188h23.79V43.39h-23.79v3.797zm9.985 9.703h3.796V33.688h-3.796V56.89z"
          fill="#fff"
        />
        <Path
          d="M32.117 47.188h-.4v.4h.4v-.4zm23.79 0v.4h.4v-.4h-.4zm0-3.797h.4v-.4h-.4v.4zm-23.79 0v-.4h-.4v.4h.4zm9.985 13.5h-.4v.4h.4v-.4zm3.796 0v.4h.4v-.4h-.4zm0-23.203h.4v-.4h-.4v.4zm-3.796 0v-.4h-.4v.4h.4zm-9.985 13.9h23.79v-.8h-23.79v.8zm24.19-.4V43.39h-.8v3.797h.8zm-.4-4.197h-23.79v.8h23.79v-.8zm-24.19.4v3.797h.8V43.39h-.8zm10.385 13.9h3.796v-.8h-3.796v.8zm4.196-.4V33.688h-.8V56.89h.8zm-.4-23.603h-3.796v.8h3.796v-.8zm-4.196.4V56.89h.8V33.688h-.8z"
          fill="#fff"
          mask="url(#a)"
        />
      </Svg>
    </TouchableOpacity>
  );
}
