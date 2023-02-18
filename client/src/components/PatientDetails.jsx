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
      const patientID = props.patientId;
      const sex = props.sex
      const age = props.age;
      const zip = props.zipCode;

    return(
        <div className="patientPage">
            <p>Hey, I'm here!</p>
            <div className="id">Patient ID: {patientID}</div>
            <div className="image">{image}</div>
            <div className="InfoBox">
                <p>Diagnosis:</p>
                <ol>
                    <li>{props.keyFindings}</li>
                </ol>
            </div>
            <div className="leftSide">
                <p>Personal Info:</p>
                    <ol className="List">
                        <li>Sex: {sex}</li>
                        <li>Age: {age}</li>
                        <li>Zip Code: {zip}</li>
                    </ol>
            </div>
        </div>
    )
}


export default PatientDetails;
