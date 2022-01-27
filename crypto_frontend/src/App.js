import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/css//HeroCard.css'
import { CryptoDetails } from './components/commonComponent/CryptoDetails';
import { HeroCard } from "./components/commonComponent/HeroCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';
import { CryptoViewData } from './components/commonComponent/CryptoViewData';
import DemoTableData from './components/commonComponent/DemoTableData';
import { MainPage } from './components/commonComponent/MainPage';

export const App = () => {

  const [crypData, setCryptData] = useState()

  return (
    <>

      <div style={{margin:20}}>
       

        <Router>
          <Routes>
            <Route exact path='/' element={<MainPage />} />
            <Route exact path='home' element={<CryptoDetails />} />
            <Route exact path='view' element={<CryptoViewData />} />
          </Routes>
        </Router>
      </div>

      {/* <DemoTableData/> */}

    </>
  )
} 