// src/App.js
import './App.css';
import NavigationBar from './components/NavigationBar';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
// import Frame from './components/Frame';

function App() {
  return (
    <div className="app-container">
      <div className="sidenav">
        <a href="/page1" className="idxLogo">
         <img src="/idxlogo.svg" alt="Icon 1" width="30" height="30" />
        </a>
        <a href="/page2" className="googleLogo" >
          <img src="/googlr.svg" alt="Icon 2" width="30" height="30" />
        </a>
      </div>
        
      <div className="main">
        <NavigationBar />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />

      <div className="Footer">
          <div className="Left">
            <a href="/" className="anc"> Privacy Policy </a>
          </div>
          <div className="Right">
          
          <a href="/" className="anc"> Terms & Conditions </a>
          </div>
      </div>

      </div>
    </div>
  );
}

export default App;
