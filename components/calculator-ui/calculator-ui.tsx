import { useState } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Input } from "./input";
import { Output } from "./output";
import { ValidateExpression } from "../../utils";

export function CalculatorUI() {
  const { top, bottom } = useSafeAreaInsets();
  const [expression, setExpression] = useState<string | null>(null);
  const [result, setResult] = useState<null | number>(null);
  function Clear() {
    setExpression(null);
    setResult(null);
  }
  return (
    <View
      style={{
        flex: 1,
        paddingTop: top,
        backgroundColor: "#000",
      }}
    >
      <View
        style={{
          flexDirection: "column",
          position: "absolute",
          alignSelf: "center",
          bottom,
        }}
      >
        <Output result={result} expression={expression} />
        <Input
          onValuePressed={(newValue) => {
            try {
              if (expression && result) {
                setExpression(result.toString() + newValue);
                setResult(null);
                return;
              }
              setExpression((prevValue) =>
                ValidateExpression(prevValue, newValue)
              );
            } catch (error) {}
          }}
          onActionPressed={(action) => {
            try {
              if (action === "clear") {
                Clear();
              }
              if (action === "equal") {
                setResult(eval(expression));
              }
            } catch (error) {}
          }}
        />
      </View>
    </View>
  );
}
