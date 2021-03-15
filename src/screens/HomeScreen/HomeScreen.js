/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {useState} from 'react';
import {FlatList, SafeAreaView, StatusBar, Text, View} from 'react-native';
import styles from './styles';

const HomeScreen = props => {
  const [todoItems, setTodoItems] = useState([]);

  function addTodoItem(_text) {
    setTodoItems([...todoItems, _text]);
  }

  function deleteTodoItem(_index) {
    let tempArr = [...todoItems];
    tempArr.splice(_index, 1);
    setTodoItems(tempArr);
  }

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'#212121'} />
      <SafeAreaView style={{padding: 16}}>
        <Text style={{fontSize: 36, fontWeight: 'bold'}}>Todo</Text>
        <TodoInput onPress={addTodoItem} />
        <FlatList
          data={todoItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{paddingVertical: 8}}
                onPress={() => deleteTodoItem(index)}>
                <Text style={{fontSize: 18}}>{item}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
