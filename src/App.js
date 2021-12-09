import './App.css';
import NavBar from './components/navbar/NavBar';
import common from './components/common';
import ItemListContainer from './components/ItemListContainer';
function App() {




  return (
    <div className="App">
      <NavBar>
      <div>1</div>
      <div>2</div>
      </NavBar>
      <common.TitleTablet text="Hola"></common.TitleTablet>
      <common.buttonSubmit></common.buttonSubmit>
      <ItemListContainer/>
    </div>
  );
}

export default App;
