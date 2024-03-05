import { useEffect, useState } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Input } from "./input";
import { Output } from "./output";
import { ValidateExpression, toggleNegative } from "../../utils";
import { useExpression } from "../../hooks";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function CalculatorUI() {
  const { top, bottom } = useSafeAreaInsets();
  const [expression, setExpression] = useState<string | null>(null);
  const { lastNumber } = useExpression(expression);
  const [result, setResult] = useState<null | number>(null);
  useEffect(() => {
    async function getStoredData() {
      const data = await AsyncStorage.getItem("data");
      if (!data) {
        return;
      }
      const parsedData = JSON.parse(data);
      setExpression(parsedData?.expression);
      setResult(parsedData?.result);
    }
    getStoredData();
  }, []);
  useEffect(() => {
    async function storeData() {
      await AsyncStorage.setItem(
        "data",
        JSON.stringify({
          expression,
          result,
        })
      );
    }
    storeData();
  }, [expression, result]);
  function Clear() {
    setExpression(null);
    setResult(null);
  }
  function Negative() {
    if (lastNumber.length === 0) {
      return;
    }
    if (result === 0) {
      setExpression("(-0)");
      setResult(null);
      return;
    }
    if (result && !result.toString().includes("-")) {
      setExpression(`(-${result})`);
      setResult(null);
      return;
    }
    if (result && result.toString().includes("-")) {
      setExpression(`(${result})`);
      setResult(null);
      return;
    }
    setExpression(toggleNegative(lastNumber));
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
              if (newValue === "0" && lastNumber === "0") {
                return;
              }
              if (result === 0) {
                setExpression("0" + newValue);
                setResult(null);
                return;
              }
              if (
                Number.isNaN(Number(newValue === "." ? "0" : newValue)) &&
                Number.isNaN(
                  Number(
                    expression[expression.length - 1] === ")"
                      ? "0"
                      : expression[expression.length - 1]
                  )
                )
              ) {
                return;
              }
              if (newValue === "." && lastNumber.includes(".")) {
                return;
              }
              if (
                lastNumber.includes("-") &&
                !Number.isNaN(Number(newValue === "." ? "0" : newValue))
              ) {
                setExpression(
                  (prevValue) =>
                    prevValue.slice(0, prevValue.length - 1) + newValue + ")"
                );
                return;
              }
              if (
                result &&
                result.toString().includes(".") &&
                newValue === "."
              ) {
                return;
              }
              if (result) {
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
              switch (action) {
                case "clear":
                  Clear();
                  break;
                case "equal":
                  setResult(eval(expression));
                  break;
                case "toggle-negative":
                  Negative();
                  break;
              }
            } catch (error) {}
          }}
        />
      </View>
    </View>
  );
}
