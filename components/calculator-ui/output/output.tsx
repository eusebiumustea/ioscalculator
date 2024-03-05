import { View, Text } from "react-native";
import { OutputProps } from "./types";
import { moderateFontScale } from "../../../tools/normalizeSize";

export function Output({ result, expression }: OutputProps) {
  return (
    <View
      style={{
        justifyContent: "flex-end",
        alignItems: "flex-end",
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: result ? moderateFontScale(26) : moderateFontScale(60),
          margin: 12,
        }}
      >
        {!expression ? "0" : expression}
      </Text>
      {result !== null && (
        <Text
          style={{
            color: "#ffffff",
            fontSize: moderateFontScale(90),
            margin: 12,
          }}
        >
          {result}
        </Text>
      )}
    </View>
  );
}
