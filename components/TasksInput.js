import React, { useState } from "react";
import { Button } from "react-native";

import { StyleSheet, View, Text, TextInput } from "react-native";

const TasksInput = (props) => {
  const [task, settask] = useState("");
  const buttonClicked = () => {
    props.onTaskClicked(task);
    settask("");
  };
  return (
    <View style={Styles.box}>
      <View style={Styles.container}>
        <Text style={Styles.taskLabel}>Enter New Task</Text>
      </View>
      <View style={Styles.inputContainer}>
        <TextInput
          value={task}
          onChangeText={(e) => {
            settask(e);
          }}
          style={Styles.taskField}
          placeholder="Enter Task"
        />
        <Button onPress={buttonClicked} title="Add Task" />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  box: { borderBottomWidth: 2, paddingBottom: 15 },
  container: {
    alignContent: "center",
  },
  inputContainer: {
    flexDirection: "row",
  },
  taskLabel: {
    margin: 2,
    fontSize: 20,
    fontWeight: 600,
    color: "#80bd01",
  },
  taskField: {
    flex: 1,
    borderWidth: 2,
    padding: 2,
    margin: 2,
  },
});

export default TasksInput;
