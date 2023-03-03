import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { FormControl } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";


// create a page that allows the user to edit the information
//pass in that information that is used on the view page
//add a save button that has an onClick handler, which will make the axios put require
//use props as well
//make this a form

const UpdateForms = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [exam, setExam] = useState();
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

    const updatePatientId = (e) => {
        setPatientId(e.target.value);
    }
    const updateExam = (e) => {
        setExamID(e.target.value);
    }
    const updateAge = (e) => {
        setAge(e.target.value);
    }
    const updateImageUrl = (e) => {
        setImageUrl(e.target.value);
    }
    const updateSex = (e) => {
        setSex(e.target.value);
    }
    const updateDate = (e) => {
        setDate(e.target.value);
    }
    const updateBmi = (e) => {
        setBmi(e.target.value);
    }
    const updateKeyfindings = (e) => {
        setKeyFindings(e.target.value);
    }
    const updateZipCOde = (e) => {
        setZipCode(e.target.value);
    }
    const updateBrixia = (e) => {
        setBrixiaScore(e.target.value);
        console.log(BrixiaScore)
    }

    useEffect(()=> {
      axios.get(`http://localhost:9000/api/getExam/${id}`)
      .then(res => {
        setPatientId(res.data.PatientId);
        setExamID(res.data.ExamID);
        setAge(res.data.Age);
        setImageUrl(res.data.ImageUrl);
        setSex(res.data.Sex);
        setDate(res.data.Date);
        setBmi(res.data.bmi);
        setKeyFindings(res.data.KeyFindings);
        setZipCode(res.data.ZipCode);
        setBrixiaScore(res.data.BrixiaScore);
        console.log(res.data)
      })
      .catch( err => {
        console.log(err)
      
      });
    }, []);
  
    const updateHandler = (e) => {
        e.preventDefault();
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
        })
            .then((res) => {
                console.log('SUCCESS', res);
                navigate(`/details/${id}`);
            })
            .catch((err) => {
                console.log('ERROR!', err.response);
            })
    }

    return (
        <div className="patient-exam-container">
            <form onSubmit={updateHandler} style={{ width: "82%", marginLeft: "11%" }}>
                <Box pl={10} sx={{ width: '100%' }}>
                    <div style={{ textAlign: "center", marginLeft: "-210px", marginTop: "15px" }}>
                        <Button type="submit" sx={{ backgroundColor: '#b6bf88' }} variant="contained">Update</Button>
                    </div>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <TextField sx={{ m: 1, width: '35ch' }} id="outlined-basic" label="Patient ID" variant="outlined" onChange={updatePatientId} type="text" placeholder={PatientId}></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={{ m: 1, width: '35ch' }} id="outlined-basic" label="EXAM ID" variant="outlined" onChange={updateExam} type="text" placeholder={ExamID}></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={{ m: 1, width: '35ch' }} id="outlined-basic" label="Age" variant="outlined" onChange={updateAge} type="text" placeholder={Age}></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={{ m: 1, width: '35ch' }} id="outlined-basic" label="Image URL" variant="outlined" onChange={updateImageUrl} type="text" placeholder={ImageUrl}></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={{ m: 1, width: '35ch' }} id="outlined-basic" label="Sex" variant="outlined" onChange={updateSex} type="text" placeholder={Sex}></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={{ m: 1, width: '35ch' }} id="outlined-basic" label="Date" variant="outlined" onChange={updateDate} type="text" placeholder={Date}></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={{ m: 1, width: '35ch' }} id="outlined-basic" label="BMI" variant="outlined" onChange={updateBmi} type="text" placeholder={bmi}></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={{ m: 1, width: '35ch' }} id="outlined-basic" label="Key Findings" variant="outlined" onChange={updateKeyfindings} type="text" placeholder={KeyFindings}></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={{ m: 1, width: '35ch' }} id="outlined-basic" label="Zip Code" variant="outlined" onChange={updateZipCOde} type="text" placeholder={ZipCode}></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={{ m: 1, width: '35ch' }} id="outlined-basic" label="Brixia Score" variant="outlined" onChange={updateBrixia} type="text" placeholder={BrixiaScore}></TextField>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </div>
    )
}

export default UpdateForms