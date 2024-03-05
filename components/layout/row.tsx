import { PropsWithChildren } from "react";
import { View } from "react-native";

export function Row({ children }: PropsWithChildren) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        gap: 14,
        alignItems: "center",
      }}
    >
      {children}
    </View>
  );
}
