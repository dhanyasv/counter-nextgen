import { useEffect, useRef ,useState } from 'react';
import './App.css';

function App() {
  const [counter,setCounter] = useState(0)
  const btnRef = useRef(null);
  useEffect(() => {
    window.addEventListener('click', (event) => {
      if (btnRef.current && !btnRef.current.contains(event.target)) {
        setCounter((prevCount) => prevCount + 1 )
      }

    });
  }, []);
  
  return (
    <div className="App" >
      <div className="counter-container">
            { 
            counter.toString().split('')
            .map((count,index)=>{
              return(<div className="counter" key={index}>{count}</div>)
            })}
      </div> 
      <button className="counter-reset-btn" 
              ref={btnRef}
              onClick={() => setCounter(0)}>
                Reset
      </button>     
    </div>
  );
}

export default App;
