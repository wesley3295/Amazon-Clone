import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Router from 'react-router-dom'
function App() {
  return (
    //BEM convention
    <div className="app">

      {/* Header */}
      <Header/>
      {/* Home */}
      <Home/>
      {/*  */}
    </div>
  );
}

export default App;
