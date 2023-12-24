import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Game from './components/Game'
import Home from './components/Home';
import Play from './components/Play';


function App() {
 
  return (
      <Router>
        <Routes>
         <Route exact path='/' element={<Home />} />
         <Route exact path='/game' element={<Game />} />
         <Route exact path='/play' element={<Play />} />
        </Routes>
      </Router  >

  )
  
}


export default App;
