import {  useEffect, useState } from 'react'
import './App.css'
import axios from "axios";
import Album from './Album';
function App() {

   const [albums,setAlbums]=useState([])
   const options = {
    method: 'GET',
    url: 'https://spotify81.p.rapidapi.com/search',
    params: {
      q: '<REQUIRED>',
      type: 'multi',
      offset: '0',
      limit: '30',
      numberOfTopResults: '5'
    },
    headers: {
      'X-RapidAPI-Key': '981133e597mshf67d3a4955b7df3p109b23jsn70341f1012a1',
      'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
    }
  };

useEffect(()=>{
  
    axios.request(options).then(function (response) {
     console.log(response.data)
     setAlbums(response.data.albums.items)
    }).catch(function (error) {
      console.error(error);
    });
},[])

return (
  <>
  <h1>yoo</h1>
    <section className='wrapper'>
   {    albums.map(({data})=>{
   return <Album  trackName={data.name} />
   }
   )} 
   </section> 
  
 {console.log(albums)} 
  </>
)
}

export default App
