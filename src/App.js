import React from 'react'
import Index from './components/Index';
import Result from './components/Result';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Index />} />
          <Route exact path="/result" element={<Result />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
