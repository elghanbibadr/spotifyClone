import React from 'react'
import axios from "axios";
import { useState ,useEffect} from 'react';
import SearchIcon from './SearchIcon';
import WordDetails from './WordDetails';

const Main = () => {
     const [enteredWord,setEnteredWord]=useState('');
     const [FormSubmited,setFormSubmited] = useState(false);
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
      <WordDetails word='house'phonetic="hii" />
    </section>
  )
}

export default Main