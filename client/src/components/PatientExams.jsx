import React from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PatientButton from "./PatientButton";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const PatientExams = (props) => {
  const {PatientId} = useParams();
  const [patients, setPatients] = useState([]);
  useEffect(()=> {
    props.setHeader("Patient Details");
    props.setVariable(3);
    axios.get(`http://localhost:9000/api/get/${PatientId}`)
    .then(res => {
      const result = res.data;
      setPatients(result);
    })
    .catch( err => console.log(err));
  }, []);

  return(
    <div className="mui-table">
      <TableContainer sx={{ maxWidth: 1100 }} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Patient ID</TableCell>
              <TableCell align="right">Exam ID</TableCell>
              <TableCell align="right">Image</TableCell>
              <TableCell align="right">Key Findings</TableCell>
              <TableCell align="right">Brixia Score</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Sex</TableCell>
              <TableCell align="right">BMI</TableCell>
              <TableCell align="right">ZIP Code</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((patient, index) => {
              return (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    <Link to={`http://localhost:3000/patientexam/${patient.PatientId}`}>
                      {patient.PatientId}
                    </Link>
                  </TableCell>
                  <TableCell align="right">
                    <Link to={`http://localhost:3000/details/${patient._id}`}>
                      {patient.ExamID}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <img src={patient.ImageURL} alt="x-ray" style={{height: '50px', width: '50px'}}/>
                  </TableCell>
                  <TableCell align="right">{patient.KeyFindings}</TableCell>
                  <TableCell align="right">{patient.BrixiaScore}</TableCell>
                  <TableCell align="right">{patient.Age}</TableCell>
                  <TableCell align="right">{patient.Sex}</TableCell>
                  <TableCell align="right">{patient.bmi}</TableCell>
                  <TableCell align="right">{patient.ZipCode}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default PatientExams;