import { Dimensions, PixelRatio } from "react-native";
const { width, height } = Dimensions.get("window");
const guidelineBaseWidth = 392;
const guidelineBaseHeight = 844;
const scale = (size: number) => (width / guidelineBaseWidth) * size;

export const responsiveHeight = (size: number) =>
  (height * size) / guidelineBaseHeight;
export const moderateFontScale = (size: number) =>
  size + (PixelRatio.getFontScale() * size - size) * -0.8;
export const responsiveWidth = (size: number) => {
  return (width * size) / guidelineBaseWidth;
};
export const moderateScale = (size: number) => {
  return PixelRatio.roundToNearestPixel(size + (scale(size) - size) * 0.8);
};
