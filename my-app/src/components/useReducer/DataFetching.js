import React, { useEffect, useReducer } from 'react'
import axios from 'axios'


const initialState = {
  loading: true,
  error: '',
  post: {}
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        post: action.payload,
        error: ''
      }
    case 'FETCH_ERROR':
      return {
        loading: false,
        post: {},
        error: 'Something went wrong'
      }
    default:
      return state;
  }
}

const DataFetching = () => {
  const [state, dispatch] = useReducer(reducer, initialState)


  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then(response => {
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
      })
      .catch(error => {
        dispatch({ type: 'FETCH_ERROR' })
      })
  }, [])

  return (
    <div>
      {
        state.loading && (<div class="loader">
          <span></span>
          <span></span>
        </div>)
      }
      {!state.loading && state.post.title}
      {state.error ? state.error : null}
    </div>
  )
}

export default DataFetching