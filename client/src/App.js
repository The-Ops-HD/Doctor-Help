import './App.css';
import Header from './components/Header.jsx'
import PatientDetails from './components/PatientDetails';
import CreateExam from './components/CreateExam';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Footer from './components/Footer';
import { useState } from 'react';
import AdminMode from './components/adminMode';
import { useEffect } from 'react';
import Examinations from './components/examinations';


function App() {
  const [header, setHeader] = useState('Doctor Help');
  const [pathName, setPath] = useState('');
  const [variable , setVariable] = useState(0);
  useEffect(() => {
    setPath(window.location.pathname)
    console.log(pathName);
  }, [variable])
  return (
    <div>
        <Header header = {header}/>
        <Routes>
          <Route path={'/'} element={<Examinations setHeader = {setHeader} setVariable = {setVariable}/>}/>
          <Route path={'/create'} element={<CreateExam setHeader = {setHeader} setVariable = {setVariable}/>}/>
          {/* <Route path={'/update/:id'} element={<Update/>}/> */}
          <Route path={'/admin'} element={<AdminMode setHeader = {setHeader} setVariable = {setVariable}/>}/>
          <Route path={'/details/:id'} element = {<PatientDetails setHeader = {setHeader} setVariable = {setVariable}/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
