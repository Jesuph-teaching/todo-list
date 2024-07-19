import { TodoI } from "@/api/todo";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import React from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function AddTodo() {
  const [newTodo, setNewTodo] = React.useState<TodoI>({
    title: "",
    description: "",
    dueDate: new Date(),
  });
  const [showDate, setShowDate] = React.useState(false);

  return (
    <View
      style={{
        paddingTop: 50,
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Text variant="headlineLarge">Add a new Todo</Text>
      <TextInput mode="outlined" label="Title" style={{ width: "80%" }} />
      <TextInput
        mode="outlined"
        label="Description"
        style={{ width: "80%", marginTop: 20 }}
      />
      <Button
        mode="outlined"
        style={{ width: "80%", marginTop: 20 }}
        onPress={() => setShowDate(true)}
      >
        {newTodo.dueDate.toDateString()}
      </Button>
      {showDate && (
        <RNDateTimePicker
          display="spinner"
          value={newTodo.dueDate}
          onChange={(d) => {
            if (d.type === "set") {
              setNewTodo((prev) => ({
                ...prev,
                dueDate: new Date(d.nativeEvent.timestamp),
              }));
            }
            setShowDate(false);
          }}
        />
      )}
      <Button
        mode="contained"
        icon="plus"
        style={{ marginTop: 20, width: "80%" }}
        labelStyle={{
          fontSize: 24,
          lineHeight: 30,
        }}
      >
        Add Todo
      </Button>
    </View>
  );
}
