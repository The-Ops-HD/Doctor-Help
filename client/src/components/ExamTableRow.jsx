
import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"

function ExamTableRow({patient, setSelectedPatient, selectedPatient}){
  let navigate = useNavigate(); 
  

  function handleClick(event){
    event.preventDefault();
    setSelectedPatient(patient);
    navigate("/exam")
  }

  
  return(
            <tr>
              <td>{patient.PatientId}</td>
              <td>{patient.Age}</td>
              <td>{patient.Sex}</td>
              <td>{patient.ZipCode}</td>
              <td>{patient.bmi}</td>
              <td>{patient.ExamID}</td>
              <td>{patient.KeyFindings}</td>
              <td>{patient.BrixiaScore}</td>
              <td>
                <img src={patient.ImageUrl} alt="x-ray" style={{height: '100px', width: '100px'}}/>
              </td>
              <button onClick={handleClick}> Expand </button>
            </tr>
  )
}

export default ExamTableRow;