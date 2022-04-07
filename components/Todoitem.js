import react from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function Todoitem({ item }) {
  return (
    <TouchableOpacity>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "yellowgreen",
    borderRadius: 10,
    borderStyle: "dashed",
    borderWidth: 1,
  },
});
