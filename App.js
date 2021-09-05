/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  View,
  Button,
  StyleSheet,
  FlatList,
} from 'react-native';
import TodoInput from './src/components/TodoInput';
import TodoItem from './src/components/TodoItem';

const App = () => {
  const [list, setList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (todoTitle) => {
    setList((currentList) => [
      ...currentList,
      { id: Math.random().toString(), value: todoTitle },
    ]);
    setIsAddMode(false);
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  const removeTodoHandler = (id) => {
    setList((currentList) => {
      return currentList.filter((todo) => todo.id !== id);
    });
  };

  return (
    <View style={styles.screen}>
      <Button
        title="Add Todo"
        onPress={() => setIsAddMode(true)}
      />

      <TodoInput
        visible={isAddMode}
        onAddTodo={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />

      <FlatList
        keyExtractor={(item) => item.id}
        data={list}
        renderItem={(itemData) => (
          <TodoItem
            id={itemData.item.id}
            onDelete={removeTodoHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});

export default App;
