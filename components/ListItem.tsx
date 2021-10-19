import React, { FC } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface IProps {
  title: string;
  onPress: () => void;
}

const ListItem: FC<IProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    height: 54,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 16,
  },
});
