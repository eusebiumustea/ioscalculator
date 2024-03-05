export function ValidateExpression(prevValue: string | null, newValue: string) {
  if (
    prevValue === "0" &&
    !Number.isNaN(Number(newValue === "." ? "0" : newValue))
  ) {
    return newValue;
  }
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
export function toggleNegative(lastNumber: string) {
  return (prev: string) => {
    if (!prev) {
      return "(-0)";
    }
    if (lastNumber.includes("-")) {
      return (
        prev.slice(0, prev.length - lastNumber.length) +
        lastNumber.slice(2, lastNumber.length - 1)
      );
    }
    return prev.slice(0, prev.length - lastNumber.length) + `(-${lastNumber})`;
  };
}
