import React, {useState} from 'react';
import Screen from './Screen'
import Keypad from './Keypad'
import 'bootstrap/dist/css/bootstrap.min.css';

const Calculator = () =>{
  const styles = {
    calculator: {
      border: '3px solid gray',
      width: 326,

    }

  }

  const [text, setText] = useState("0");
  const [term, setTerm] = useState(0);
  const [prev, setPrev] = useState(0);
  const [newN, setNewN] = useState(true);
  const [dec, setDec] = useState(false);
  const [place, setPlace] = useState(1);
  const [op, setOp] = useState("$");

  const handleNum = (n) => {
    const nTerm = (newN) ? 0 : term;

    const value = (dec) ? nTerm + n/Math.pow(10, place) : nTerm*10 + n;

    if(newN){
        setNewN(false);

    }

    if(dec){
      setPlace(place+1);

    }

    setTerm(value);
    setText(Math.round((value + Number.EPSILON) * 100000000) / 100000000);

  }

  const handleDec = () =>{
    setDec(true);

  }

  const handleOp = (o) => {
    const newOp = o;

    if(op == "$"){
      const value = term;
      setPrev(value);
      setTerm(0);
      setDec(false);
      setPlace(1);

    }

    setOp(newOp);

  }

  const handleClr = () => {
    setPrev(0);
    setTerm(0);
    setDec(false);
    setPlace(1);
    setText(0);

  }

  const handleEq = () => {
    var value = 0;

    switch(op){
      case '+': value = prev+term;
                setDec(false);
                setPlace(1);
                break;

      case '-': value = prev-term;
                setDec(false);
                setPlace(1);
                break;

      case '*': value = prev*term;
                setDec(false);
                setPlace(1);
                break;

      case '/': value = prev/term;
                setDec(false);
                setPlace(1);
                break;

      default: value = term;
               break;

    }

    setTerm(value);
    setPrev(0);
    setNewN(true);
    setOp("$");
    setText(Math.round((value + Number.EPSILON) * 100000000) / 100000000);

  }

  return(
    <div style = {styles.calculator}>
      <Screen text={text}/>
      <Keypad handleNum={handleNum}
              handleDec={handleDec}
              handleOp={handleOp}
              handleEq={handleEq}
              handleClr={handleClr}/>
    </div>

  );

}

export default Calculator;
