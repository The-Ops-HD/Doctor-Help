import './App.css';
import ExamTable from './components/ExamTable';
import Header from './components/Header.jsx'
import PatientDetails from './components/PatientDetails';
import CreateExam from './components/CreateExam';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Footer from './components/Footer';
import { useState } from 'react';
import AdminMode from './components/adminMode';
import { useEffect } from 'react';


function App() {
  const [patient, setPatient] = useState();
  return (
    <div>
        <Header/>
        <Routes>
          <Route path={'/'} element={<ExamTable/>}/>
          <Route path={'/create'} element={<CreateExam/>}/>
          {/* <Route path={'/update/:id'} element={<Update/>}/> */}
          <Route path={'/admin'} element={<AdminMode/>}/>
          <Route path={'/details/:id'} element = {<PatientDetails patient = {patient}/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
