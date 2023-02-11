import React from "react";
import ExamTableRow from "./ExamTableRow";

function ExamTable(){
  return(
    <div id="examTableContainer">
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
        <tbody id="examTableBody">
          <ExamTableRow/>
        </tbody>
      </table>
    </div>
  )
}

export default ExamTable;