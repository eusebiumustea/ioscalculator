import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Text, ToastAndroid, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "../assets/Icon";
import { FindDecimalPlacesOfLastNumber } from "../tools/calculator-tools";
import {
  moderateFontScale,
  moderateScale,
  responsiveWidth,
} from "../tools/normalizeSize";
import { ButtonContainer } from "./ios-button-container";
export default function Calculator(svgProps: any) {
  const [expression, setExpression] = useState<string>("0");
  const decimalPlacesOfLastNumber = FindDecimalPlacesOfLastNumber(expression);
  const { bottom } = useSafeAreaInsets();
  const [result, setResult] = useState<string | number>(null);
  const [block, setBlock] = useState(false);
  const operators = ["/", "*", "-", "+"];
  const mathOperators = ["÷", "X", "-", "+"];
  const last = expression[expression?.length - 1];
  const lastIsNumber: boolean =
    last === ")" ? true : Number.isNaN(Number(last)) === false;
  useEffect(() => {
    async function GetData(key: string) {
      try {
        const res = await AsyncStorage.getItem(key);
        const data = JSON.parse(res);
        if (data) {
          setExpression(data?.e);
          setResult(data?.r);
        }
      } catch (_) {
        ToastAndroid.show(`Error while retrieving data`, 200);
        null;
      }
    }
    GetData("data");
  }, []);

  useEffect(() => {
    async function StoreData(value: any) {
      try {
        await AsyncStorage.setItem("data", JSON.stringify(value));
      } catch (_) {
        null;
      }
    }

    StoreData({ e: expression, r: result });
    return () => {
      StoreData({ e: expression, r: result });
    };
  }, [expression, result]);
  function RenderNumbers({ from, to }: any) {
    const buttons = [];
    for (let i = from; i < to + 1; i++) {
      buttons.push(
        <ButtonContainer
          onPress={() => {
            if (result) {
              setExpression(result.toString() + i);
              setResult(null);
            } else if (result === 0) {
              setExpression(i);
              setResult(null);
            } else if (expression === "0") {
              setExpression("" + i);
            } else if (last === ")") {
              setExpression(
                (e) =>
                  e.slice(0, e?.length - decimalPlacesOfLastNumber - 1) +
                  i +
                  ")"
              );
            } else if (result?.toString()[0] === "-") {
              setExpression(`(${result + i})`);
              setResult(null);
            } else if (result === Infinity) {
              Clear();
            } else if (last === ")") {
              null;
            } else {
              setExpression((e) => e + i);
            }
          }}
          key={i}
          number={i}
        />
      );
    }
    return (
      <View
        style={{
          flexDirection: "row",
          gap: 10,
        }}
      >
        {buttons}
      </View>
    );
  }

  function RenderOperators() {
    const displayOperators = [];
    for (let i = 0; i < operators?.length; i++) {
      displayOperators.push(
        <ButtonContainer
          onPress={() => {
            if (!lastIsNumber) {
              null;
            } else if (result && result?.toString()[0] !== "-") {
              setExpression(result?.toString() + operators[i]);
              setResult(null);
              setBlock(false);
            } else if (result && result?.toString()[0] === "-") {
              setExpression(`(${result})` + operators[i]);
              setResult(null);
              setBlock(false);
            } else if (Number.isFinite(result)) {
              Clear();
            } else if (
              expression.slice(expression?.length - 2, expression?.length) ===
              ".)"
            ) {
              null;
            } else {
              setExpression((e) => e + operators[i]);
              setBlock(false);
            }
          }}
          style={{ backgroundColor: "#F1A33B" }}
          key={i}
          number={mathOperators[i]}
          fontStyle={{ fontSize: moderateFontScale(50) }}
        />
      );
    }
    return displayOperators;
  }
  function GetExpressionResult() {
    try {
      if (lastIsNumber) {
        setResult(eval(expression));
      }
    } catch (_) {
      ToastAndroid.showWithGravity("Invalid Expresion", 100, ToastAndroid.TOP);
      Clear();
    }
  }
  function Clear() {
    setResult(null), setExpression("0");
    setBlock(false);
  }
  function Negative() {
    if (result && result.toString()[0] !== "-") {
      setExpression(`(-${result})`);
      setResult(null);
    } else if (result && result.toString()[0] === "-") {
      setExpression(`(${result})`);
      setResult(null);
    } else if (expression === "0") {
      null;
    } else if (result && result.toString().includes("+")) {
      null;
    } else if (last === ")") {
      null;
    } else if (!lastIsNumber) {
      null;
    } else {
      setExpression(
        expression.slice(0, expression?.length - decimalPlacesOfLastNumber) +
          `(-${expression.slice(
            expression?.length - decimalPlacesOfLastNumber,
            expression?.length
          )})`
      );
    }
  }
  function Percentage() {
    if (!lastIsNumber) {
      null;
    } else if (result) {
      setExpression(result.toString() + "%");
      setResult(null);
      setBlock(false);
    } else {
      setExpression((e) => e + "%");
      setBlock(false);
    }
  }
  function Double() {
    if (block) {
      null;
    } else if (result && Number.isInteger(result)) {
      setExpression(`${result}.`);
      setResult(null);
      setBlock(true);
    } else if (result === 0) {
      setExpression(`${result}.`);
      setResult(null);
      setBlock(true);
    } else if (!lastIsNumber) {
      null;
    } else if (last === ")") {
      setExpression((e) => e.slice(0, e?.length - 1) + ".)");
      setBlock(true);
    } else {
      setExpression((e) => e + ".");
      setBlock(true);
    }
  }
  function AddZero() {
    if (result === 0) {
      null;
    } else if (result) {
      setExpression(result.toString() + "0");
      setResult(null);
    } else if (expression === "0") {
      null;
    } else {
      setExpression((e) => e + "0");
    }
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
      }}
    >
      <View
        style={{
          position: "absolute",
          width: "100%",
          height: "40%",
          top: 0,
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <Text
          style={{
            fontSize:
              result !== undefined && result !== null
                ? moderateFontScale(20)
                : moderateFontScale(50),
            color: "white",
            fontWeight: expression === "0" ? "normal" : "bold",
            paddingRight: moderateScale(30),
          }}
        >
          {expression}
        </Text>
        {result !== undefined && result !== null && (
          <Text
            style={{
              fontSize: moderateFontScale(50),
              color: "white",
              paddingRight: moderateScale(30),
              fontWeight: "bold",
            }}
          >
            {result.toString()}
          </Text>
        )}
      </View>

      <View
        style={{
          width: "100%",
          height: "60%",
          position: "absolute",
          bottom: bottom,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            gap: 10,
          }}
        >
          <View style={{ flexDirection: "row", columnGap: 10 }}>
            <ButtonContainer
              onPress={Clear}
              style={{ backgroundColor: "#A5A5A5" }}
              number={"AC"}
              fontStyle={{
                color: "black",
                fontSize: moderateFontScale(36),
                fontWeight: "bold",
              }}
            />
            <ButtonContainer
              onPress={Negative}
              icon={<Icon />}
              style={{
                backgroundColor: "#A5A5A5",
              }}
            />
            <ButtonContainer
              onPress={Percentage}
              style={{ backgroundColor: "#A5A5A5" }}
              number={"%"}
              fontStyle={{ color: "black", fontWeight: "bold" }}
            />
          </View>
          <View style={{ gap: 10 }}>
            <RenderNumbers from={7} to={9} />
            <RenderNumbers from={4} to={6} />
            <RenderNumbers from={1} to={3} />
          </View>

          <View style={{ flexDirection: "row", gap: 10 }}>
            <ButtonContainer
              onPress={AddZero}
              fontStyle={{ left: "15%", position: "absolute" }}
              style={{
                width: responsiveWidth(170),
              }}
              number={"0"}
            />
            <ButtonContainer
              onPress={Double}
              fontStyle={{ fontSize: moderateFontScale(40) }}
              number={","}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "column",

            gap: 10,
          }}
        >
          {RenderOperators()}
          <ButtonContainer
            onPress={GetExpressionResult}
            style={{ backgroundColor: "#F1A33B" }}
            number={"="}
          />
        </View>
      </View>
    </View>
  );
}
