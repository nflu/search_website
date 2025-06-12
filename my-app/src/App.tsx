import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const HomeButton: React.FC<EmptyProps_t> = () => {
  return (<div className='clicky' onClick={() => (document.location.href = '/')}>
  <div className="logo-container">
    <img
      src={logo}
      alt="Startup Logo"
      className="startup-logo"
      width={"30px"}
    />
    <h2 style={{margin:0, marginTop: "6px"}}>TS</h2>
  </div>
</div>);
}

interface EmptyProps_t {}

const HomePage: React.FC<EmptyProps_t> = () => {
  return (
    <div className="App">
      <HomeButton/>
      <header className='App-header'>
        <h1>True Searcher</h1>
          <p>Search with AI for <u>correct</u> answers</p>
          <button onClick={() => (document.location.href = '/about')}>
            Learn More
          </button>
          <p style={{fontSize: '0.8em'}}>contact@truesearcher.com</p>
        </header>
    </div>
  );
}

const AboutPage: React.FC<EmptyProps_t> = () => {
  return (
    <div className='App-no-center'>
      <HomeButton/>
      <h1>About</h1>
      <p>True Searcher prioritizes answering your questions correctly</p>
    </div>
  )
}

function App() {
  React.useEffect(() => {
      document.title = "True Searcher"
  })

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
