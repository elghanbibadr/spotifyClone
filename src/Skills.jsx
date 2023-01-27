import React, { useState, useEffect, useRef } from 'react';
import TagCloud from 'TagCloud';
const Skills = () => { 
  const containerRef = useRef(null);
  let [option, setOption] = useState({
    radius: 200,
    maxSpeed: "fast",
    initSpeed: "normal",
    keep: true,
    itemClass: 'tagItems',
    direction: 100
  });

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 800) {
        setOption({
          radius: 400,
          maxSpeed: option.maxSpeed,
          initSpeed: option.initSpeed,
          keep: option.keep,
          itemClass: option.itemClass,
          direction: option.direction
        });
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const texts = [      "HTML",      "CSS",      "Javascirpt",      "GIT",      "BOOTSTRAP",      "REACT",      "TYPESCRIPT",      "FIREBASE",      "CYPRESS",      "NEXT JS",      "TAILWIND",      "SASS",      "API",      "GITHUB",      "FRAMER MOTION"    ];

    console.log('running')
   return() => TagCloud(containerRef.current, texts, option);
  });


  return (
    <section id='skills' className='skills '>
      <div className="tagCloudWrraper">
        <span ref={containerRef} className='tagcloud'/> 
      </div>

    </section>
  );
};

export default Skills;