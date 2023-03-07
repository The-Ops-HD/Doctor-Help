import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
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

const UpdateForms = ({details, setDetails}) => {
    const navigate = useNavigate();
    const {id} = useParams();


    function handleChange(event){
        console.log('this is the event: ', event)
        console.log('the deets are: ', details)
        setDetails({
            ...details,
            [event.target.name] : event.target.value,
        })
    }
   

     
    const updateHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:9000/api/edit/${id}`, {
         details
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
                        <Button type="submit" sx={{ backgroundColor: '#b6bf88', ':hover': { bgcolor: '#578188', color:'white'}  }} onClick={() => handleChange()}variant="contained">Update</Button>
                    </div>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <TextField sx={{ m: 1, width: '35ch' }} id="outlined-basic" label="Patient ID" variant="outlined" onChange={handleChange} type="text" value={details.PatientId} name={"PatientId"}></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={{ m: 1, width: '35ch' }} id="outlined-basic" label="EXAM ID" variant="outlined" onChange={handleChange} type="text" value={details.ExamID} name={"ExamID"}></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={{ m: 1, width: '35ch' }} id="outlined-basic" label="Age" variant="outlined" onChange={handleChange} type="text" value={details.Age} name={"Age"}></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={{ m: 1, width: '35ch' }} id="outlined-basic" label="Image URL" variant="outlined" onChange={handleChange} type="text" value={details.ImageUrl} name={"ImageUrl"}></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={{ m: 1, width: '35ch' }} id="outlined-basic" label="Sex" variant="outlined" onChange={handleChange} type="text" value={details.Sex} name={"Sex"}></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={{ m: 1, width: '35ch' }} id="outlined-basic" label="Date" variant="outlined" onChange={handleChange} type="text" value={details.Date} name={"Date"}></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={{ m: 1, width: '35ch' }} id="outlined-basic" label="BMI" variant="outlined" onChange={handleChange} type="text" value={details.bmi} name={"bmi"}></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={{ m: 1, width: '35ch' }} id="outlined-basic" label="Key Findings" variant="outlined" onChange={handleChange} type="text" value={details.KeyFindings} name={"KeyFindings"}></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={{ m: 1, width: '35ch' }} id="outlined-basic" label="Zip Code" variant="outlined" onChange={handleChange} type="text" value={details.ZipCode} name={"ZipCode"}></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={{ m: 1, width: '35ch' }} id="outlined-basic" label="Brixia Score" variant="outlined" onChange={handleChange} type="text" value={details.BrixiaScore} name={"BrixiaScore"}></TextField>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </div>
    )
}

export default UpdateForms