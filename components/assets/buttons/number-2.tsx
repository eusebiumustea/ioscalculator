import { TouchableOpacity } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";
import { ButtonBaseProps } from "./types";
import { ButtonSize } from "../../../config/ui-config";

export function Nr2({ onPress, svgProps }: ButtonBaseProps) {
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
          d="M35.457 58h18.594v-3.125H39.246l1.035.977v-2.168l-1.035 2.168 7.734-7.93c1.732-1.771 3.073-3.255 4.024-4.453.95-1.211 1.614-2.298 1.992-3.262.39-.964.586-1.96.586-2.988v-.04c0-1.47-.384-2.799-1.152-3.984-.755-1.185-1.797-2.122-3.125-2.812s-2.845-1.035-4.551-1.035c-1.745 0-3.34.37-4.785 1.113-1.433.73-2.572 1.738-3.418 3.027-.847 1.276-1.27 2.728-1.27 4.356v.117h3.399v-.098a4.94 4.94 0 01.8-2.754c.534-.82 1.264-1.471 2.188-1.953.924-.495 1.973-.742 3.145-.742 1.028 0 1.933.215 2.714.645a4.598 4.598 0 011.856 1.738c.456.742.683 1.595.683 2.559v.038a6.2 6.2 0 01-.39 2.208c-.248.69-.71 1.47-1.387 2.343-.664.86-1.634 1.953-2.91 3.282l-9.922 10.351V58z"
          fill="#fff"
        />
      </Svg>
    </TouchableOpacity>
  );
}
