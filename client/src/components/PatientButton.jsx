import {React, useState, useEffect} from 'react';

function PatientButton(props) {
  const patientId = props.patientId
     
  function expandButton() {
    fetch(`http://localhost:9000/api/get/${patientId}`)
    .then((response) =>response.json())
    .then(data => {
      props.setPatient(data[0])
    })
  }
    
  return (
    <div>
      <button onClick={expandButton}>Expand</button>
    </div>
  )
}

export default PatientButton;
