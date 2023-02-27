import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";

function ExamTable(props) {
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
  
  return (
    <TableContainer component={Paper}>
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
                  {patient.PatientId}
                </TableCell>
                <TableCell align="right">{patient.ExamID}</TableCell>
                <TableCell>
                  <img src={patient.ImageURL} alt="x-ray" style={{height: '100px', width: '100px'}}/>
                </TableCell>
                <TableCell align="right">{patient.KeyFindings}</TableCell>
                <TableCell align="right">{patient.BrixiaScore}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )


  // return (
  //   <div id="examTableContainer">
  //     <p>Examinations</p>
  //     <table className='examTable'>
  //       <thead id="examTableHeader">
  //         <tr>
  //           <th>Patient ID</th>
  //           <th>Age</th>
  //           <th>Sex</th>
  //           <th>ZIP Code</th>
  //           <th>BMI</th>
  //           <th>Exam ID</th>
  //           <th>Key Findings</th>
  //           <th>Brixia Scores</th>
  //           <th>Image</th>
  //           <th>Expand Details</th>
  //         </tr>
  //       </thead>
  //       <ExamTableRow/>
  //     </table>
  //   </div>
  // )
}

export default ExamTable;