import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//store->holds state,action->describes changes in the state of application,reducer->actually carries out state transition depending on action
import { Provider, useSelector } from 'react-redux'
import store from './reduxContainer/Store'
import BookContainer from './reduxContainer/BookContainer'
function App() {
    return (
    <>
    <Provider store={store}>
      <BookContainer></BookContainer>
    </Provider>
    </>
  )
}

export default App



mv src/Redux/BookContainer.js src/Redux/BookContainer.jsx
