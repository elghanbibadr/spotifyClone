import React, { useRef } from 'react'
import axios from "axios";
import { useState ,useEffect} from 'react';
import SearchIcon from './SearchIcon';
import WordDetails from './WordDetails';

const Main = () => {
     const [wordsData,setWordsData] = useState([])
     const inputRef=useRef()
  



  const fetchWordDefinition=(e)=>{
    e.preventDefault();
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputRef.current.value}`).then(response=>{
      return response.json()
    }).then(data=>{
      setWordsData([data[0]])
      console.log(data[0])
    })

  }
  
  

  return (
    <section>
      <form onSubmit={fetchWordDefinition} className='flex justify-between p-2 mx-auto my-10 rounded-md	 bg-blackVeryLight items-center border-myBorder border-accent'>
        <input  ref={inputRef} className='border-0 text-white outline-0 bg-transparent' type="text"  placeholder="Search for any word" />
        <SearchIcon />
      </form>
      <h1>hello word</h1>
      { wordsData.length > 0 &&    wordsData.map(({word,phonetic,meanings,synonyms})=>{
     return  <WordDetails word={word} phonetic={phonetic} />
      })} 
      {console.log(wordsData)}
    </section>
  )
}

export default Main