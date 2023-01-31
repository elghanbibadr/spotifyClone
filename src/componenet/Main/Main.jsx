import React from 'react'
import axios from "axios";
import { useState ,useEffect} from 'react';
import SearchIcon from './SearchIcon';

const Main = () => {
     const [enteredWord,setEnteredWord]=useState('');
  
    const options = {
      methode:"Get",
      url: 'https://api.dictionaryapi.dev/api/v2/entries/en/house',
     
    };
  

  
  
  useEffect(()=>{ 
      axios.request(options).then(function (response) {
       console.log(response.data)
      }).catch(function (error) {
        console.error(error);
      });
  },[enteredWord])

  return (
    <section>
      <form className='flex justify-between p-2 mx-auto my-6 rounded-md	 bg-blackVeryLight items-center border-myBorder border-accent'>
        <input className='border-0 outline-0 bg-transparent' type="text" value={enteredWord} placeholder="Search for any word" />
        <SearchIcon />
      </form>
    </section>
  )
}

export default Main