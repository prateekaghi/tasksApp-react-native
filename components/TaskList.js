import React from "react";
import { View, Text } from "react-native";

const TaskList = (props) => {
  console.log(props);
  return (
    <View>
      {props.tasks.map((task) => {
        return <Text key={task.id}>{task.text}</Text>;
      })}
    </View>
  );
};

export default TaskList;
