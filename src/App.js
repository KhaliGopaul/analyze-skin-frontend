import { Route, Routes } from "react-router-dom";
import LandingPage from './components/LandingPage'
import Dropdowns from "./components/Dropdowns";
import { SkincontextProvider } from "./context/Skincontext";
import './App.css';
import Results from "./components/Results";

function App() {
  return (
    <>
    <SkincontextProvider>
    <Routes>
      <Route path="/" element={ <LandingPage/>}/> 
      <Route path="/Dropdowns" element={ <Dropdowns/> }/>
      <Route path='/Results' element={ <Results/> }/>
    </Routes>
    </SkincontextProvider>

  
    </>
  );
}

export default App;
