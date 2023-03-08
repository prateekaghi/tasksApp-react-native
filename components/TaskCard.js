import React from "react";
import { StyleSheet, View, Text } from "react-native";

const TaskCard = (props) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.tasks}>{props.task.text}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "purple",
    borderRadius: 5,
    marginTop: 5,
    padding: 5,
  },
  tasks: {
    color: "white",
    fontSize: 25,
  },
});
export default TaskCard;
