import React, { useRef } from 'react'
import axios from "axios";
import { useState ,useEffect} from 'react';
import SearchIcon from './SearchIcon';
import WordDetails from './WordDetails';

const Main = () => {
     const [wordsData,setWordsData] = useState([])
     const inputRef=useRef()
    const [wordNotFound,setWordNotFound] = useState(false)
    const [inputIsValid,setInputIsValid] = useState(true)



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
        setWordNotFound(true)
        setWordsData([])
        return;
      }
      setWordsData([data[0]])
      setWordNotFound(false)
    })
  }
  
  console.log(wordsData)

  return (
    <section>
      <form onSubmit={fetchWordDefinition} className={`flex justify-between p-2 mx-auto my-10 rounded-md	 bg-blackVeryLight items-center border-myBorder ${inputIsValid ? 'border-accent' : 'border-red-600' } `}>
        <input  ref={inputRef} className='border-0 text-white outline-0 bg-transparent' type="text"  placeholder="Search for any word" />
        <SearchIcon />
      </form>
      <h1>hello word</h1>
      {   wordsData.length > 0 &&    wordsData.map(({word,phonetic,meanings,synonyms,phonetics})=>{
     return  <WordDetails word={word} phonetic={phonetic} meaning={meanings} phonetics={phonetics} />
      })} 
      { wordNotFound &&  <h1 className='text-white'>not found word</h1>}
    </section>
  )
}

export default Main