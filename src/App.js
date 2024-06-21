import logo from './media/logo.png';
import maintenance from './media/maintenance-crop.gif'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className='App-logo'></img>
        <img src={maintenance} className="App-bus" alt="logo" />
        <p className='App-desc'>
          Estamos en mantenimiento... Se paciente por favor 😁
        </p>
      </header>
    </div>
  );
}

export default App;
