import Svg, { Mask, Path, Rect } from "react-native-svg";
import { ButtonBaseProps } from "./types";
import { TouchableOpacity } from "react-native";
import { ButtonSize } from "../../../config/ui-config";

export function Substraction({ onPress, svgProps }: ButtonBaseProps) {
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
          y={43}
          width={25}
          height={6}
          fill="#000"
        >
          <Path fill="#fff" d="M31 43H56V49H31z" />
          <Path d="M32.398 47.629H55.58v-3.48H32.398v3.48z" />
        </Mask>
        <Path d="M32.398 47.629H55.58v-3.48H32.398v3.48z" fill="#fff" />
        <Path
          d="M32.398 47.629h-.4v.4h.4v-.4zm23.182 0v.4h.4v-.4h-.4zm0-3.48h.4v-.4h-.4v.4zm-23.182 0v-.4h-.4v.4h.4zm0 3.88H55.58v-.8H32.398v.8zm23.582-.4v-3.48h-.8v3.48h.8zm-.4-3.88H32.398v.8H55.58v-.8zm-23.582.4v3.48h.8v-3.48h-.8z"
          fill="#fff"
          mask="url(#a)"
        />
      </Svg>
    </TouchableOpacity>
  );
}
