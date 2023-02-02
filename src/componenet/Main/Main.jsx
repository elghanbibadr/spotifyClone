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
  
console.log(wordsData)
  return (
    <section>
      <form onSubmit={fetchWordDefinition} className={`flex justify-between p-4 mx-auto my-10 rounded-md	 bg-blackVeryLight items-center border-myBorder ${inputIsValid ? 'border-accent' : 'border-red-600' } `}>
        <input  ref={inputRef} className='border-0 text-white font-bold outline-0 bg-transparent' type="text"  placeholder="Search for any word" />
        <SearchIcon />
      </form>
      <h1>hello word</h1>
      {   wordsData.length > 0 &&    wordsData.map(({word,phonetic,meanings,phonetics},index)=>{
     return  <WordDetails key={index} word={word} phonetic={phonetic} meaning={meanings} phonetics={phonetics} />
      })} 
      { wordNotFound && 
      <div className='text-white text-center px-6 pt-8 flex flex-col items-center '>
        <span className='icon-pal'>😕</span>
    <h1  className='font-bold text-xl my-6'>{error.title}</h1>
    <p className=' text-lg' >{error.message}</p>
      </div>
      }
    </section>
  )
}

export default Main