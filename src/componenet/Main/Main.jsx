import React from 'react'
import axios from "axios";
import { useState ,useEffect} from 'react';
import SearchIcon from './SearchIcon';
import WordDetails from './WordDetails';

const Main = () => {
     const [enteredWord,setEnteredWord]=useState('');
     const [wordExist,setWordExist]=useState(false);
     const [FormSubmited,setFormSubmited] = useState(false);
     const [wordsData,setWordsData] = useState([])
    const options = {
      methode:"Get",
      url: `https://api.dictionaryapi.dev/api/v2/entries/en/${enteredWord}`,
     
    };
  

  const inputChangeHandler=(e)=>{
    setEnteredWord(e.target.value);
  }

  const handleFormSubmited=(e)=>{
    e.preventDefault();
    setFormSubmited(true)
    
  }
  
  useEffect(()=>{ 
    if (FormSubmited && enteredWord !==''){
      axios.request(options).then(function (response) {
       if (response.status===200) {
         setWordExist(true)
          setWordsData(response.data[0])
       }
        console.log(response.data[0])

      }).catch(function (error) {
        console.error(error);
      }).finally(()=>{
        setEnteredWord('')
        setFormSubmited(false)
        setWordExist(false)
      })
      console.log('running')
    }
  },[FormSubmited])

  {console.log('compnenet running')}
  return (
    <section>
      <form onSubmit={handleFormSubmited} className='flex justify-between p-2 mx-auto my-10 rounded-md	 bg-blackVeryLight items-center border-myBorder border-accent'>
        <input onChange={inputChangeHandler} className='border-0 text-white outline-0 bg-transparent' type="text" value={enteredWord} placeholder="Search for any word" />
        <SearchIcon />
      </form>
      { wordsData.length > 0 &&   wordsData.map(({word,phonetic,meanings,synonyms})=>{
     return  <WordDetails word={word} phonetic={phonetic} meaning={meanings} synonyms={synonyms} />
      })}
    </section>
  )
}

export default Main