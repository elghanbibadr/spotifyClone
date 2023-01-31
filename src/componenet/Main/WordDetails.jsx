import React from 'react'
import PlayIcon from './PlayIcon'

const WordDetails = (props) => {
  return (
    <>
        <div className='flex'>
            <div >
                <h1>{props.word}</h1>
                <span>{props.phonetic}</span>
            
            </div>
            <div className='bg-lighterAccent'>
               <PlayIcon /> 
            </div>
        </div>
    </>
  )
}

export default WordDetails