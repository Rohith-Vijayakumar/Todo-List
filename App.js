import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useState } from "react";
import Header from "./components/Header";
import Todoitem from "./components/Todoitem";
import { Button, TextInput } from "react-native";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Complete Todo list", key: 1 },
    { text: "Complete Simple Calculator", key: 2 },
  ]);

  const [textInput, setTextInput] = useState("");

  const addTodo = () => {
    const newTodo = {
      key: Math.random(),
      text: textInput,
    };
    setTodos([...todos, newTodo]);
    setTextInput("");
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* List */}
        <TextInput
          value={textInput}
          placeholder="Add Todo"
          onChangeText={(text) => setTextInput(text)}
          style={styles.input}
        ></TextInput>
        <Button onPress={addTodo} title="Add Task"></Button>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => <Todoitem item={item} />}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
  input: {
    marginBottom: 20,
    borderColor: "grey",
    borderStyle: "solid",
    borderWidth: 1,
    padding: 8,
    borderRadius: 10,
  },
});
