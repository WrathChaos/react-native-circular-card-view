import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";

import CircularCard from "./lib/src/components/CircularCard/CircularCard";

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{ margin: 16 }}>
          <CircularCard />
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
