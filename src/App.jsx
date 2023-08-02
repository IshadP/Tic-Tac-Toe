import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Square({value, onSqrClick}){
  return(
    <button className='plybtn' onClick={onSqrClick}>{value}</button>
  )
}
function App() {
  const [sqr, setSqr] = useState(Array(9).fill(null));
  const [turn, setturn] = useState(true);

  function handleClick(i){
    if(sqr[i]|| Winner(sqr)){
      return;
    }
    const nxtsqr = sqr.slice();
    if(turn){
      nxtsqr[i] = 'X';
   } else {
      nxtsqr[i] = 'O';
   }
   setSqr(nxtsqr);
   setturn(!turn);
  }

  function gameReset(){
    setSqr(Array(9).fill(null));
    setturn(true);
  }

  let status;
  const winner = Winner(sqr);
  if(winner){
   status = 'Winner is ' + winner;
  } else {
    status = 'Next Player is ' + (turn ? 'X':'O');
  }

  return (
    <>
      <div className="container">
        <div className='status'>{status}</div>
        <div className='plyarea'>
          <div className='plyrow'>
          <Square value={sqr[0]} onSqrClick={() => handleClick(0)}/>
          <Square value={sqr[1]} onSqrClick={() => handleClick(1)}/>
          <Square value={sqr[2]} onSqrClick={() => handleClick(2)}/>
          </div>
          <div className='plyrow'>
          <Square value={sqr[3]} onSqrClick={() => handleClick(3)}/>
          <Square value={sqr[4]} onSqrClick={() => handleClick(4)}/>
          <Square value={sqr[5]} onSqrClick={() => handleClick(5)}/>
          </div>
          <div className='plyrow'>
          <Square value={sqr[6]} onSqrClick={() => handleClick(6)}/>
          <Square value={sqr[7]} onSqrClick={() => handleClick(7)}/>
          <Square value={sqr[8]} onSqrClick={() => handleClick(8)}/>
          </div>
        </div>
        <button className='reset' onClick={gameReset}>RESET</button>
      </div>
    </>
  )
}

function Winner(sqr){
  const cases = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  for(let i = 0; i < cases.length; i++){
const [a, b, c] = cases[i];
if(sqr[a] && sqr[a] === sqr[b] && sqr[a] === sqr[c]){
  return sqr[a];
}
}
return null;
}

export default App
