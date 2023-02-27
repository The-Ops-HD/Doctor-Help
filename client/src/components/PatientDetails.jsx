import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import './PatientDetails.css';

function PatientDetails(props) {
  const [exam, setExam] = useState('');
  const {id} = useParams();
  
  useEffect(()=> {
    props.setHeader("EXAM ID");
    props.setVariable(3);
    axios.get(`http://localhost:9000/api/getExam/${id}`)
    .then(res => {
      setExam(res.data);
    })
    .catch( err => console.log(err));
  }, []);
    
  return(
    <div className="patientPage">
      <div className="id">Patient ID: {exam.PatientId}</div>
      <img 
        className="image" 
        src={exam.ImageUrl} 
        alt="Patient-Detail"
      />
      <div className="InfoBox">
        <p>Diagnosis: </p>
        <ol>
          <li>{exam.KeyFindings}</li>
          <li>{exam.BrixiaScore}</li>
        </ol>
      </div>
      <div className="leftSide">
        <p>Personal Info:</p>
        <ol className="List">
          <li>Sex: {exam.Sex}</li>
          <li>Age: {exam.Age}</li>
          <li>Zip Code: {exam.ZipCode}</li>
          <li>BMI: {exam.bmi}</li>
        </ol>
      </div>
    </div>
  )
}

export default PatientDetails;