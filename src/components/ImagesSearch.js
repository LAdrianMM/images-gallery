import React, { useState } from 'react'

const ImagesSearch = ({ searchText }) => {
  const [text, setText] = useState('')

  const handlerSubmit = e => {
    e.preventDefault()
    searchText(text)
    setText('')
  }

  return (
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
      <form onSubmit={handlerSubmit} className='w-full max-w-sm'>
        <div className='flex items-center border-b-2 border-indigo-500 py-2'>
          <input 
            onChange={e => setText(e.target.value)}
            className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' 
            type='text' 
            placeholder='Search Image Term...'
            value={text} />
          <button className='flex-shrink-0 bg-indigo-500 hover:bg-indigo-700 border-indigo-500 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 rounded' type='submit'>
            Search
          </button>
        </div>
      </form>
    </div>
  )
}

export default ImagesSearch
