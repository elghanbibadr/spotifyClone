import React, { useRef } from 'react'
import axios from "axios";
import { useState ,useEffect} from 'react';
import SearchIcon from './SearchIcon';
import WordDetails from './WordDetails';

const Main = () => {
     const [FormSubmited,setFormSubmited] = useState(false);
     const [wordsData,setWordsData] = useState([])
     const inputRef=useRef()
  



  const handleFormSubmited=(e)=>{
    e.preventDefault();
    setFormSubmited(true)
    
  }
  
  useEffect(()=>{ 
    if (FormSubmited && inputRef.current.value){
      axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputRef.current.value}`)
      .then(response=>{
        console.log(response.data[0])
        setWordsData(response.data[0])
      }).catch(error=>{
        console.log(error.message)
      }).finally(()=>{
        setFormSubmited(false)
        setEnteredWord('')
      }
      )
    }
  }, [FormSubmited]);


  return (
    <section>
      <form onSubmit={handleFormSubmited} className='flex justify-between p-2 mx-auto my-10 rounded-md	 bg-blackVeryLight items-center border-myBorder border-accent'>
        <input  ref={inputRef} className='border-0 text-white outline-0 bg-transparent' type="text"  placeholder="Search for any word" />
        <SearchIcon />
      </form>
      { wordsData.length > 0 &&   wordsData.map(({word,phonetic,meanings,synonyms})=>{
     return  <WordDetails word={word} phonetic={phonetic} meaning={meanings} synonyms={synonyms} />
      })}
      {console.log(wordsData)}
    </section>
  )
}

export default Main