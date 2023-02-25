import './App.css';
import { useState} from 'react';
import ExamTable from './components/ExamTable';
import Header from './components/Header.jsx'
import PatientDetails from './components/PatientDetails';
import CreateExam from './components/CreateExam';
import {Route, Routes} from "react-router-dom";

function App() {
  const [selectedPatient, setSelectedPatient] = useState();

  return (
    <Routes>
      <Route path="/exam" element=
      {
        <>
          <Header/>
          <PatientDetails selectedPatient={selectedPatient} setSelectedPatient= {setSelectedPatient}/>
        </>
      }/>

      <Route path='/exam/edit' element= {
        <>
            <Header/>
            <CreateExam/> 
        </>
      } />
      

      <Route path="/home" element={
        <>
          <div className="App">
            <Header />
            <ExamTable selectedPatient={selectedPatient} setSelectedPatient={setSelectedPatient}/>
          </div>
        </>

      }/>

    </Routes>
  );
}

export default App;
