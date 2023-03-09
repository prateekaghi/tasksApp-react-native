import React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";

const TaskCard = (props) => {
  const cardPressed = () => {
    props.onCardPressed(props.task.id);
  };
  return (
    <View style={Styles.container}>
      <Pressable
        android_ripple={{ color: "#80bd01" }}
        onPress={cardPressed}
        style={({ pressed }) => (pressed ? Styles.pressedItem : "")}
      >
        <Text style={Styles.tasks}>{props.task.text}</Text>
      </Pressable>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "purple",
    borderRadius: 5,
    marginTop: 5,
  },
  pressedItem: { opacity: 1, backgroundColor: "#80bd01", borderRadius: 5 },

  tasks: {
    padding: 5,
    color: "white",
    fontSize: 25,
  },
});
export default TaskCard;
