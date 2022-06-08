import React from 'react'
import {useDispatch} from 'react-redux'
import {decrement} from '../store/counterSlice'

function Decrement() {
    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={()=> dispatch(decrement())} className="bg-indigo-500 px-5 py-2 rounded-sm m-5">Decrement</button>
    </div>
  )
}

export default Decrement