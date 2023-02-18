import {React, useState, } from "react";
import './PatientDetails.css';
import axios from 'axios';




function PatientDetails(props) {
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
    const [individualPatient, setIndividualPatient] = useState([])
    useEffect( () => {
        axios.get('http://localhost:9000/api/')
        .then((response) => {
          const result = response.data.exams;
          console.log(response.data.exams);
          setPatients(result);
        })
        .catch((err) => console.log(err.response));
      }, []);


      const image = props.imageURL;


    return(
        <div className="patientPage">
            <p>Hey, I'm here!</p>
            <div className="id">Patient ID: {props.patientId}</div>
            <div className="image">Image {props.imageURL}</div>
            <div className="InfoBox">
                <p>Diagnosis:</p>
                <ol>
                    <li>{props.keyFindings}</li>
                    <li></li>
                    <li></li>
                </ol>
            </div>
            <div className="leftSide">
                <p>Personal Info:</p>
                    <ol className="List">
                        <li>Sex: {props.sex}</li>
                        <li>Age: {props.age}</li>
                        <li>Zip Code: {props.zipCode}</li>
                    </ol>
            </div>
        </div>
    )
}


export default PatientDetails;
