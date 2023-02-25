import './App.css';
import ExamTable from './components/ExamTable';
import Header from './components/Header.jsx'
import PatientDetails from './components/PatientDetails';
import CreateExam from './components/CreateExam';
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/exam">
        <Header/>
        <PatientDetails/>
      </Route>

    <Route path='/exam/edit'>
      <Header/>
      <CreateExam/> 
    </Route>

      <Route path="/home">
        <div className="App">
          <Header />
          <ExamTable/>
        </div>
      </Route>

    </Switch>
  );
}

export default App;
