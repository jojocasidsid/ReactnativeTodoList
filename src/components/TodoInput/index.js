import React, { useState } from 'react';

import {
  View,
  TextInput,
  Button,
  Modal,
} from 'react-native';

import styles from './styles';

const TodoInput = ({ onAddTodo, visible, onCancel }) => {
  const [enteredTodo, setEnteredTodo] = useState('');

  const todoInputHandler = (enteredText) => {
    setEnteredTodo(enteredText);
  };

  const addGoalHandler = () => {
    onAddTodo(enteredTodo);
    setEnteredTodo('');
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={todoInputHandler}
          value={enteredTodo}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              color="red"
              onPress={onCancel}
            />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TodoInput;
