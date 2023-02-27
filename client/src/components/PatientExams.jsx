import React from "react";
import ExamTable from "./ExamTable";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./PatientButton";

const PatientExams = (props) => {
  const {PatientId} = useParams();
  const [patients, setPatients] = useState([]);
  useEffect(()=> {
    props.setHeader("Patient Details");
    props.setVariable(3);
    axios.get(`http://localhost:9000/api/get/${PatientId}`)
    .then(res => {
      const result = res.data;
      setPatients(result);
    })
    .catch( err => console.log(err));
  }, []);

  return(
    <div id="examTableContainer">
      <p>All Examinations from {PatientId}</p>
      <table className='examTable'>
        <thead id="examTableHeader">
          <tr>
            <th>Patient ID</th>
            <th>Age</th>
            <th>Sex</th>
            <th>ZIP Code</th>
            <th>BMI</th>
            <th>Exam ID</th>
            <th>Key Findings</th>
            <th>Brixia Scores</th>
            <th>Image</th>
            <th>Expand Details</th>
          </tr>
        </thead>
        <tbody>
          {/* data goes here */}
          {patients.map((patient, index) => {
        return(
            <tr key={index}>
              <td>
                <Link to = {`http://localhost:3000/patientexam/${patient.PatientId}`}>
                  {patient.PatientId}
                </Link>
              </td>
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
              <td>
              <Button id = {patient._id}/>
              </td>
            </tr>
        )
      })}
        </tbody>
      </table>
    </div>
  )
}

export default PatientExams;