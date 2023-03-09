import React, { useState } from "react";
import { Button } from "react-native";

import { StyleSheet, View, Text, TextInput } from "react-native";

const TasksInput = (props) => {
  const [task, settask] = useState("");
  const buttonClicked = () => {
    props.onTaskSubmit(task);
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
          onSubmitEditing={buttonClicked}
          onChangeText={(e) => {
            settask(e);
          }}
          style={Styles.taskField}
          placeholder="Enter Task"
        />
        <View style={Styles.buttonContainer}>
          <View style={Styles.button}>
            <Button onPress={buttonClicked} title="Add Task" />
          </View>
          <View style={Styles.button}>
            <Button color={"red"} onPress={props.onCancel} title="Cancel" />
          </View>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  box: {
    borderBottomWidth: 5,
    paddingBottom: 15,
    borderBottomColor: "#80bd01",
  },
  container: {
    alignContent: "center",
  },
  buttonContainer: { flexDirection: "row", justifyContent: "center" },
  inputContainer: {
    flexDirection: "column",
  },
  taskLabel: {
    margin: 2,
    fontSize: 20,
    fontWeight: 600,
    color: "#80bd01",
  },
  taskField: {
    borderWidth: 2,
    padding: 2,
    margin: 2,
  },
  button: {
    width: 100,
    marginHorizontal: 10,
  },
});

export default TasksInput;
