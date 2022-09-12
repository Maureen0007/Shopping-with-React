import React,{useState} from 'react'

function Form() {
    const [data, setData] = useState('')
  return (
      <form className='to-do form'>
          <input className='todo-input' placeholder='Add a task' value={data} name='text'
          />

      </form>
  )
}

export default Form