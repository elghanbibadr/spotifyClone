import {  useEffect, useState } from 'react'
import './App.css'
import axios from "axios";
import Album from './Album';
import ReactAudioPlayer from 'react-audio-player';
function App() {

   const [albums,setAlbums]=useState([]);
  const [seachQuery,setSeachQuery]=useState("soul");      
const options = {
  method: 'GET',
  url: 'https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?album_type=SINGLE&offset=20&limit=10',
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

console.log(encodeURI('spotify:track:5jvhTc0g18kwYQNUJM5C4e'))

useEffect(()=>{
  
    axios.request(options).then(function (response) {
     console.log(response.data)
     setAlbums(response.data.albums.items)
    }).catch(function (error) {
      console.error(error);
    });
},[seachQuery])
const handleChangeHandler=(e)=>{
  setSeachQuery(e.target.value);
  console.log(e.target.value);
}

return (
  <>
  <select onChange={handleSelectChange}>
  <option value="soul" >Soul</option>
  <option value="rock">Rock</option>
  <option value="pop">Pop</option>
  <option value="classic">Classic</option>
</select>
<input type="text" placeholder='search' onChange={handleChangeHandler} />
    <section className='wrapper grid grid-cols-3 gap-4'>
   {    albums.map(({data})=>{
   return <Album  trackName={data.name} image={data.coverArt.sources[0].url} />
   }
   )} 
   <ReactAudioPlayer
   src="https://music.apple.com/us/album/feel-good-inc/850571319?i=850571371"
  autoPlay
  controls
/>
   </section> 
  
 {console.log(albums)} 
  </>
)
}

export default App
