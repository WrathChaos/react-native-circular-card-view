import React, { Fragment } from "react";
import { View, FlatList, StatusBar, SafeAreaView } from "react-native";
import CircularCard from "./lib/src/components/CircularCard/CircularCard";

const data = [
  {
    title: "Tulip",
    description:
      "The tulip is a popular spring bulb. It offers the greatest variety in color, shape, and form.",
    price: "$0.8",
    rippleColor: "#f5cbdc",
    color: "#f5cbdc",
    image:
      "https://images.unsplash.com/photo-1520763185298-1b434c919102?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
  },
  {
    title: "Gerbera",
    description:
      "Gerbera's colors and form perfectly c onvey the best and most positive feelings.",
    price: "$0.8",
    rippleColor: "#b0e3fe",
    color: "#b0e3fe",
    image:
      "https://images.unsplash.com/photo-1525535130303-eb1cb600f68c?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  }
];

const App = () => {
  renderItem = value => {
    const { title, description, price, image, color, rippleColor } = value.item;
    return (
      <View style={{ marginTop: 16 }}>
        <CircularCard
          title={title}
          price={price}
          color={color}
          source={image}
          description={description}
          rippleColor={rippleColor}
        />
      </View>
    );
  };

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ margin: 16, height: "100%" }}>
          <FlatList data={data} renderItem={renderItem} />
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
