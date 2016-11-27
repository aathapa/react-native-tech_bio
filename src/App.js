import React, {Component} from 'react';
import { View,Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList'

export default class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <Provider store = {createStore(reducers)} >
        <View style={{ flex: 1}}>
          <Header headerText = "Tech Bio"/>
          <LibraryList />
        </View>
      </Provider>
    );
  };
}
