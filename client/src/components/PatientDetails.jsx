import {React, useState} from "react";
import './PatientDetails.css';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function PatientDetails(props) {
  const [exam, setExam] = useState('');
  const {id} = useParams();
  useEffect(()=> {
    axios.get(`http://localhost:9000/api/getExam/${id}`)
    .then(res => {
      console.log(res.data);
      setExam(res.data);
    })
    .catch( err => console.log(err));
  }, []);
    return(
        <div className="patientPage">
            <div className="id">Patient ID: {exam.PatientId}</div>
            <img className="image" src={exam.ImageUrl} alt="Patient-Detail"/>
            
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