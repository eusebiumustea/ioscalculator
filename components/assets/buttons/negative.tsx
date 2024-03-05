import Svg, { Mask, Path, Rect } from "react-native-svg";
import { ButtonBaseProps } from "./types";
import { TouchableOpacity } from "react-native";
import { ButtonSize } from "../../../config/ui-config";

export function Negative({ onPress, svgProps }: ButtonBaseProps) {
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
        <Rect width={88} height={88} rx={44} fill="#A5A5A5" />
        <Mask
          id="a"
          maskUnits="userSpaceOnUse"
          x={30}
          y={34}
          width={9}
          height={10}
          fill="#000"
        >
          <Path fill="#fff" d="M30 34H39V44H30z" />
          <Path d="M30.884 39.582h7.232v-1.107h-7.232v1.107zm3.062 3.13h1.108v-7.368h-1.108v7.369z" />
        </Mask>
        <Path
          d="M30.884 39.582h7.232v-1.107h-7.232v1.107zm3.062 3.13h1.108v-7.368h-1.108v7.369z"
          fill="#000"
        />
        <Path
          d="M30.884 39.582h-.8v.8h.8v-.8zm7.232 0v.8h.8v-.8h-.8zm0-1.107h.8v-.8h-.8v.8zm-7.232 0v-.8h-.8v.8h.8zm3.062 4.238h-.8v.8h.8v-.8zm1.108 0v.8h.8v-.8h-.8zm0-7.37h.8v-.8h-.8v.8zm-1.108 0v-.8h-.8v.8h.8zm-3.062 5.039h7.232v-1.6h-7.232v1.6zm8.032-.8v-1.107h-1.6v1.107h1.6zm-.8-1.907h-7.232v1.6h7.232v-1.6zm-8.032.8v1.107h1.6v-1.107h-1.6zm3.862 5.038h1.108v-1.6h-1.108v1.6zm1.908-.8v-7.37h-1.6v7.37h1.6zm-.8-8.17h-1.108v1.6h1.108v-1.6zm-1.908.8v7.37h1.6v-7.37h-1.6z"
          fill="#000"
          mask="url(#a)"
        />
        <Path
          d="M52.839 33.065l-2.44-.883L34.89 56.365l2.44.882 15.509-24.182zM48.125 52.11h8.75v-2.215h-8.75v2.214z"
          fill="#000"
        />
      </Svg>
    </TouchableOpacity>
  );
}
