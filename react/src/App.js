import logo from './logo.svg';
import './App.css';
import Signin from './components/Signin';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Signup from './components/Signup';
import Blogpost from './components/Blogpost';

function App() {
  return (
    <Router>
    <div className="App">
         <Routes>
     
        <Route path='/' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/blogpost' element={<Blogpost/>} />


        </Routes>
    </div></Router>
  );
}

export default App;
