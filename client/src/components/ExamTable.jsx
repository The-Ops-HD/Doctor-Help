import ExamTableRow from "./ExamTableRow";
import CreatePost from './CreateExam';
import PatientDetails from './PatientDetails';
import { useEffect, useState } from "react";
import axios from "axios";


function ExamTable({selectedPatient, setSelectedPatient}){

  const [allPatients, setAllPatients] = useState([]);
  useEffect( () => {
    axios.get('http://localhost:9000/api/getall')
    .then((response) => {
      console.log(response.data);
      const result = response.data;
      setAllPatients(result);
    })
    .catch((err) => console.log(err.response));
  }, []);

  const patientList = allPatients.map((patient)=> <ExamTableRow key={patient.PatientId} patient={patient} selectedPatient={selectedPatient} setSelectedPatient={setSelectedPatient}/>)

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
        <tbody id="examTableBody">
          {patientList}
        </tbody>
        {/* <ExamTableRow setPatient={setPatient}/> */}
      </table>
      {/* <PatientDetails patient={patient}/>
      <CreatePost></CreatePost> */}
    </div>
  )
}

export default ExamTable;