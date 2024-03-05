import { TouchableOpacity } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";
import { ButtonBaseProps } from "./types";
import { ButtonSize } from "../../../config/ui-config";

export function Nr5({ onPress, svgProps }: ButtonBaseProps) {
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
          d="M44.273 58.469c1.954 0 3.685-.404 5.196-1.211 1.51-.82 2.695-1.953 3.554-3.399.86-1.445 1.29-3.105 1.29-4.98v-.04c0-1.81-.404-3.41-1.211-4.804a8.694 8.694 0 00-3.301-3.32c-1.393-.807-2.995-1.211-4.805-1.211-1.367 0-2.61.247-3.73.742s-2.012 1.218-2.676 2.168h-.078l.957-9.473H52.71v-3.125H36.578l-1.445 16.075h3.105c.183-.326.384-.625.606-.899.234-.273.475-.527.722-.761a5.989 5.989 0 012.149-1.27 8.005 8.005 0 012.656-.43c1.25 0 2.357.274 3.32.82a5.917 5.917 0 012.266 2.266c.56.95.84 2.044.84 3.281v.04c0 1.262-.274 2.382-.82 3.359a5.88 5.88 0 01-2.286 2.266c-.976.546-2.102.82-3.379.82-1.12 0-2.128-.215-3.027-.645-.898-.43-1.627-1.015-2.187-1.758a5.28 5.28 0 01-1.016-2.52l-.02-.155h-3.456l.019.215c.143 1.523.638 2.884 1.484 4.082.847 1.198 1.966 2.142 3.36 2.832 1.406.69 3.008 1.035 4.804 1.035z"
          fill="#fff"
        />
      </Svg>
    </TouchableOpacity>
  );
}
