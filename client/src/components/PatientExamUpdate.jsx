import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import '../component-css/PatientExamUpdate.css'
import { useState } from "react";
import { useEffect } from "react";

// create a page that allows the user to edit the information
//pass in that information that is used on the view page
//add a save button that has an onClick handler, which will make the axios put require
//use props as well
//make this a form

const UpdateForms = ({details, setDetails}) => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [PatientId, setPatientId] = useState();
  const [ExamID, setExamID] = useState();
  const [Age, setAge] = useState();
  const [ImageUrl, setImageUrl] = useState();
  const [Sex, setSex] = useState();
  const [Date, setDate] = useState();
  const [bmi, setBmi] = useState();
  const [KeyFindings, setKeyFindings] = useState();
  const [ZipCode, setZipCode] = useState();
  const [BrixiaScore, setBrixiaScore] = useState();
  
  

  useEffect( () => {
    setPatientId(details.PatientId)
    setExamID(details.ExamID)
    setAge(details.Age)
    setImageUrl(details.ImageUrl)
    setSex(details.Sex)
    setDate(details.Date)
    setBmi(details.bmi)
    setKeyFindings(details.KeyFindings)
    setZipCode(details.ZipCode)
    setBrixiaScore(details.BrixiaScore)
  }, []);

  const handlePatientId = (e) => {
    setPatientId(e.target.value)
  }
  const handleExam = (e) => {
    setExamID(e.target.value)
  }
  const handleAge = (e) => {
    setAge(e.target.value)
  }
  const handleImage = (e) => {
    setImageUrl(e.target.value)
  }
  const handleSex = (e) => {
    setSex(e.target.value)
  }
  const handleDate = (e) => {
    setDate(e.target.value)
  }
  const handlebmi = (e) => {
    setBmi(e.target.value)
  }
  const handleKeyFindings = (e) => {
    setKeyFindings(e.target.value)
  }
  const handleZipCode = (e) => {
    setZipCode(e.target.value)
  }
  const handleBrixiaScore = (e) => {
    setBrixiaScore(e.target.value)
    console.log(BrixiaScore)
  }

  const updateHandler = (e) => {
    e.preventDefault();
    console.log("Gets here")
    axios.put(`http://localhost:9000/api/edit/${id}`, {
      PatientId,
      ExamID,
      Age,
      ImageUrl,
      Sex,
      Date,
      bmi,
      KeyFindings,
      ZipCode,
      BrixiaScore,
    }
    )
      .then((res) => {
        console.log('SUCCESS', res);
        console.log(id)
        navigate(`/details/${id}`);
      })
      .catch((err) => {
        console.log('ERROR!', err.response);
      })
  }

  return (
    <div>
    <form className="update-form-container" onSubmit={updateHandler} > 
      <div className="update-button">
        <Button
          type="submit"
          sx={{
            textTransform: 'none',
            backgroundColor: '#578188' ,
            ':hover': { 
              bgcolor: '#3b5559', 
              color:'white'
            } 
          }} 
          variant="contained"
        >
          Update
        </Button>
      </div>
      <div 
        className="update-form"
        style={{ width: "75%" }}
      >
        <div className="form-cols">
          <TextField 
            sx={{ m: 1, width: '35ch' }} 
            id="outlined-basic" 
            label="Patient ID" 
            variant="outlined" 
            onChange={handlePatientId}
            type="text"
            value={PatientId} 
            name={"PatientId"}
          ></TextField>
          <TextField 
            sx={{ m: 1, width: '35ch' }}  
            id="outlined-basic" 
            label="Age" 
            variant="outlined" 
            onChange={handleAge} 
            type="text"
            value={Age} 
            name={"Age"}
          ></TextField>
          <TextField 
            sx={{ m: 1, width: '35ch' }}  
            id="outlined-basic" 
            label="Sex" 
            variant="outlined" 
            onChange={handleSex}
            type="text"
            value={Sex}
            name={"Sex"}
          ></TextField>
          <TextField 
            sx={{ m: 1, width: '35ch' }}  
            id="outlined-basic" 
            label="BMI" 
            variant="outlined" 
            onChange={handlebmi}
            type="text"
            value={bmi} 
            name={"bmi"}
          ></TextField>
          <TextField 
            sx={{ m: 1, width: '35ch' }}  
            id="outlined-basic" 
            label="ZIP Code" 
            variant="outlined" 
            onChange={handleZipCode}
            type="text"
            value={ZipCode} 
            name={"ZipCode"}
          ></TextField>
        </div>
        <div className="form-cols">
          <TextField 
            sx={{ m: 1, width: '35ch' }} 
            id="outlined-basic" 
            label="Exam ID" 
            variant="outlined" 
            onChange={handleExam} 
            type="text"
            value={ExamID} 
            name={"ExamID"}
          ></TextField>
          <TextField 
            sx={{ m: 1, width: '35ch' }}  
            id="outlined-basic" 
            label="Image URL" 
            variant="outlined" 
            onChange={handleImage}
            type="text"
            value={ImageUrl} 
            name={"ImageUrl"}
          ></TextField>
          <TextField 
            sx={{ m: 1, width: '35ch' }}  
            id="outlined-basic" 
            label="Date" 
            variant="outlined" 
            onChange={handleDate}
            type="text"
            value={Date} 
            name={"Date"}
          ></TextField>
          <TextField  
            sx={{ m: 1, width: '35ch' }} 
            id="outlined-basic" 
            label="Key Findings" 
            variant="outlined" 
            onChange={handleKeyFindings}
            type="text"
            value={KeyFindings} 
            name={"KeyFindings"}
          ></TextField>
          <TextField 
            sx={{ m: 1, width: '35ch' }}  
            id="outlined-basic" 
            label="Brixia Score" 
            variant="outlined" 
            onChange={handleBrixiaScore}
            type="text"
            value={BrixiaScore} 
            name={"BrixiaScore"}
          ></TextField>
        </div>
      </div>
    </form>
    </div>
  )
}

export default UpdateForms