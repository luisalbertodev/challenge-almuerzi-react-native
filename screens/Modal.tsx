import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import { BASE_URL } from "../shared/data";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ({ navigation }) => {
  const id = navigation.getParam("_id");
  const { isLoading, dataSource } = useFetch(`${BASE_URL}/api/meals/${id}`);

  const onGoToMealsScreen = () => navigation.navigate("Meals");

  const onCreateOrder = async () => {
    const headers = {
      "Content-Type": "application/json",
    };

    const body = JSON.stringify({
      meal: id,
      user_id: "lalala",
    });

    try {
      await fetch(`${BASE_URL}/api/orders`, {
        method: "POST",
        headers,
        body,
      });
      alert("Orden fue generada con exito");
      onGoToMealsScreen();
    } catch (error) {
      alert("Ocurrio un error");
    }
  };

  return (
    <View style={styles.container}>
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <>
          <Text>{dataSource._id}</Text>
          <Text>{dataSource.name}</Text>
          <Text>{dataSource.desc}</Text>
          <Button title="Aceptar" onPress={onCreateOrder} />
          <Button title="Cancelar" onPress={onGoToMealsScreen} />
        </>
      )}
    </View>
  );
};
