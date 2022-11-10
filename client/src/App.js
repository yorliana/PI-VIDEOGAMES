import './App.css';
import { Route } from 'react-router-dom';
import { Landing } from './components/Landing';
import { Home } from './components/Home';
import { Detail } from './components/Detail';
import { CreateForm } from './components/CreateForm';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
axios.defaults.baseURL = process.env.REACT_APP_API || 'http://localhost:3001';
function App() {
  return (
    <div className="App">
      <Route exact path='/api/videogames' component={Landing}/>
      <Route exact path='/api/videogames/home' component={Home}/>
      <Route exact path='/api/videogams/create' component={CreateForm}/>
      <Route exact path='/api/videogamesdetail/:id' component={Detail}/>
    </div>

  );
}

export default App;
