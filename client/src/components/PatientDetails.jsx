import { useState } from "react";
import { useEffect } from "react";
import {React} from "react";
import './PatientDetails.css';
//import axios from 'axios';




function PatientDetails() {
     // const [data, setData] = useState(null)
    // const [loading, setLoading] = useState(true)
    // const [error, setError] = useState(null)
    // useEffect(() => {
    //     fetch('url')
    //     .then(response => {
    //         if(response.ok){
    //             return response.json()
    //         }
    //         throw response;
    //     })
    //     .then(data => {
    //         setData(data)
    //     })
    //     .catch(error =>{
    //         console.error("error fetching data: ", error)
    //     })
    //     .finally(() =>{
    //         setLoading(false)
    //     })
    // }, [])


       
    // if(loading) return "<----Loading---->"
    // if(error) return "Error"
    const [patient, setPatient] = useState([])
   
    
        fetch(`http://localhost:9000/api/get/212212`)
        .then((response) =>response.json())
        .then(data => {
            console.log(data)
            setPatient(data[0])
        })


      

    return(
        <div className="patientPage">
            <p>Hey, I'm here!</p>
            <div className="id">Patient ID: {patient.PatientId}</div>
            <div className="image">
            <img src="https://images.pexels.com/photos/207496/pexels-photo-20749"  alt="Patient-Detail"/>
            </div>
            <div className="InfoBox">
                <p>Diagnosis:</p>
                <ol>
                    <li> {patient.KeyFindings}</li>
                    <li>{patient.BrixiaScore}</li>
                </ol>
            </div>
            <div className="leftSide">
                <p>Personal Info:</p>
                    <ol className="List">
                        <li>Sex: {patient.Sex}</li>
                        <li>Age: {patient.Age}</li>
                        <li>Zip Code: {patient.ZipCode}</li>
                        <li>BMI: {patient.bmi}</li>
                    </ol>
            </div>
        </div>
    )
}


export default PatientDetails;