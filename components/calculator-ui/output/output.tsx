import { View, Text, ScrollView } from "react-native";
import { OutputProps } from "./types";
import { moderateFontScale } from "../../../tools/normalizeSize";

export function Output({ result, expression }: OutputProps) {
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        justifyContent: "flex-end",
        alignItems: "flex-end",
        flex: 1,
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: result ? moderateFontScale(26) : moderateFontScale(60),
          marginHorizontal: 12,
        }}
      >
        {!expression ? "0" : expression}
      </Text>
      {result !== null && (
        <Text
          style={{
            color: "#ffffff",
            fontSize: moderateFontScale(60),
            marginHorizontal: 12,
          }}
        >
          {result}
        </Text>
      )}
    </ScrollView>
  );
}
