import React from 'react'
import axios from "axios";
import { useState ,useEffect} from 'react';
import SearchIcon from './SearchIcon';
import WordDetails from './WordDetails';

const Main = () => {
     const [enteredWord,setEnteredWord]=useState('');
     const [wordExist,setWordExist]=useState(false);
     const [FormSubmited,setFormSubmited] = useState(false);
     const [wordsData,setWordsData] = useState([{
       word:'Housedown',
       phonetic:'/hʌʊs/',
       synonyms:['mouse','shope'],
       meaning:['A structure built or serving as an abode of human beings','The people who live in a house; a household.','A building used for something other than a residence (typically with qualifying word).','The audience for a live theatrical or similar performance','A theatre','A building where a deliberative assembly meets; whence the assembly itself, particularly a component of a legislature.' ]
     }
     ])
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
       if (response.ok) setWordExist(true)
        console.log(response.data[0])

      }).catch(function (error) {
        console.error(error);
      }).finally(()=>{
        setEnteredWord('')
        setFormSubmited(false)
      })
      console.log('running')
    }
  },[FormSubmited])

  return (
    <section>
      <form onSubmit={handleFormSubmited} className='flex justify-between p-2 mx-auto my-10 rounded-md	 bg-blackVeryLight items-center border-myBorder border-accent'>
        <input onChange={inputChangeHandler} className='border-0 text-white outline-0 bg-transparent' type="text" value={enteredWord} placeholder="Search for any word" />
        <SearchIcon />
      </form>
      {wordsData.map(({word,phonetic,meaning,synonyms})=>{
     return  <WordDetails word={word} phonetic={phonetic} meaning={meaning} synonyms={synonyms} />
      })}
    </section>
  )
}

export default Main