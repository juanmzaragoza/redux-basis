import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import configureStore from './store/configureStore'
import Index from './pages/Index'

const store = configureStore()

render(
	<Provider store={store}>
    	<Index />
	</Provider>,
  	document.getElementById('basis')
)
