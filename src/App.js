import React from 'react';
import './styles/style.css'
import { BrowserRouter, Route } from 'react-router-dom'
import TestSummary from './pages/test/TestSummary'
import TestHome from './pages/test/TestHome'
import ApplyFormProvider from './context/ApplyFormContext';
import Header from './components/Header';



function App() {
  return (
    <div className="App">
      <ApplyFormProvider>
        <BrowserRouter>
        <Header />
          <Route path='/' exact component={TestHome} />
          <Route path='/Summary' component={TestSummary} />
        </BrowserRouter>

      </ApplyFormProvider>
     



    </div>
  );
}

export default App;
