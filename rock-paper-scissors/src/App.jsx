import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Game from './components/Game'
import Home from './components/Home';
import Modal from './components/Modal';


function App() {
 
  return (
      <Router>
        <Routes>
         <Route exact path='/' element={<Home />} />
         <Route exact path='/game' element={<Game />} />
         <Route exact path='/rules' element={<Modal />} />
        </Routes>
      </Router  >

  )
  
}


export default App;
