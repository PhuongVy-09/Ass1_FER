
import './App.css';
import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Players from './components/Players';
// import Detail from './components/Detail';
// import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer'
import Main from './components/Main';
function App() {
  return (
    <div className='App'>
      <Navigation/>
      <Main/>
      <Footer/>
    
    </div>
  );
}

// const App = () =>  {
//   return (
//     <div className='App'>
//     <div>
//       <Navigation/>
//       <Routes>
//           <Route path='/' element={<Players/>}> 
//       </Route>
//           <Route path='/detail/:id' element={<Detail/>}></Route>
//           <Route path='/contact' element={<Contact/>}></Route>
//       </Routes>
//       <Footer/>
    
//     </div>
//     </div>
//   );
// }

export default App;


