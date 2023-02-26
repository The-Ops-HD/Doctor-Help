import React, {useState, useEffect} from "react";
import axios from "axios";




const CreatePost = () => {
  const [patients, setPatients] = useState([]);
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
    axios.get('http://localhost:9000/api/')
    .then((response) => {
      const result = response.data.exams;
      setPatients(result);
    })
    .catch((err) => console.log(err.response));
  }, []);
  const onSubmitHandler = () => {
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
    })
  }
  return(
    <div>
      <h1>ADMIN MODE!!!</h1>
    </div>
  )
}

export default CreatePost;