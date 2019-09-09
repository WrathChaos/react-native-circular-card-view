import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import Androw from "react-native-androw";
import { ScreenWidth, ScreenHeight } from "@freakycoder/react-native-helpers";

const CircularCard = props => {
  const { title } = props;
  return (
    <Androw
      style={{
        shadowRadius: 5.46,
        shadowColor: "#000",
        shadowOpacity: 0.32,
        shadowOffset: {
          width: 0,
          height: 4
        }
      }}
    >
      <View
        style={{
          height: 150,
          backgroundColor: "#fcfcfc",
          borderTopEndRadius: 30,
          width: ScreenWidth * 0.9,
          borderBottomEndRadius: 30,
          borderTopStartRadius: 100,
          borderBottomStartRadius: 100
        }}
      >
        <Text>{title}</Text>
      </View>
    </Androw>
  );
};

CircularCard.propTypes = {
  example: PropTypes.number
};

CircularCard.defaultProps = {
  example: 5
};

export default CircularCard;
