// import logo from './logo.svg';
import React from "react";
// import ReactDOM from "react-dom/client";
import Cover from "./components/Cover_page"
import Profile from "./components/image"
import ProfileRes from "./components/image2";
import Info from "./components/Profile-info"
import About from "./components/About"
import Footer from "./components/Footer"
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return(
    <div>
      <Cover />
      <Profile />
      <ProfileRes />
      <Info />
      <About />
      <Footer />
    </div>
  )
}

export default App;
