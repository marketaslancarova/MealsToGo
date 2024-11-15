import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, View } from "react-native";

import { RestaurantInfo } from "../components/restaurant-info.component";
import { colors } from "./src/utils/colors";

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar />
    </View>
    <View style={styles.list}>
      <RestaurantInfo />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    backgroundColor: colors.GREEN,
    flex: 1,
    padding: 16,
  },
});
