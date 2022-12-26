import React, {useState} from 'react';
import Calculator from './Calculator';

const App = () =>{
  const styles = {
    app: {
      display: "flex",
      justifyContent: "center",
      padding: 100,

    }

  }

  return(
    <div style = {styles.app}>
      <Calculator />
    </div>

  );

}

export default App;
