import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import "../component-css/ExamTable.css"

function ExamTable() {
  const [patients, setPatients] = useState([]);
  const [data, setData] = useState([]);
  const [error ,setError] = useState('');

  useEffect( () => {
    axios.get('https://doctorhelpbackend.onrender.com/api/getall')
    .then((response) => {
      const result = response.data;
      setPatients(result);
      setData(result);
    })
    .catch((err) => console.log(err.response));
  }, []);

  const SearchArray = (e) => {
    const tempArray = data.filter(exam => 
      exam.Age.toLowerCase().includes(e.target.value.toLowerCase()) ||
      exam.Sex.toLowerCase().includes(e.target.value.toLowerCase().toLowerCase()) ||
      exam.BrixiaScore.toLowerCase().includes(e.target.value.toLowerCase()) ||
      exam.PatientId.toLowerCase().includes(e.target.value.toLowerCase()) ||
      exam.Age.toLowerCase().includes(e.target.value.toLowerCase()) ||
      exam.KeyFindings.toLowerCase().includes(e.target.value.toLowerCase()) ||
      exam.bmi.toLowerCase().includes(e.target.value.toLowerCase()) ||
      exam.ExamID.toLowerCase().includes(e.target.value.toLowerCase()) ||
      exam.ZipCode.toLowerCase().includes(e.target.value.toLowerCase())
    )
    setPatients(tempArray);
    if(patients.length === 0 && e.target.value === 0){
      setPatients(data)
      setError('');
    } else if(tempArray.length === 0){
      setError("No Result Found")
    } if(tempArray.length > 0){
      setError('')
    }
  }
  
  return (
    <div className="mui-table-main">
      <TableContainer sx={{ maxWidth: 1000 }} component={Paper}>
        <div style={{textAlign: 'center'}}>
          <TextField 
            id="outlined-basic" 
            label="Search" 
            variant="outlined" 
            onChange={SearchArray} 
            style={{marginTop:'1.5rem'}} 
          >
          </TextField>
          {
            error 
            ? <p style={{color: "red"}}> {error} </p> 
            : ''
          }
        </div>
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
                    <Link to={`https://doctorhelp.onrender.com/patientexam/${patient.PatientId}`}>
                      {patient.PatientId}
                    </Link>
                  </TableCell>
                  <TableCell align="left">
                    <Link to={`https://doctorhelp.onrender.com/details/${patient._id}`}>
                      {patient.ExamID}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <img src={patient.ImageUrl} alt="x-ray" style={{height: '100px', width: '100px'}}/>
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