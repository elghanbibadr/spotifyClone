import React from 'react'

const Meaning = (props) => {
  return (
    <>
      <p className='mt-10 flex items-center justify-between text-noun text-xl font-bold'>{props.partOfSpeech}</p>
        <div className="meaning mt-10">

            <p className='text-neutral-500 text-lg font-medium'>Meaning</p>
             <ul className='p-4'>
            {props.definitions.map(({definition},index) =>{
                return <li key={index} className='my-6 meaning-item font-semibold text-lg'>{definition}</li>
            })}
            </ul> 
            </div>
    </>
  )
}

export default Meaning