import {React, useState} from "react";
import './PatientDetails.css';
//import axios from 'axios';





function PatientDetails(props) {
    if(!props.patient){
      console.log("GERE!!!!!*************");
        return '';
    }
      
    return(
        <div className="patientPage">
            <p>Hey, I'm here!</p>
            <div className="id">Patient ID: {props.patient.PatientId}</div>
            <img className="image" src={props.patient.ImageUrl} alt="Patient-Detail"/>
            
            <div className="InfoBox">
                <p>Diagnosis: </p>
                <ol>
                    <li>{props.patient.KeyFindings}</li>
                    <li>{props.patient.BrixiaScore}</li>
                </ol>
            </div>
            <div className="leftSide">
                <p>Personal Info:</p>
                    <ol className="List">
                        <li>Sex: {props.patient.Sex}</li>
                        <li>Age: {props.patient.Age}</li>
                        <li>Zip Code: {props.patient.ZipCode}</li>
                        <li>BMI: {props.patient.bmi}</li>
                    </ol>
            </div>
        </div>
    )
}


export default PatientDetails;