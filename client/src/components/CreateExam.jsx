import React, { useState, useEffect } from "react";
import axios from "axios";
import { FormControl } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import "../component-css/CreateExam.css"

const CreatePost = (props) => {
  const [errors, setErrors] = useState([]);
  // const [validator, setValidator] = useState=(0);
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
  const [pidError, setPidError] = useState();
  
  useEffect(() => {
    props.setVariable(1);
  }, []);

  const handlePatientId = (e) => {
		setPatientId(e.target.value);
	}

  const handleExam= (e) => {
		setExamID(e.target.value);
	}

  const handleAge = (e) => {
		setAge(e.target.value);
	}

  const handleImageUrl = (e) => {
		setImageUrl(e.target.value);
	}

  const handleSex = (e) => {
		setSex(e.target.value);
	}

  const handleDate = (e) => {
		setDate(e.target.value);
	}

  const handleBmi = (e) => {
		setBmi(e.target.value);
	}

  const  handleKeyfindings = (e) => {
		setKeyFindings(e.target.value);
	}

  const handleZipCOde = (e) => {
		setZipCode(e.target.value);
	}

  const handleBrixia = (e) => {
		setBrixiaScore(e.target.value);
	}

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:9000/api/create', {
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
    })
      .then((res)=> {
        console.log('SUCCESS', res);
      })
      .catch((err) => {
        console.log('ERROR!', err.response);
        // setValidator(err);
			  setErrors(err.response.data.errors);
      })
  }

  return (
    <div className="create-form-container">
      <div className="create-button">
        <Button
          type="submit" 
          sx={{ 
            backgroundColor: '#578188' ,
            ':hover': { 
              bgcolor: '#3b5559', 
              color:'white'
            } 
          }} 
          variant="contained"
        >
          Create
        </Button>
      </div>
      <div>
        {errors && Object.keys(errors).map((errKey, index) => {
          return(
            <div>
              <p style={{color: "red"}} key= {index}>{errors[errKey].message}</p>
            </div>
          )
        })} 
      </div>
      <form
        className="create-form" 
        onSubmit={onSubmitHandler} 
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
          ></TextField>
          <TextField 
            sx={{ m: 1, width: '35ch' }}  
            id="outlined-basic" 
            label="Age" 
            variant="outlined" 
            onChange={handleAge} 
            type="text"
          ></TextField>
          <TextField 
            sx={{ m: 1, width: '35ch' }}  
            id="outlined-basic" 
            label="Sex" 
            variant="outlined" 
            onChange={handleSex}
            type="text"
          ></TextField>
          <TextField 
            sx={{ m: 1, width: '35ch' }}  
            id="outlined-basic" 
            label="BMI" 
            variant="outlined" 
            onChange={handleBmi}
            type="text"
          ></TextField>
          <TextField 
            sx={{ m: 1, width: '35ch' }}  
            id="outlined-basic" 
            label="ZIP Code" 
            variant="outlined" 
            onChange={handleZipCOde}
            type="text"
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
          ></TextField>
          <TextField 
            sx={{ m: 1, width: '35ch' }}  
            id="outlined-basic" 
            label="Image URL" 
            variant="outlined" 
            onChange={handleImageUrl}
            type="text"
          ></TextField>
          <TextField 
            sx={{ m: 1, width: '35ch' }}  
            id="outlined-basic" 
            label="Date" 
            variant="outlined" 
            onChange={handleDate}
            type="text"
          ></TextField>
          <TextField  
            sx={{ m: 1, width: '35ch' }} 
            id="outlined-basic" 
            label="Key Findings" 
            variant="outlined" 
            onChange={handleKeyfindings}
            type="text"
          ></TextField>
          <TextField 
            sx={{ m: 1, width: '35ch' }}  
            id="outlined-basic" 
            label="Brixia Score" 
            variant="outlined" 
            onChange={handleBrixia}
            type="text"
          ></TextField>
        </div>
      </form>
    </div>
  )
}

export default CreatePost;