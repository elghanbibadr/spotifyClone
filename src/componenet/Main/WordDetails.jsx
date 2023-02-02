import React,{useRef, useState} from 'react'
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
                <h1 className=' text-4xl capitalize mb-2 font-bold'>{props.word}</h1>
                <span className='text-accent'>{props.phonetic}</span>
            
            </div>
               <PlayIcon onClick={handlePlay} /> 
               <audio ref={audioRef} src={props.phonetics[0].audio} />
        </div>
        <p className='mt-10 flex items-center justify-between text-noun text-xl font-bold'>noun</p>
        <div className="meaning mt-10">

            <p className='text-neutral-500 font-bold'>Meaning</p>
             <ul className='p-4'>
            {props.meaning[0].definitions.map(({definition},index) =>{
                return <li key={index} className='my-6 meaning-item font-semibold text-lg'>{definition}</li>
            })}
            </ul> 

        </div>
    </article>
  )
}

export default WordDetails