import './App.css';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Mains from './pages/Mains';

function App() {
  return (
    <BrowserRouter> 
    <>
    <div className="App">
      <h1> Recipe Site</h1>
    </div>
    <nav className="navbar">
    
      {/* <a className="navbar-link" href="https://www.google.com/" target="_blank"rel="noreferrer">Home</a> */}
      {/* <a className="navbar-link" href="https://www.google.com/">Mains</a> */}
      <Link to='/mains'>Mains </Link>
      {/* <a className="navbar-link" href="https://www.google.com/">Ingredients</a>
      <a className="navbar-link" href="https://www.google.com/">Desserts</a> */}
    
   </nav>
   <Routes>
    <Route path='/mains' element={<Mains/>}></Route>
    
   </Routes>

   </>
   </BrowserRouter>
   );
  
}
  

export default App;
