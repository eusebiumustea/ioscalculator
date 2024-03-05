import Svg, { Mask, Path, Rect } from "react-native-svg";
import { ButtonBaseProps } from "./types";
import { TouchableOpacity } from "react-native";
import { ButtonSize } from "../../../config/ui-config";

export function Equal({ onPress, svgProps }: ButtonBaseProps) {
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
        <Rect width={88} height={88} rx={44} fill="#FE9E0B" />
        <Path
          d="M32.898 51.977h23.204V48.18H32.898v3.797zm0-11.602h23.204v-3.797H32.898v3.797z"
          fill="#fff"
        />
      </Svg>
    </TouchableOpacity>
  );
}
