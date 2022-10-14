import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";

const strings = [
  "Happy Birthday",
  "Joyeux anniversaire",
  "生日快乐"
];


function randomLanguage() {
  return strings[Math.floor(Math.random() * strings.length)];
}


export default function Home() {
 
  const [hello, setHello] = React.useState(strings[0]);
  

  const [style, trigger] = useWiggle({ x: 5, y: 5, scale: 1 });

  
  const handleChangeHello = () => {
    
   
    const newHello = randomLanguage();
    
 
    setHello(newHello);
  };
  return (
    <>
      
      <h1 className="title">{hello}!</h1>
      { }
      
      <animated.div onMouseEnter={trigger} style={style}>
        <img
          src=".\myimages\cake.jpg"
          className="illustration"
          onClick={handleChangeHello}
          alt="Illustration click to change language"
        />
      </animated.div>
      <div className="navigation">
        { }
        <animated.div onMouseEnter={trigger}>
          <a className="btn--click-me" onClick={handleChangeHello}>
            
          </a>
        </animated.div>
      </div>
      
      <div className="instructions">
        
    
        <h2>Wishes</h2>
        <p>
          Hey <strong>Happy Bithday</strong> God bless you.{" "}
          <Link href="/about">Marvel</Link> page, In this page you get your favourite marvel images.
          
        </p>
      </div>
    </>
  );
}
