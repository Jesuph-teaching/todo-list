import { markCompleted, markUncompleted, TodoI } from "@/api/todo";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { Button, Card, Text } from "react-native-paper";

export default function Todo({
  id,
  title,
  description,
  dueDate,
  isCompleted,
}: TodoI) {
  const [isCurrentlyCompleted, setIsCurrentlyCompleted] = useState<
    boolean | undefined
  >(isCompleted);
  const MarkCompleteMutation = useMutation({
    mutationFn: isCurrentlyCompleted ? markUncompleted : markCompleted,
    mutationKey: ["mark", isCompleted],
    onSuccess: (data) => {
      setIsCurrentlyCompleted(data.isCompleted);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return (
    <Card>
      <Card.Content>
        <Text variant="titleLarge">{title}</Text>
        <Text variant="bodyMedium">{description}</Text>
        <Text variant="bodySmall">
          {dueDate.toLocaleDateString("en-UK", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </Text>
      </Card.Content>
      <Card.Actions>
        <Button
          onPress={() => {
            MarkCompleteMutation.mutate(id!);
          }}
        >
          {isCompleted ? "Mark as incomplete" : "Mark as complete"}
        </Button>
      </Card.Actions>
    </Card>
  );
}
