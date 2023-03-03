import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

const UpdateForms = (props) => {
    console.log(props.details)

    const [PatientId, setPatientId] = useState(props.details.PatientId);
    const [ExamID, setExamID] = useState(props.details.ExamID);
    const [Age, setAge] = useState(props.details.Age);
    const [ImageUrl, setImageUrl] = useState(props.details.ImageUrl);
    const [Sex, setSex] = useState(props.details.Sex);
    const [Date, setDate] = useState(props.details.Date);
    const [bmi, setBmi] = useState(props.details.bmi);
    const [KeyFindings, setKeyFindings] = useState(props.details.KeyFindings);
    const [ZipCode, setZipCode] = useState(props.details.ZipCode);
    const [BrixiaScore, setBrixiaScore] = useState(props.details.BrixiaScore);

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

    const updateHandler = (e) => {
        e.preventDefault();
        console.log("Gotten this far!")
        axios.put(`http://localhost:9000/api/edit/${PatientId}`, {
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
            })
            .catch((err) => {
                console.log('ERROR!', err.response);
            })
    }
    console.log('this is the id: ', PatientId)

    return (
        <div className="patient-exam-container">
            <form onSubmit={updateHandler} style={{ width: "82%", marginLeft: "11%" }}>
                <Box pl={10} sx={{ width: '100%' }}>
                    <div style={{ textAlign: "center", marginLeft: "-210px", marginTop: "15px" }}>
                        <Button type="submit" sx={{ backgroundColor: '#b6bf88' }} variant="contained">Update</Button>
                    </div>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <TextField sx={{ m: 1, width: '35ch' }} id="outlined-basic" label="Patient ID" variant="outlined" onChange={updatePatientId} type="text" value={PatientId}></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={{ m: 1, width: '35ch' }} id="outlined-basic" label="EXAM ID" variant="outlined" onChange={updateExam} type="text" value={ExamID}></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={{ m: 1, width: '35ch' }} id="outlined-basic" label="Age" variant="outlined" onChange={updateAge} type="text" value={Age}></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={{ m: 1, width: '35ch' }} id="outlined-basic" label="Image URL" variant="outlined" onChange={updateImageUrl} type="text" value={ImageUrl}></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={{ m: 1, width: '35ch' }} id="outlined-basic" label="Sex" variant="outlined" onChange={updateSex} type="text" value={Sex}></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={{ m: 1, width: '35ch' }} id="outlined-basic" label="Date" variant="outlined" onChange={updateDate} type="text" value={Date}></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={{ m: 1, width: '35ch' }} id="outlined-basic" label="BMI" variant="outlined" onChange={updateBmi} type="text" value={bmi}></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={{ m: 1, width: '35ch' }} id="outlined-basic" label="Key Findings" variant="outlined" onChange={updateKeyfindings} type="text" value={KeyFindings}></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={{ m: 1, width: '35ch' }} id="outlined-basic" label="Zip Code" variant="outlined" onChange={updateZipCOde} type="text" value={ZipCode}></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={{ m: 1, width: '35ch' }} id="outlined-basic" label="Brixia Score" variant="outlined" onChange={updateBrixia} type="text" value={BrixiaScore}></TextField>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </div>
    )
}

export default UpdateForms