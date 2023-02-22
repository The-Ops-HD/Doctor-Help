import React, { useState } from "react";
import ExamTableRow from "./ExamTableRow";
import CreatePost from './CreateExam';
import PatientDetails from './PatientDetails';

function ExamTable() {
  const [patient, setPatient] = useState(null)
  return (
    <div id="examTableContainer">
      <p>Examinations</p>
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
        <ExamTableRow setPatient={setPatient}/>
      </table>
      <PatientDetails patient={patient}/>
      <CreatePost />
    </div>
  )
}

export default ExamTable;
