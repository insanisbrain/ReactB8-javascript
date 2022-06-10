import React, { useEffect, useRef } from 'react'

const FocusInput = () => {

  const inputRef = useRef(null)

  // useEffect(() => {
  //--> Initial Render only once
  // }, [])

  // useEffect(() => {
  //--> Initial Render & render every time on any change on component 
  // })

  // useEffect(() => {
  // On component destroy
  // return () => {
  // function
  // }
  // }, [])

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={() => inputRef.current.focus()} >Foucs Input</button>
    </div>
  )
}

export default FocusInput