export function ValidateExpression(prevValue: string | null, newValue: string) {
  if (!prevValue && newValue !== ".") {
    return newValue;
  }
  if (!prevValue && newValue === ".") {
    return "0" + ".";
  }
  if (prevValue === "0" && newValue === "0") {
    return "0";
  }
  return prevValue + newValue;
}
