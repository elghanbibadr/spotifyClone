import React from 'react'

const Meaning = (props) => {
  return (
    <>
      <h3 className=' flex items-center justify-between text-noun text-xl font-bold dark:text-headingLight'>{props.partOfSpeech}</h3>
        <div className="meaning mt-10">

            <p className='text-neutral-500 text-lg font-medium'>Meaning</p>
             <ul className='p-4'>
            {props.definitions.map(({definition},index) =>{
                return <li key={index} className='my-4 meaning-item font-normal text-lg dark:text-textLight'>{definition}</li>
            })}
            </ul> 
            </div>
    </>
  )
}

export default Meaning