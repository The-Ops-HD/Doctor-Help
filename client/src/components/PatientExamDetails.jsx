import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { Button } from "@mui/material";
import '../component-css/PatientExamDetails.css';

function PatientDetails(props) {
  const [exam, setExam] = useState('');
  const {id} = useParams();
  const navigate = useNavigate();
  
  useEffect(()=> {
    axios.get(`https://doctorhelpbackend.onrender.com/api/getExam/${id}`)
      .then(res => {
        setExam(res.data);
      })
      .catch(err => {
        console.log(err)    
      });
  }, []);

  const deleteData = () => {
    axios.delete(`https://doctorhelpbackend.onrender.com/api/delete/${id}`)
      .then(() => {
        delete props.data;
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updatePage = (id) =>{
    props.setDetails(exam);
    console.log(props.details);
    navigate(`/update/${id}`);
  }

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
          <div className="buttons">  
            <Button
              className="update-button"
              onClick={() => updatePage(exam._id)} 
              sx={{
                textTransform: "none", 
                backgroundColor: '#578188',
                ':hover': { 
                  bgcolor: '#3b5559',
                  color: 'white'
                }
              }} 
              variant="contained"
            >
              Update
            </Button>
            <Button
              className="delete-button"
              onClick={() => deleteData(exam._id)} 
              sx={{
                textTransform: "none",
                backgroundColor: '#D42A2D',
                ':hover': { 
                  bgcolor: '#901C1E',
                  color: 'white'
                }
              }} 
              variant="contained"
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientDetails;