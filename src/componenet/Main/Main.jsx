import React from 'react'
import axios from "axios";
import { useState ,useEffect} from 'react';

const Main = () => {
    // const [albums,setAlbums]=useState([]);
  
    const options = {
      methode:"Get",
      url: 'https://api.dictionaryapi.dev/api/v2/entries/en/house',
     
    };
  

  
  
//   useEffect(()=>{
    
//       axios.request(options).then(function (response) {
//        console.log(response.data)
//       }).catch(function (error) {
//         console.error(error);
//       });
//   },[seachQuery])
  return (
    <section>main</section>
  )
}

export default Main