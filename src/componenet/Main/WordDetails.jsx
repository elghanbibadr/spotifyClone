import React,{useRef, useState} from 'react'
import Meaning from './Meaning';
import PlayIcon from './PlayIcon'

const WordDetails = (props) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef();

    const handlePlay = () => {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    };

  return (
    <article className='text-white'>
        
        <div className='flex justify-between  items-center'>
            <div className='place-self-end' >
                <h1 className=' text-4xl capitalize mb-2 font-bold lg:text-6xl'>{props.word}</h1>
                <span className='text-accent font-bold lg:text-lg'>{props.phonetic}</span>
            
            </div>
               <PlayIcon onClick={handlePlay} /> 
               <audio ref={audioRef} src={props.phonetics[0].audio} />
        </div>
         {props.meaning.map(({partOfSpeech,definitions},index)=>{
         return    <Meaning key={index} partOfSpeech={partOfSpeech} definitions={definitions}  />
        })} 

    </article>
  )
}

export default WordDetails