import './App.css';
import NavBar from './components/NavBar';
import common from './components/common';
function App() {




  return (
    <div className="App">
      <NavBar />
      <common.TitleTablet text="Hola"></common.TitleTablet>
      <common.buttonSubmit></common.buttonSubmit>
    </div>
  );
}

export default App;
