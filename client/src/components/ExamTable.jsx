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
      <TableContainer sx={{ maxWidth: 800 }} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Patient ID</TableCell>
              <TableCell align="right">Exam ID</TableCell>
              <TableCell align="right">Image</TableCell>
              <TableCell align="right">Key Findings</TableCell>
              <TableCell align="right">Brixia Score</TableCell>
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