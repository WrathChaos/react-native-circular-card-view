import React from "react";
import PropTypes from "prop-types";
import { Text, View, Image, TouchableOpacity } from "react-native";
import Androw from "react-native-androw";
import Icon from "react-native-dynamic-vector-icons";
import Ripple from "react-native-material-ripple";
import styles, { _container, _shadowStyle } from "./CircularCard.style";
import { ScreenWidth } from "@freakycoder/react-native-helpers";

const CircularCard = props => {
  const {
    width,
    title,
    height,
    source,
    priceText,
    imageStyle,
    titleStyle,
    priceStyle,
    shadowColor,
    description,
    shadowStyle,
    iconOnPress,
    backgroundColor,
    descriptionStyle
  } = props;
  return (
    <Androw style={shadowStyle || _shadowStyle(shadowColor)}>
      <Ripple
        rippleColor="#f5cbdc"
        rippleDuration={1250}
        rippleContainerBorderRadius={30}
        style={_container(height, width, backgroundColor)}
        {...props}
      >
        <View style={styles.containerGlue}>
          <Image
            style={imageStyle || styles.imageStyle}
            source={{ uri: source }}
          />
          <View style={styles.textContainer}>
            <Text style={titleStyle || styles.titleStyle}>{title}</Text>
            <View style={{ marginTop: 8 }}>
              <Text style={descriptionStyle || styles.descriptionStyle}>
                {description}
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.iconContainer} onPress={iconOnPress}>
            <Icon
              name="heart"
              type="AntDesign"
              size={22}
              color="#f5cbdc"
              {...props}
            />
          </TouchableOpacity>
          <View style={styles.priceTextContainer}>
            <Text style={priceStyle || styles.priceTextStyle}>{priceText}</Text>
          </View>
        </View>
      </Ripple>
    </Androw>
  );
};

CircularCard.propTypes = {
  width: PropTypes.number,
  title: PropTypes.string,
  height: PropTypes.number,
  description: PropTypes.string,
  priceText: PropTypes.string,
  shadowColor: PropTypes.string,
  backgroundColor: PropTypes.string
};

CircularCard.defaultProps = {
  shadowColor: "#000",
  title: "Gerbera",
  description:
    "Gerbera's colors and form perfectly c onvey the best and most positive feelings.",
  height: 125,
  width: ScreenWidth * 0.9,
  backgroundColor: "#fcfcfc",
  priceText: "$1"
};

export default CircularCard;
