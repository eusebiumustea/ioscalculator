import { useMemo } from "react";

export function useExpression(expression: string) {
  const lastNumber = useMemo(() => {
    if (!expression) {
      return "0";
    }
    const indexOfLastNaN = expression
      .split("")
      .findLastIndex(
        (value) =>
          value !== "." &&
          value !== "(" &&
          value !== ")" &&
          Number.isNaN(Number(value))
      );
    if (expression.slice(indexOfLastNaN + 1).includes(")")) {
      return "(-" + expression.slice(indexOfLastNaN + 1);
    }
    return expression.slice(indexOfLastNaN + 1);
  }, [expression]);
  return { lastNumber };
}
