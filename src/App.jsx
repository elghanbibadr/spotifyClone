import {  useEffect, useState } from 'react'
import './App.css'
import axios from "axios";
import Album from './Album';
function App() {

   const [albums,setAlbums]=useState([]);
  const [seachQuery,setSeachQuery]=useState("soul");      
const options = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/search/',
  params: {
    q: seachQuery,
    type: 'multi',
    offset: '0',
    limit: '16',
    numberOfTopResults: '5'
  },
  headers: {
    'X-RapidAPI-Key': '981133e597mshf67d3a4955b7df3p109b23jsn70341f1012a1',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
};

const handleSelectChange=(event)=>{
  setSeachQuery(event.target.value);
  console.log(event.target.value);
}

useEffect(()=>{
  
    axios.request(options).then(function (response) {
     console.log(response.data)
     setAlbums(response.data.albums.items)
    }).catch(function (error) {
      console.error(error);
    });
},[seachQuery])

return (
  <>
  <select onChange={handleSelectChange}>
  <option value="soul" >Soul</option>
  <option value="rock">Rock</option>
  <option value="pop">Pop</option>
  <option value="classic">Classic</option>
</select>

    <section className='wrapper grid grid-cols-3 gap-4'>
   {    albums.map(({data})=>{
   return <Album  trackName={data.name} image={data.coverArt.sources[0].url} />
   }
   )} 
   </section> 
  
 {console.log(albums)} 
  </>
)
}

export default App
