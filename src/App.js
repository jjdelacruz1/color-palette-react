import React from 'react';
import './App.css';
import ColorBox from './ColorBox'

function App(props) {
  return (
    <div className="container">
      <div className="text-center">
        <button onClick={() => myStore.dispatch({type: 'RANDOMIZE'})}>Randomize!</button>
        <button onClick={() => myStore.dispatch({type: 'ADD_BOX'})}>Add Box</button>
        <button onClick={() => myStore.dispatch({type: 'REMOVE_BOX'})}>Remove Box</button>
        <div className="d-flex justify-content-center">
          {props.boxes.map((box, idx) => (
            <ColorBox {...box} key={idx} toggleLock={() => myStore.dispatch({
              type: 'TOGGLE_BOX',
              boxIndex: idx
            })}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
