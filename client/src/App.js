import './App.css';
import Header from './components/Header.jsx'

import { useApi } from './hooks/use-api';

function App() {
  const { response } = useApi();

  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <p>
          {response}
        </p>
      </header>
    </div>
  );
}

export default App;
