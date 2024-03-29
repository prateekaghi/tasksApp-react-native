import { Image, Button, Modal, StyleSheet, View } from "react-native";
import { useState } from "react";
import TasksInput from "./components/TasksInput";
import TaskList from "./components/TaskList";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [modal, setmodal] = useState(false);

  const cardPressed = (id) => {
    setTasks((oldtasks) => {
      return oldtasks.filter((task) => {
        return task.id !== id;
      });
    });
  };

  const addTask = (call) => {
    setTasks((oldTask) => [
      ...oldTask,
      { text: call, id: Math.random().toString() },
    ]);
    setmodal(false);
  };

  const openAddTaskModal = () => {
    setmodal(true);
  };
  return (
    <View style={styles.AppContainer}>
      <StatusBar
        style="dark"
        networkActivityIndicatorVisible="false"
        animated="true"
      />
      <Image
        resizeMethod="auto"
        resizeMode="contain"
        style={styles.image}
        source={require("./assets/images/logocopy.jpg")}
      />
      <Button
        title="Click to Add Tasks"
        color={"#80bd01"}
        onPress={openAddTaskModal}
      ></Button>
      <Modal visible={modal} animationType="slide">
        <View style={styles.ModalContainer}>
          <TasksInput
            onCancel={() => {
              setmodal(false);
            }}
            onTaskSubmit={addTask.bind(this)}
          />
        </View>
      </Modal>

      <TaskList onCardPressed={cardPressed} tasks={tasks} />
    </View>
  );
}

const styles = StyleSheet.create({
  AppContainer: {
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 50,
  },

  ModalContainer: {
    paddingTop: 50,
  },
  image: {
    height: 200,
    width: 200,
    marginHorizontal: 100,
    marginBottom: 0,
  },
});
