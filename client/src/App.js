import './App.css';
import ExamTable from './components/ExamTable';
import Header from './components/Header.jsx'
import PatientDetails from './components/PatientDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <ExamTable/>
    </div>
  );
}

export default App;
