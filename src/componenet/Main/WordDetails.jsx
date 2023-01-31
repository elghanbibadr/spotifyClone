import React from 'react'
import PlayIcon from './PlayIcon'

const WordDetails = (props) => {
  return (
    <article className='text-white'>
        <div className='flex justify-between  items-center'>
            <div className='place-self-end' >
                <h1 className=' text-3xl mb-2 font-bold'>{props.word}</h1>
                <span className='text-accent'>{props.phonetic}</span>
            
            </div>
               <PlayIcon /> 
        </div>
        <p className='mt-10 flex items-center justify-between text-noun text-xl font-bold'>noun</p>
    </article>
  )
}

export default WordDetails