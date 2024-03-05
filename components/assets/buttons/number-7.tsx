import { TouchableOpacity } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";
import { ButtonBaseProps } from "./types";
import { ButtonSize } from "../../../config/ui-config";

export function Nr7({ onPress, svgProps }: ButtonBaseProps) {
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
          d="M36.969 58h3.691L53.2 33.078v-3.262H34.546v3.125h15.176v.078L36.969 58z"
          fill="#fff"
        />
      </Svg>
    </TouchableOpacity>
  );
}
