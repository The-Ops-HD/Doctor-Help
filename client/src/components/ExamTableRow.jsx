import axios from "axios";
import React, {useState, useEffect} from "react";
import Button from './PatientButton';
import { Link, useNavigate } from "react-router-dom";


function ExamTableRow(props){
  const navigate = useNavigate;
  const [patients, setPatients] = useState([]);
  useEffect( () => {
    axios.get('http://localhost:9000/api/getall')
    .then((response) => {
      console.log(response.data);
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
              <Button id = {patient._id}/>
            </tr>
        )
      })}
    </tbody>
  );
}

export default ExamTableRow;