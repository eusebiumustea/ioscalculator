import Svg, { Mask, Path, Rect } from "react-native-svg";
import { ButtonBaseProps } from "./types";
import { TouchableOpacity } from "react-native";
import { ButtonSize } from "../../../config/ui-config";

export function Divider({ onPress, svgProps }: ButtonBaseProps) {
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
        <Mask
          id="a"
          maskUnits="userSpaceOnUse"
          x={31}
          y={31}
          width={26}
          height={24}
          fill="#000"
        >
          <Path fill="#fff" d="M31 31H57V55H31z" />
          <Path d="M32.089 44.68h23.629V41.04h-23.63v3.639zm11.792-7.974c.659 0 1.205-.217 1.64-.651.449-.45.673-.996.673-1.64 0-.659-.224-1.205-.674-1.64-.434-.449-.98-.673-1.64-.673-.643 0-1.19.224-1.639.673-.434.435-.651.981-.651 1.64 0 .644.217 1.19.651 1.64.45.434.996.651 1.64.651zm0 16.913c.659 0 1.205-.224 1.64-.674.449-.449.673-.995.673-1.64 0-.643-.224-1.182-.674-1.617-.434-.449-.98-.673-1.64-.673-.643 0-1.19.224-1.639.673-.434.435-.651.974-.651 1.618 0 .644.217 1.19.651 1.64.45.449.996.673 1.64.673z" />
        </Mask>
        <Path
          d="M32.089 44.68h23.629V41.04h-23.63v3.639zm11.792-7.974c.659 0 1.205-.217 1.64-.651.449-.45.673-.996.673-1.64 0-.659-.224-1.205-.674-1.64-.434-.449-.98-.673-1.64-.673-.643 0-1.19.224-1.639.673-.434.435-.651.981-.651 1.64 0 .644.217 1.19.651 1.64.45.434.996.651 1.64.651zm0 16.913c.659 0 1.205-.224 1.64-.674.449-.449.673-.995.673-1.64 0-.643-.224-1.182-.674-1.617-.434-.449-.98-.673-1.64-.673-.643 0-1.19.224-1.639.673-.434.435-.651.974-.651 1.618 0 .644.217 1.19.651 1.64.45.449.996.673 1.64.673z"
          fill="#fff"
        />
        <Path
          d="M32.089 44.68h-.4v.4h.4v-.4zm23.629 0v.4h.4v-.4h-.4zm0-3.639h.4v-.4h-.4v.4zm-23.63 0v-.4h-.4v.4h.4zm13.432-8.266l-.287.279.01.009.277-.288zm-3.279 3.28l-.288.278.01.01.278-.288zm3.28 16.89l-.283-.283-.005.005.288.278zm0-3.257l-.288.279.01.01.277-.288zm-3.28 0l.283.283-.283-.282zm0 3.257l-.287.278.004.005.283-.283zM32.09 45.08h23.629v-.8h-23.63v.8zm24.029-.4V41.04h-.8v3.639h.8zm-.4-4.039h-23.63v.8h23.63v-.8zm-24.03.4v3.639h.8V41.04h-.8zm12.193-3.935c.756 0 1.407-.253 1.922-.769l-.565-.565c-.354.353-.796.534-1.357.534v.8zm1.922-.769c.526-.525.791-1.174.791-1.922h-.8c0 .54-.183.984-.556 1.357l.565.566zm.791-1.922c0-.76-.264-1.413-.796-1.927l-.556.575c.367.354.552.795.552 1.352h.8zm-.786-1.918c-.514-.531-1.166-.795-1.927-.795v.8c.557 0 .998.185 1.352.551l.575-.556zm-1.927-.795c-.748 0-1.397.265-1.923.79l.566.566a1.833 1.833 0 011.357-.556v-.8zm-1.923.79c-.515.516-.768 1.167-.768 1.923h.8c0-.561.18-1.003.534-1.357l-.566-.566zm-.768 1.923c0 .744.255 1.391.764 1.918l.575-.556a1.872 1.872 0 01-.54-1.362h-.8zm.773 1.927a2.671 2.671 0 001.918.764v-.8c-.544 0-.99-.18-1.362-.539l-.556.575zm1.918 17.677c.76 0 1.413-.264 1.927-.796l-.575-.556c-.354.367-.795.552-1.352.552v.8zm1.922-.79c.526-.526.791-1.175.791-1.923h-.8c0 .54-.183.983-.556 1.357l.565.565zm.791-1.923c0-.749-.266-1.393-.796-1.905l-.556.575c.37.356.552.79.552 1.33h.8zm-.786-1.895c-.514-.532-1.166-.796-1.927-.796v.8c.557 0 .998.185 1.352.552l.575-.556zm-1.927-.796c-.748 0-1.397.265-1.923.79l.566.566a1.832 1.832 0 011.357-.556v-.8zm-1.923.79c-.513.514-.768 1.156-.768 1.9h.8c0-.543.179-.978.534-1.334l-.566-.565zm-.768 1.9c0 .745.255 1.392.764 1.918l.575-.556a1.872 1.872 0 01-.54-1.361h-.8zm.768 1.923c.526.526 1.175.791 1.923.791v-.8c-.54 0-.984-.184-1.357-.556l-.566.565z"
          fill="#fff"
          mask="url(#a)"
        />
      </Svg>
    </TouchableOpacity>
  );
}
