import React, { useState, useEffect } from 'react';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Header from './components/Header.jsx'
import AdminMode from './components/AdminMode';
import Examinations from './components/Examinations';
import PatientExams from './components/PatientExams';
import PatientExamDetails from './components/PatientExamDetails';
import CreateExam from './components/CreateExam';
import Footer from './components/Footer';
import './App.css';
import UpdateForms from './components/PatientExamUpdate.jsx';

function App() {
  const [details, setDetails] = useState([])
  const [header, setHeader] = useState('Doctor Help');
  const [pathName, setPath] = useState('');
  const [variable , setVariable] = useState(0)
  
  return (
    <div>
      <Header header = {header}/>
      <Routes>
        <Route 
          path={'/'} 
          element={<Examinations 
            setHeader={setHeader} 
            setVariable={setVariable}/>
          }
        />
        <Route 
          path={'/create'} 
          element={<CreateExam 
            setHeader={setHeader} 
            setVariable={setVariable}/>
          }
        />
        <Route
          path={'/update/:id'} 
          element={<UpdateForms details = {details}/>}
          />
        <Route 
          path={'/admin'} 
          element={<AdminMode 
            setHeader={setHeader} 
            setVariable={setVariable}/>
          }
        />
        <Route 
          path={'/details/:id'} 
          element={<PatientExamDetails setDetails = {setDetails} 
            setHeader={setHeader} 
            setVariable={setVariable}/>
          }
        />
        <Route 
          path={'/patientexam/:PatientId'} 
          element={<PatientExams 
            setHeader={setHeader} 
            setVariable={setVariable} />
          }
        />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
