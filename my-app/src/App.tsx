import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


interface LogoProps_t {

}

const Logo: React.FC<LogoProps_t> = (props: LogoProps_t) => {
  return (
    <div style={{
      display: 'flex', 
      padding: '4px',
      paddingRight: '16px',
    }} >
      <div style={{ 
        display: "inline-block", 
        padding: '8px', 
        alignItems: 'center',
      }}>
        <div style={{display: 'flex', borderBottomColor: 'rgba(191, 0, 255, 0.701)',
        borderBottomWidth: '2px',
        borderBottomStyle: 'solid',}}>
          <p style={{paddingRight: "4px", margin: 0, fontSize: 22, fontFamily: `Trebuchet MS`, textAlign: 'right'}}>
            <span style={{color: 'rgba(191, 0, 255, 0.701)'}}>True</span> Searcher
          </p>
          <img src={logo} style={{marginTop: '-7px', color: 'rgba(191, 0, 255, 0.701)'}} alt="Logo" height="40px"/>
        </div>
      </div>
    </div>
  );
}

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
      <section className="two-column-section">
        <div className="column" style={{padding: '16px'}}>
          <h2>
            Google
          </h2>
          <img src="gemini.png" alt="Gemini failing basic fashion" style={{maxWidth: "300px"}}></img>
        </div>
        <div className="column" style={{padding: '16px'}}>
          <h2>
            True Searcher
          </h2>
          <img src="gemini.png" alt="Gemini failing basic fashion" style={{maxWidth: "300px"}}></img>

        </div>
      </section>
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
