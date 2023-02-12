import axios from "axios";
import React, {useState, useEffect} from "react";

function ExamTableRow(){
  const [patients, setPatients] = useState([]);
  useEffect( () => {
    axios.get('http://localhost:9000/api/')
    .then((response) => {
      const result = response.data.exams;
      setPatients(result);
    })
    .catch((err) => console.log(err.response));
  }, []);
  return(
    <tbody id="examTableBody">
      {patients.map((patient, index) => {
        return(
            <tr key={index}>
              <td>{patient.patientId}</td>
              <td>{patient.age}</td>
              <td>{patient.sex}</td>
              <td>{patient.zipCode}</td>
              <td>{patient.bmi}</td>
              <td>{patient.examId}</td>
              <td>{patient.keyFindings}</td>
              <td>{patient.brixiaScores}</td>
              <td>
                <img src={patient.imageURL} alt="x-ray" style={{height: '100px', width: '100px'}}/>
              </td>
            </tr>
        )
      })}
    </tbody>
  );
}

export default ExamTableRow;