import React, {useState} from "react";
import { useEffect } from "react";
import ExamTableRow from "./ExamTableRow";

function ExamTable(props){
  return(
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
        <ExamTableRow/>
      </table>
    </div>
  )
}

export default ExamTable;