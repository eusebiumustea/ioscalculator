import { TouchableOpacity } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";
import { ButtonBaseProps } from "./types";
import { ButtonSize } from "../../../config/ui-config";

export function Nr1({ onPress, svgProps }: ButtonBaseProps) {
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
        <Rect width={88} height={88} rx={44} fill="#333" />
        <Path
          d="M44.605 58h3.399V29.816h-3.438l-7.5 5.391v3.535l7.461-5.195h.078V58z"
          fill="#fff"
        />
      </Svg>
    </TouchableOpacity>
  );
}
