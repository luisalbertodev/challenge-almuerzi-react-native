import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ListItem from "../components/ListItem";
import Loader from "../components/Loader";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../shared/data";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  list: {
    alignSelf: "stretch",
  },
});

const Meals = ({ navigation }) => {
  const { isLoading, dataSource } = useFetch(`${BASE_URL}/api/meals`);

  return (
    <View style={styles.container}>
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <FlatList
          style={styles.list}
          data={dataSource}
          keyExtractor={(x) => String(x._id)}
          renderItem={({ item }) => (
            <ListItem
              title={item.name}
              onPress={() => navigation.navigate("Modal", { _id: item._id })}
            />
          )}
        />
      )}
    </View>
  );
};

Meals.navigationOptions = {
  title: "Comidas disponibles",
};

export default Meals;
