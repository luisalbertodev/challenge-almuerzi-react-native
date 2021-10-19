import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

interface IProps {
  isLoading: boolean;
}

const Loader: FC<IProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>loading...</Text>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
  },
});
