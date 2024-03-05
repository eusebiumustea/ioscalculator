import Svg, { Mask, Path, Rect } from "react-native-svg";
import { ButtonBaseProps } from "./types";
import { TouchableOpacity } from "react-native";
import { ButtonSize } from "../../../config/ui-config";

export function Multiplier({ onPress, svgProps }: ButtonBaseProps) {
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
        <Path
          d="M33.5 33L55 54.5M33.5 54.5L55 33"
          stroke="#fff"
          strokeWidth={5}
        />
      </Svg>
    </TouchableOpacity>
  );
}
