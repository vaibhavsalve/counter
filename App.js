/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import {createStore} from 'redux';
import React, {Component} from 'react';
import Timer from './src/components/index.js';
import reducer from './src/components/reducers.js';
import {Provider} from 'react-redux';

const store = createStore(reducer)

export default class App extends  Component {
  render(){
   return(
    <Provider store ={store}>
      <Timer/>
  </Provider>
   )
  }

}
