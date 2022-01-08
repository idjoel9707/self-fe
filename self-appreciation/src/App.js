import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Project/Project';
import Skills from './components/Skills/Skills';
import Timeline from './components/Timeline/Timeline';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Signin from './components/AUTH/signin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <a><About /></a>
        <a><Contact /></a>
        <a><Navbar /></a>
        <a><Project /></a>
        {/* <a><Skills /></a>
        <a><Timeline /></a> */}
      </header>
      <body>
      {/* <div className="wrapper">
      <h1>Application</h1>
        
     </div> */}
      </body>
    </div>
  );
}

export default App;


// 
// export default function App() {
//   return (
//     <main className='text-gray-400 bg-gray-900 body-font'>
//       <Navbar />
//       <About />
//       <Project />
//       <Skills />
//       <Timeline />
//       <Contact />
//     </main>
//   );
// }
