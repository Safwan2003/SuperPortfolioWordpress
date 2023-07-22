// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>

      
// //     </div>
// //   );
// // }

// // export default App;
// import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// // import SinglePostPage from './components/SinglePostPage';
// import Homepage from './components/Homepage'
// function App() {
//   return (
//     // <Router>
//     //   <Routes>
//     //     <Route exact path="/Header" component={Header} />
//     //     <Route exact path="/" component={Homepage} />

//     //     {/* <Route path="/post/:id" component={SinglePostPage} /> */}
//     //     {/* Add more routes for different URLs and components */}
//     //   </Routes>
//     // </Router>
// <Header/>

//     );
// }

// export default App;


import React from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import Slider from './components/Slider'
import Main from './components/Main'
import Ourclient from './components/Ourclient'
const App = () => {
  const body={
    backgroundColor: 'var(--bg-color)',
  color:'var(--text-color)',
  scrollBehavior:'smooth ',
  }
    
  
  return (
    <div style={body}>

      <Header/>
      <Slider/>
      <Main/>
      <Card/>

      <Ourclient/>
      <Footer/>
    </div>
  )
}

export default App