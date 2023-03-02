import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import "../component-css/ExamTable.css"

function ExamTable() {
  const [patients, setPatients] = useState([]);
  useEffect( () => {
    axios.get('http://localhost:9000/api/getall')
    .then((response) => {
      const result = response.data;
      setPatients(result);
    })
    .catch((err) => console.log(err.response));
  }, []);
  
  return (
    <div className="mui-table">
      <TableContainer sx={{ maxWidth: 900 }} component={Paper}>
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
            {patients.map((patient, index) => {
              return (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    <Link to={`http://localhost:3000/patientexam/${patient.PatientId}`}>
                      {patient.PatientId}
                    </Link>
                  </TableCell>
                  <TableCell align="left">
                    <Link to={`http://localhost:3000/details/${patient._id}`}>
                      {patient.ExamID}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <img src={patient.ImageUrl} alt="x-ray" style={{height: '50px', width: '50px'}}/>
                  </TableCell>
                  <TableCell align="left">{patient.KeyFindings}</TableCell>
                  <TableCell align="left">{patient.BrixiaScore}</TableCell>
                  <TableCell align="left">{patient.Age}</TableCell>
                  <TableCell align="left">{patient.Sex}</TableCell>
                  <TableCell align="left">{patient.bmi}</TableCell>
                  <TableCell align="left">{patient.ZipCode}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ExamTable;