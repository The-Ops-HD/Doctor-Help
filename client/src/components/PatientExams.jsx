import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "../component-css/PatientExams.css"

const PatientExams = (props) => {
  const {PatientId} = useParams();
  const [patients, setPatients] = useState([]);
  useEffect(()=> {
    props.setVariable(3);
    axios.get(`https://doctorhelpbackend.onrender.com/api/get/${PatientId}`)
    .then(res => {
      const result = res.data;
      setPatients(result);
      console.log(patients)
    })
    .catch( err => console.log(err));
  }, []);

  return(
    <div>
      <div className="patient-info">
        {patients.length > 1 
          ? <p>{patients.length} Examinations for {PatientId}</p>
          : <p>1 Examination for  {PatientId}</p>
        }
      </div>
      <div className="mui-table-exam">
        <TableContainer sx={{ maxWidth: 1000 }} component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Patient ID</TableCell>
                <TableCell align="left">Exam ID</TableCell>
                <TableCell align="left">Image</TableCell>
                <TableCell align="left">Key Findings</TableCell>
                <TableCell align="left">Brixia Score</TableCell>
                <TableCell align="left">Age</TableCell>
                <TableCell align="left">Sex</TableCell>
                <TableCell align="left">BMI</TableCell>
                <TableCell align="left">ZIP Code</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {patients.map((exam, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      <Link to={`http://localhost:3000/patientexam/${exam.PatientId}`}>
                        {exam.PatientId}
                      </Link>
                    </TableCell>
                    <TableCell align="left">
                      <Link to={`http://localhost:3000/details/${exam._id}`}>
                        {exam.ExamID}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <img src={exam.ImageUrl} alt="x-ray" style={{height: '100px', width: '100px'}}/>
                    </TableCell>
                    <TableCell align="left">{exam.KeyFindings}</TableCell>
                    <TableCell align="left">{exam.BrixiaScore}</TableCell>
                    <TableCell align="left">{exam.Age}</TableCell>
                    <TableCell align="left">{exam.Sex}</TableCell>
                    <TableCell align="left">{exam.bmi}</TableCell>
                    <TableCell align="left">{exam.ZipCode}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default PatientExams;