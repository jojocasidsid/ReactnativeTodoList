import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const TodoItem = ({ onDelete, title, id }) => {
  return (
    <TouchableOpacity onPress={() => onDelete(id)}>
      <View style={styles.listItem}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;
