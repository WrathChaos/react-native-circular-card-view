import { ScreenWidth, ScreenHeight } from "@freakycoder/react-native-helpers";

export const _titleStyle = () => {
  return { fontSize: 20, color: "#313032" };
};

export const _container = (height, width, backgroundColor) => {
  return {
    height,
    width,
    backgroundColor,
    borderTopEndRadius: 30,
    borderBottomEndRadius: 30,
    borderTopStartRadius: 100,
    borderBottomStartRadius: 100
  };
};

export const _shadowStyle = shadowColor => {
  return {
    shadowColor,
    shadowRadius: 8,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 4,
      height: 4
    }
  };
};

export default {
  containerGlue: { flexDirection: "row" },
  imageStyle: {
    width: 125,
    height: 125,
    borderRadius: 75
  },
  textContainer: {
    margin: 16,
    width: ScreenWidth * 0.4
  },
  titleStyle: {
    fontSize: 20,
    color: "#313032"
  },
  descriptionStyle: {
    fontSize: 10,
    color: "#ddddde",
    fontWeight: "700"
  },
  iconContainer: {
    top: 16,
    right: 16,
    position: "absolute"
  },
  priceTextContainer: {
    right: 16,
    bottom: 16,
    position: "absolute"
  },
  priceTextStyle: {
    fontSize: 20,
    color: "#414045",
    fontWeight: "600"
  }
};
