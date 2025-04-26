import React from 'react';
import logo from './logo.svg';
import './App.css';

// TODO check out the css in App.css 

interface HeaderProps_t {

}


{/* <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}></div> */}

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

const Login: React.FC<LogoProps_t> = (props: LogoProps_t) => {
  return (
    <div style={{
      display: 'flex', 
      justifyContent: 'flex-end', 
      paddingRight: '16px',
      marginLeft: 'auto',
      paddingTop: '4px',
      paddingBottom: '4px',
    }} >
      <div style={{ 
        paddingLeft: '16px',
        paddingRight: '16px',
        display: "flex", 
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: '8px',
        background: 'rgba(191, 0, 255, 0.701)',
        paddingTop: '4px',
        paddingBottom: '4px',
      }}>
        <p style={{margin: 0, padding: 0, color: 'white', fontFamily: `Trebuchet MS`, fontSize: 18}}>Log In</p>
      </div>
    </div>
  );
}



const Header: React.FC<HeaderProps_t> = (props: HeaderProps_t) => {
  return (
    <div style={{boxShadow: "0px 1px 2px grey", borderBottomWidth: '1px', borderBottomStyle: 'solid', borderBottomColor: 'white', display: 'flex', }}>
      <Logo/>
      <Login/>
    </div>
  )
}

interface BodyProps_t {

}

const Body: React.FC<BodyProps_t> = (props: BodyProps_t) => {
  return (
    <div style={{padding: 0, margin: 0 }}>
      <ul>
        <li>Want fuzzy and semantic search instead of ⌘ + F?</li>
        <li>Want a detailed map of your search journey and which results were useful?</li>
        <li>Want results from trusted sites?</li>
        <li>You want True Searcher</li>
      </ul>
    </div>
  )
}

function App() {
  React.useEffect(() => {
      document.title = "True Searcher"
  })

  return (
    <div style={{ height: '100vh', width: '100%', fontFamily: `Trebuchet MS`}}>
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
