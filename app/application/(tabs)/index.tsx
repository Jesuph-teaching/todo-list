import { getMyTodos } from "@/api/todo";
import Todo from "@/components/Todo";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import React from "react";
import { View, SafeAreaView, RefreshControl, ScrollView } from "react-native";
import { Button, IconButton, Text } from "react-native-paper";

export default function TodoList() {
  const router = useRouter();
  const { data, isFetching, isError, error, refetch } = useQuery({
    queryFn: getMyTodos,
    queryKey: ["todos"],
  });
  const todos = data || [];

  console.log({ todos });
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
          paddingTop: 40,
          gap: 20,
        }}
        refreshControl={
          <RefreshControl refreshing={isFetching} onRefresh={refetch} />
        }
      >
        {isError ? (
          <Text> An error occurred: {(error as Error).message}</Text>
        ) : (
          <>
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
          </>
        )}
        <IconButton
          icon="plus"
          size={40}
          mode="contained"
          style={{
            position: "absolute",
            bottom: 20,
            right: 20,
          }}
          onPress={() => {
            router.navigate("/application/addTodo");
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
