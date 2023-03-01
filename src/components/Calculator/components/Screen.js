import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Screen = ({text}) =>{
  const styles = {
    screen: {
      width: 320,
      height:60,
      border: '1px solid gray',
      textAlign: 'right',
      fontSize: "40px",

    }

  }

  return(
    <div style={styles.screen}>{text}</div>

  );

}

export default Screen;
