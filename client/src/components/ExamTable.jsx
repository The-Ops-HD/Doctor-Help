import React from "react";
import ExamTableRow from "./ExamTableRow";
import CreatePost from './CreateExam';


function ExamTable(){
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
          </tr>
        </thead>
        <ExamTableRow/>
      </table>
      <CreatePost></CreatePost>
    </div>
  )
}

export default ExamTable;