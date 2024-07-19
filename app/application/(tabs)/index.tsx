import { getMyTodos } from "@/api/todo";
import Todo from "@/components/Todo";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

export default function TodoList() {
  const { data, isFetching, isError, error } = useQuery({
    queryFn: getMyTodos,
    queryKey: ["todos"],
  });
  if (isFetching) return <Text>Loading...</Text>;
  if (isError) return <Text>Error {JSON.stringify(error)}</Text>;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 40,
        gap: 20,
      }}
    >
      <Text variant="displayLarge">Todo List</Text>
      <View
        style={{
          flex: 1,
          width: "100%",
          paddingHorizontal: 20,
          gap: 20,
        }}
      >
        <Todo
          title="First Todo"
          description="some to do"
          dueDate={new Date()}
        />
      </View>
    </View>
  );
}
