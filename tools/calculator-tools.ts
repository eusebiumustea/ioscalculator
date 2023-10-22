export function FindDecimalPlacesOfLastNumber(e: string) {
  var arr: boolean[] = [];
  let indexOfLastNaN: number;
  for (let i = 0; i < e.length; i++) {
    switch (e[i]) {
      case ".":
        arr = [...arr, false];
        break;
      // case "(":
      //   arr = [...arr, false];
      //   break;
      // case "-":
      //   arr = [...arr, false];
      //   break;
      // case ")":
      //   arr = [...arr, false];
      //   break;
      default:
        arr = [...arr, Number.isNaN(Number(e[i]))];
        break;
    }
  }

  indexOfLastNaN = arr.findLastIndex((e) => e === true);
  if (arr.includes(true) === false) {
    return arr.slice(0, arr.length).length;
  } else {
    return arr.slice(indexOfLastNaN + 1, arr.length).length;
  }
}
