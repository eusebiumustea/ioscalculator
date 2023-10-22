import React from "react";
import { Text, TouchableOpacity } from "react-native";
import {
  moderateFontScale,
  responsiveHeight,
  responsiveWidth,
} from "../tools/normalizeSize";

export function ButtonContainer({
  number,
  style,
  fontStyle,
  icon,
  onPress,
}: any) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[
        {
          width: responsiveWidth(80),
          height: responsiveHeight(83),
          borderRadius: 10000,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#313131",
        },
        style,
      ]}
    >
      <Text
        style={[
          {
            fontSize: moderateFontScale(40),
            fontStyle: "normal",

            color: "#fff",
            position: "absolute",
            textAlign: "center",
          },
          fontStyle,
        ]}
      >
        {number}
      </Text>
      {icon !== null && icon}
    </TouchableOpacity>
  );
}
