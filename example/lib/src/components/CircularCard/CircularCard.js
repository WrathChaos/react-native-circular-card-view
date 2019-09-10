import React from "react";
import PropTypes from "prop-types";
import { Text, View, Image } from "react-native";
import Androw from "react-native-androw";
import Icon from "react-native-dynamic-vector-icons";
import { ScreenWidth, ScreenHeight } from "@freakycoder/react-native-helpers";

const CircularCard = props => {
  const { title } = props;
  return (
    <Androw
      style={{
        shadowRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: {
          width: 4,
          height: 4
        }
      }}
    >
      <View
        style={{
          height: 125,
          borderTopEndRadius: 30,
          width: ScreenWidth * 0.9,
          borderBottomEndRadius: 30,
          borderTopStartRadius: 100,
          backgroundColor: "#fcfcfc",
          borderBottomStartRadius: 100
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ width: 125, height: 125, borderRadius: 75 }}
            source={{
              uri:
                "https://images.unsplash.com/photo-1520763185298-1b434c919102?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
            }}
          />
          <View style={{ margin: 16, width: ScreenWidth * 0.4 }}>
            <Text style={{ fontSize: 20, color: "#313032" }}>Gerbera</Text>
            <View style={{ marginTop: 8 }}>
              <Text
                style={{ fontSize: 10, color: "#ddddde", fontWeight: "700" }}
              >
                Gerbera's colors and form perfectly c onvey the best and most
                positive feelings.
              </Text>
            </View>
          </View>
          <View style={{ position: "absolute", top: 16, right: 16 }}>
            <Icon name="heart" type="AntDesign" size={22} color="#f5cbdc" />
          </View>
          <View style={{ position: "absolute", bottom: 16, right: 16 }}>
            <Text style={{ fontSize: 20, fontWeight: "600", color: "#414045" }}>
              $1
            </Text>
          </View>
        </View>
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
