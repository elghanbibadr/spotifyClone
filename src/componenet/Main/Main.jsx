import React, { useRef } from 'react'
import { useState ,useEffect} from 'react';
import SearchIcon from './SearchIcon';
import WordDetails from './WordDetails';

const Main = () => {
     const [wordsData,setWordsData] = useState([])
     const inputRef=useRef()
    const [wordNotFound,setWordNotFound] = useState(false)
    const [inputIsValid,setInputIsValid] = useState(true)
     const [error,setError] = useState([])

   
  const fetchWordDefinition=(e)=>{
    e.preventDefault();
   if(!inputRef.current.value){
    setInputIsValid(false)
    return
   } 
   setInputIsValid(true)
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputRef.current.value}`).then(response=>{
      return response.json()
    }).then(data=>{
      if (data.message){
        console.log(data)
        setWordNotFound(true)
        setError(data)
        setWordsData([])
        return;
      }
      setWordsData([data[0]])
      setWordNotFound(false)
    })
  }

  useEffect(()=>{
    inputRef.current.value="keyboard"
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/keyboard`).then(response=>{
      return response.json()
    }).then(data=>{
      setWordsData([data[0]])
    })

  },[])
  
  return (
    <section>
      <form onSubmit={fetchWordDefinition} className={`flex justify-between p-4 mx-auto my-10 rounded-md	 bg-blackVeryLight items-center border-myBorder  ${inputIsValid ? 'border-accent' : 'border-red-600' } dark:bg-bodyLightBg `}>
        <input  ref={inputRef} className='border-0 text-white font-bold outline-0 bg-transparent dark:text-blackVeryLight' type="text"  placeholder="Search for any word" />
        <SearchIcon />
      </form>
      {!inputIsValid && <p className='text-red-600 text-lg relative bottom-9'>Whoops, can’t be empty…</p>}
      {   wordsData.length > 0 &&    wordsData.map(({word,phonetic,meanings,phonetics},index)=>{
     return  <WordDetails key={index} word={word} phonetic={phonetic} meaning={meanings} phonetics={phonetics} />
      })} 
      { wordNotFound && 
      <div className='text-white text-center px-6 pt-8 flex flex-col items-center dark:text-textLight '>
        <span className='icon-pal '>😕</span>
    <h1  className='font-bold text-xl my-8'>{error.title}</h1>
    <p className=' text-lg' >{error.message}</p>
      </div>
      }
    </section>
  )
}

export default Main