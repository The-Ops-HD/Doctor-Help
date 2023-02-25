import './App.css';
import { useState } from 'react';
import ExamTable from './components/ExamTable';
import Header from './components/Header.jsx'
import PatientDetails from './components/PatientDetails';
import CreateExam from './components/CreateExam';
import {Route, Switch} from "react-router-dom";

function App() {
  const [selectedPatient, setSelectedPatient] = useState();

  return (
    <Switch>
      <Route path="/exam">
        <Header/>
        <PatientDetails selectedPatient={selectedPatient} setSelectedPatient= {setSelectedPatient}/>
      </Route>

    <Route path='/exam/edit'>
      <Header/>
     <CreateExam/> 
    </Route>

      <Route path="/home">
        <div className="App">
          <Header />
          <ExamTable selectedPatient={selectedPatient} setSelectedPatient={setSelectedPatient}/>
        </div>
      </Route>

    </Switch>
  );
}

export default App;
