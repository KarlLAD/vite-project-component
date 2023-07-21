import React from 'react'
import { useDispatch } from 'react-redux'
import { plus, moins, reset } from '../redux'


const Button = () => {

  const dispatch = useDispatch();

  return (
    <>
    <button onClick={()=>dispatch(moins())} className="btn">Moins</button>
    <button onClick={()=>dispatch(plus())} className="btn">Plus</button>
    <button onClick={()=>dispatch(reset())} className="btn">Reset</button>

    </>
  )
}

export default Button