import { View } from "react-native";
import {
  Addition,
  Clear,
  DecimalAdd,
  Divider,
  Equal,
  Multiplier,
  Negative,
  Nr0,
  Nr1,
  Nr2,
  Nr3,
  Nr4,
  Nr5,
  Nr6,
  Nr7,
  Nr8,
  Nr9,
  Point,
  Substraction,
} from "../../assets";
import { Row } from "../../layout";
import { InputProps } from "./types";

export function Input({ onValuePressed, onActionPressed }: InputProps) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        gap: 14,
      }}
    >
      <Row>
        <Clear onPress={() => onActionPressed("clear")} />
        <Negative onPress={() => onActionPressed("toggle-negative")} />
        <DecimalAdd onPress={() => onActionPressed("decimal-add")} />
        <Divider onPress={() => onValuePressed("/")} />
      </Row>
      <Row>
        <Nr7 onPress={() => onValuePressed("7")} />
        <Nr8 onPress={() => onValuePressed("8")} />
        <Nr9 onPress={() => onValuePressed("9")} />
        <Multiplier onPress={() => onValuePressed("*")} />
      </Row>
      <Row>
        <Nr4 onPress={() => onValuePressed("4")} />
        <Nr5 onPress={() => onValuePressed("5")} />
        <Nr6 onPress={() => onValuePressed("6")} />
        <Substraction onPress={() => onValuePressed("-")} />
      </Row>
      <Row>
        <Nr1 onPress={() => onValuePressed("1")} />
        <Nr2 onPress={() => onValuePressed("2")} />
        <Nr3 onPress={() => onValuePressed("3")} />
        <Addition onPress={() => onValuePressed("+")} />
      </Row>
      <Row>
        <Nr0 onPress={() => onValuePressed("0")} />
        <Point onPress={() => onValuePressed(".")} />
        <Equal onPress={() => onActionPressed("equal")} />
      </Row>
    </View>
  );
}
