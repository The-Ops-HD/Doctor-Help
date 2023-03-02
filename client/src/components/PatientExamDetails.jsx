import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import '../component-css/PatientExamDetails.css';
import {useNavigate} from "react-router-dom";
import { Button } from "@mui/material";


function PatientDetails(props) {
  const [exam, setExam] = useState('');
  const {id} = useParams();
  const navigate = useNavigate();
  
  useEffect(()=> {
    props.setVariable(3);
    axios.get(`http://localhost:9000/api/getExam/${id}`)
    .then(res => {
      setExam(res.data);
    })
    .catch( err => {
      console.log(err)
    
    });
  }, []);

  const deleteData = () => {
    axios.delete(`http://localhost:9000/api/delete/${id}`)
      .then((res) => {
        console.log(res);
        console.log('delete this!!!!')
        delete props.data;
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };
    
  return(
    <div className="patient-exam-container">
      <div className="info-container">
        <div className="patient-info-col">
          <h3>Patient Info</h3>
          <div className="patient-data-container">
            <div className="data-box">
              Patient ID: {exam.PatientId}
            </div>
            <div className="data-box">
              Age: {exam.Age}
            </div>
            <div className="data-box">
              Sex: {exam.Sex}
            </div>
            <div className="data-box">
              BMI: {exam.bmi}
            </div>
            <div className="data-box">
              ZIP Code: {exam.ZipCode}
            </div>
          </div>
        </div>
        <div className="exam-info-col">
          <h3>Exam Info</h3>
          <div className="image-box">
            <img src={exam.ImageUrl} alt="x-ray" style={{ height: 300, width: 300 }}/>
          </div>
          <div className="diagnosis-box">
            <div className="diagnosis-data">
              Key Findings: {exam.KeyFindings}
            </div>
            <div className="diagnosis-data">
              Brixia Score: {exam.BrixiaScore}
            </div>
          </div>
          <Button onClick={() => deleteData(exam.id)} sx={{  backgroundColor: '#b6bf88', ':hover': { bgcolor: 'red', color:'white'} }} variant="contained">Delete</Button>
        </div>
      </div>
    </div>
  )
}

export default PatientDetails;