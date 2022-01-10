import { BrowserRouter, Route, Routes } from 'react-router-dom';
import cl from './App.module.css';
import AppRouter from './Components/AppRouter';
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <div className={cl.container}>
        <BrowserRouter>
          <Header/>
          <AppRouter/>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
