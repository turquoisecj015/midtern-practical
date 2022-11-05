import { useState } from 'react';
import './App.css';

function CalcDisplay({display}) {
  return (
    <div className="calcDisplay">
      {display}
    </div>
  );
}

function CalcButton({value, onClick}) {
  return (
    <button className="calcButton" onClick={onClick}>
      {value}
    </button>
  );
}


function ClearButton({value, onClick}){
  return (
    <button className="calcButton redcolor" onClick={onClick}>
      {value}
    </button>
  );
}


function App() {

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [oper, setOper] = useState(0);
  const [res, setRes] = useState(2018002692);
  const [disp, setDisp] = useState('ENTER CODE');

  const numberClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (true) {
      if (parseInt(num1) == 0) {
        setNum1(value)
        setDisp(value);
      }
      else{
        if(String(num1).length<10){
          setNum1(num1+value)
          setDisp(num1+value);
        }
      }
    }
  }

  const enterClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if(res==num1){
      setDisp("OPEN");
    }
    else
    {
      setDisp("LOCKED");
    } 
  }

  /*This is now working!*/
  const resetClickHandler = () => {
    setNum1(0);
    setDisp("ENTER CODE");
  };
  return (
    <div className="calcContainer">
      <CalcDisplay display={disp}/>
      <div className="calcButtonsContainer">
        <CalcButton value="7" onClick={numberClickHandler}/>
        <CalcButton value="8" onClick={numberClickHandler}/>
        <CalcButton value="9" onClick={numberClickHandler}/>
        <CalcButton value="4" onClick={numberClickHandler}/>
        <CalcButton value="5" onClick={numberClickHandler}/>
        <CalcButton value="6" onClick={numberClickHandler}/>
        <CalcButton value="1" onClick={numberClickHandler}/>
        <CalcButton value="2" onClick={numberClickHandler}/>
        <CalcButton value="3" onClick={numberClickHandler}/>
        <ClearButton value="Reset" onClick={resetClickHandler}/>
        <CalcButton value="0" onClick={numberClickHandler}/>
        <CalcButton value="Enter" onClick={enterClickHandler}/>
      </div>
    </div>
  );
}

export default App;