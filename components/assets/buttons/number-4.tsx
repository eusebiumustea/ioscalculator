import { TouchableOpacity } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";
import { ButtonBaseProps } from "./types";
import { ButtonSize } from "../../../config/ui-config";

export function Nr4({ onPress, svgProps }: ButtonBaseProps) {
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
          d="M48.094 58h3.398v-5.86h3.985v-3.085h-3.985V29.816h-5.195a635.732 635.732 0 01-2.48 3.829l-2.462 3.828a638.917 638.917 0 01-2.48 3.828 630.88 630.88 0 01-2.48 3.828l-2.461 3.828v3.184h14.16V58zM37.41 49.055v-.078c.703-1.081 1.406-2.155 2.11-3.223l2.109-3.242c.716-1.081 1.426-2.155 2.129-3.223.703-1.08 1.406-2.155 2.11-3.223l2.109-3.242h.117v16.23H37.41z"
          fill="#fff"
        />
      </Svg>
    </TouchableOpacity>
  );
}
