import {React, useState, useEffect} from 'react';

import axios from "axios";


function Button(props){
    const patientId = props.patientId
    function expandButton(e){
          e.preventDefault();
        axios.get(`http://localhost:9000/api/get/${patientId}`)
        .then(res => {
          console.log(res);
          props.setPatient(res.data[0]);
        })
        .catch( err => console.log(err));
      }

    
    return(
        <div>
            <button onClick={expandButton}>Expand</button>
        </div>
    )
}

export default Button;