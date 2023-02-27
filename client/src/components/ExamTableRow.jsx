import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import PatientButton from './PatientButton';

function ExamTableRow(props){
  const navigate = useNavigate;
  const [patients, setPatients] = useState([]);
  useEffect( () => {
    axios.get('http://localhost:9000/api/getall')
    .then((response) => {
      const result = response.data;
      setPatients(result);
    })
    .catch((err) => console.log(err.response));
  }, []);

  
  return(
    <tbody id="examTableBody">
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
              <PatientButton id = {patient._id}/>
              </td>
            </tr>
        )
      })}
    </tbody>
  );
}

export default ExamTableRow;