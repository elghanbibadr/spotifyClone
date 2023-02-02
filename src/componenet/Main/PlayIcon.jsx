import React from 'react'

const PlayIcon = (props) => {
  return (
    <div onClick={props.onClick} className='bg-lighterAccent flex h-16 justify-center w-16 p-4 items-center relative bottom-3 rounded-full lg:w-20 lg:h-20'>
        <svg className='h-10 z-30' xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75"><g fill="#A445ED" fill-rule="evenodd"><circle cx="37.5" cy="37.5" r="37.5" opacity=".25"/><path d="M29 27v21l21-10.5z"/></g></svg>
   </div>
  )
}

export default PlayIcon