import axios from "axios";
import React, {useState, useEffect} from "react";
import Button from './PatientButton';

function ExamTableRow({patient, setSelectedPatient, selectedPatient}){
  setSelectedPatient(patient);
  // const [patients, setPatients] = useState([]);
  // useEffect( () => {
  //   axios.get('http://localhost:9000/api/getall')
  //   .then((response) => {
  //     console.log(response.data);
  //     const result = response.data;
  //     setPatients(result);
  //   })
  //   .catch((err) => console.log(err.response));
  // }, []);

  
  return(
            <tr>
              <td>{patient.PatientId}</td>
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
              <Button patientId={patient.PatientId} selectedPatient={selectedPatient} />
            </tr>
  )
}

export default ExamTableRow;