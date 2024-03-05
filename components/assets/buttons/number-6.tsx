import { TouchableOpacity } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";
import { ButtonBaseProps } from "./types";
import { ButtonSize } from "../../../config/ui-config";

export function Nr6({ onPress, svgProps }: ButtonBaseProps) {
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
          d="M44.637 58.469c1.927 0 3.639-.41 5.136-1.23 1.498-.834 2.676-1.967 3.536-3.4.872-1.444 1.308-3.092 1.308-4.94v-.04c0-1.784-.41-3.379-1.23-4.785a8.836 8.836 0 00-3.32-3.32c-1.407-.807-3.008-1.211-4.805-1.211-1.276 0-2.435.208-3.477.625-1.041.404-1.94.95-2.695 1.64-.742.678-1.302 1.433-1.68 2.266H37v4.785h1.172v-.02c0-1.197.28-2.265.84-3.202a6.107 6.107 0 012.324-2.207c.99-.534 2.096-.801 3.32-.801 1.237 0 2.337.273 3.301.82a5.82 5.82 0 012.266 2.227c.547.95.82 2.038.82 3.261v.04c0 1.184-.286 2.259-.86 3.222a6.464 6.464 0 01-2.324 2.305c-.976.56-2.063.84-3.261.84s-2.285-.287-3.262-.86a6.572 6.572 0 01-2.324-2.343c-.56-.99-.84-2.084-.84-3.282l-.84-4.629v-.37c0-.13.007-.261.02-.391.052-1.98.332-3.802.84-5.469.52-1.667 1.321-3.008 2.402-4.023 1.08-1.016 2.493-1.524 4.238-1.524.964 0 1.823.156 2.578.469.768.3 1.42.729 1.953 1.289a5.51 5.51 0 011.211 2.012l.078.215h3.575l-.059-.254c-.313-1.368-.898-2.566-1.758-3.594-.86-1.029-1.933-1.823-3.222-2.383-1.277-.573-2.715-.86-4.317-.86-2.292 0-4.258.593-5.898 1.778-1.628 1.185-2.878 2.904-3.75 5.156-.86 2.24-1.29 4.942-1.29 8.106v.039c0 2.617.307 4.824.919 6.62.625 1.785 1.451 3.224 2.48 4.317 1.042 1.094 2.194 1.888 3.457 2.383 1.263.482 2.546.723 3.848.723z"
          fill="#fff"
        />
      </Svg>
    </TouchableOpacity>
  );
}