import React from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import TaskCard from "./TaskCard";

const TaskList = (props) => {
  return (
    <FlatList
      data={props.tasks}
      keyExtractor={(item) => item.id}
      renderItem={(item) => {
        return (
          <TaskCard onCardPressed={props.onCardPressed} task={item.item} />
        );
      }}
    />
  );
};

export default TaskList;
