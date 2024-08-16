//useSelector: Allows you to access specific parts of the Redux state and
// automatically re-renders the component when that state changes.
//useDispatch: Provides the dispatch function, enabling you to send actions to the Redux store.

import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { purchaseBook } from './BookAction'
function BookContainer() {
    const totalbooks=useSelector(state=>state.numberOfBooks)
    const dispatch=useDispatch()
  return (
    <><div>BookContainer</div>
    <button onClick={() => (dispatch(purchaseBook))}/>
      </>
  )
}

export default BookContainer