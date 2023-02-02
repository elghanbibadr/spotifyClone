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
        <div className="meaning mt-10">

            <p className='text-neutral-500 font-bold'>Meaning</p>
             <ul className='p-4'>
            {props.meaning[0].definitions.map(({definition}) =>{
                return <li className='my-6 meaning-item'>{definition}</li>
            })}
            </ul> 

        </div>
    </article>
  )
}

export default WordDetails