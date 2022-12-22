import './App.css';
import Loggin from './Components/Loggin/Loggin';
import Home from './Components/Home/Home';
import DogDetail from './Components/DogDetail/DogDetail';
import CreateDog from './Components/CreateDog/CreateDog';
import NotFound from './Components/NotFound/NotFound';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        
        <Route exact path='/'>
          <Loggin/>  
        </Route>

        <Route exact path='/home'>
          <Home/>
        </Route>

        <Route exact path ='/create'>
          <CreateDog/>
        </Route> 

        <Route exact path ='/dog/:id' component={DogDetail}/>
        
        <Route path="*" component={NotFound} />  

      </Switch>     
    </div>
  );
}

export default App;
