import { TouchableOpacity } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";
import { ButtonBaseProps } from "./types";
import { LongButtonSize } from "../../../config/ui-config";

export function Nr0({ onPress, svgProps }: ButtonBaseProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={{
        borderRadius: 100,
        width: LongButtonSize.width,
        height: LongButtonSize.height,
      }}
      onPress={onPress}
    >
      <Svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 190 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...svgProps}
      >
        <Rect width={190} height={88} rx={44} fill="#333" />
        <Path
          d="M47.11 58.469c2.16 0 4.016-.593 5.566-1.778 1.55-1.184 2.734-2.864 3.554-5.039.834-2.174 1.25-4.752 1.25-7.734v-.04c0-2.98-.416-5.559-1.25-7.733-.82-2.175-2.005-3.848-3.554-5.02-1.55-1.185-3.405-1.777-5.567-1.777-2.161 0-4.017.592-5.566 1.777-1.536 1.172-2.715 2.845-3.535 5.02-.82 2.174-1.23 4.752-1.23 7.734v.039c0 2.982.41 5.56 1.23 7.734.82 2.175 1.998 3.855 3.535 5.04 1.55 1.184 3.405 1.777 5.566 1.777zm0-3.067c-1.433 0-2.657-.462-3.672-1.386-1.016-.938-1.79-2.266-2.325-3.985-.534-1.718-.8-3.756-.8-6.113v-.04c0-2.356.266-4.387.8-6.093.534-1.719 1.309-3.04 2.325-3.965 1.015-.924 2.24-1.386 3.671-1.386 1.433 0 2.657.462 3.672 1.386 1.029.925 1.81 2.246 2.344 3.965.547 1.706.82 3.737.82 6.094v.039c0 2.357-.273 4.395-.82 6.113-.534 1.719-1.315 3.047-2.344 3.985-1.015.924-2.24 1.386-3.672 1.386z"
          fill="#fff"
        />
      </Svg>
    </TouchableOpacity>
  );
}
