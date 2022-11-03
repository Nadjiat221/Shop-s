

import Navbar from './component/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AddItem from './pages/AddItem';

import './App.css'

function App() {

   
  return (
<>
    <Router>
      <div className='App'>
        <Navbar />
       
        <Route path='/' exact component={Home}   />
        <Route path='/AddItem' exact  component={AddItem}   />



      </div>

    </Router>
    </>



  );
}

export default App;