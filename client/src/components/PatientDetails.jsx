import {React, useState} from "react";
import './PatientDetails.css';
//import axios from 'axios';





function PatientDetails({selectedPatient}) {
    if(!selectedPatient){
      console.log("GERE!!!!!*************");
        return '';
    }
      
    return(
        <div className="patientPage">
            <p>Hey, I'm here!</p>
            <div className="id">Patient ID: {selectedPatient.PatientId}</div>
            <img className="image" src={selectedPatient.ImageUrl} alt="Patient-Detail"/>
            
            <div className="InfoBox">
                <p>Diagnosis: </p>
                <ol>
                    <li>{selectedPatient.KeyFindings}</li>
                    <li>{selectedPatient.BrixiaScore}</li>
                </ol>
            </div>
            <div className="leftSide">
                <p>Personal Info:</p>
                    <ol className="List">
                        <li>Sex: {selectedPatient.Sex}</li>
                        <li>Age: {selectedPatient.Age}</li>
                        <li>Zip Code: {selectedPatient.ZipCode}</li>
                        <li>BMI: {selectedPatient.bmi}</li>
                    </ol>
            </div>
        </div>
    )
}


export default PatientDetails;