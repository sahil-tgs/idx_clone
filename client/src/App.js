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
          <img src="/googlr.svg" alt="Icon 2" width="20" height="20" />
        </a>
      </div>
      
      <div className="main">

        <div className="content">
        <div className="navbar">
          <NavigationBar />
        </div> 
          
          <Section1 />
        
        <div className="section2">
          <Section2 />
        </div>

        <div className="section3">
        <Section3 />
        </div>

        <div className="section4">
          <Section4 />
        </div>

        <div className="section5">
          <Section5 />
        </div>
        
        <div className="section6">
          <Section6 />
        </div>

        <div className="section7">
          <Section7 />
        </div>

        <div className="Footer">
            <div className="Left">
              <a href="/" className="anc"> Privacy Policy </a>
            </div>
            <div className="Right">
            
            <a href="/" className="anc"> Terms & Conditions </a>
            </div>


        </div>
        </div>
        
       
        <div className="shine"></div>
      </div>
      
    </div>
  );
}

export default App;
