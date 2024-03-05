import Svg, { Path, Rect } from "react-native-svg";
import { ButtonBaseProps } from "./types";
import { TouchableOpacity } from "react-native";
import { ButtonSize } from "../../../config/ui-config";

export function Clear({ onPress, svgProps }: ButtonBaseProps) {
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
        <Path
          d="M21.854 57h3.918l6.773-19.988h1.046v-3.968h-3.022L21.854 57zm4.233-6.475h12.982l-1.079-2.988H27.166l-1.08 2.988zM39.385 57h3.918l-8.7-23.956h-1.975v3.968L39.385 57zm15.97.398c1.771 0 3.365-.332 4.782-.996 1.416-.664 2.578-1.593 3.486-2.789.919-1.206 1.5-2.606 1.743-4.2l.033-.166h-3.702l-.05.166c-.287 1.007-.724 1.86-1.311 2.557a5.757 5.757 0 01-2.142 1.593c-.83.355-1.776.532-2.839.532-1.471 0-2.755-.371-3.851-1.113-1.096-.741-1.942-1.792-2.54-3.154-.598-1.372-.897-2.977-.897-4.814v-.017c0-1.848.3-3.447.897-4.798.598-1.35 1.439-2.396 2.523-3.137 1.096-.742 2.385-1.113 3.868-1.113 1.085 0 2.043.183 2.873.548a5.466 5.466 0 012.108 1.544c.575.675.99 1.483 1.245 2.424l.1.332h3.702l-.017-.166c-.243-1.583-.824-2.972-1.743-4.167-.919-1.195-2.086-2.13-3.503-2.806-1.416-.675-3.005-1.013-4.764-1.013-2.27 0-4.234.504-5.894 1.511-1.66.996-2.944 2.419-3.852 4.267-.907 1.848-1.361 4.04-1.361 6.574v.017c0 2.534.454 4.731 1.361 6.59.908 1.849 2.192 3.276 3.852 4.284 1.671 1.007 3.636 1.51 5.893 1.51z"
          fill="#000"
        />
      </Svg>
    </TouchableOpacity>
  );
}