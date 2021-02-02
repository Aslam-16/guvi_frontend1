import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/layouts/header';
import Sidebar from './components/layouts/sidebar';
import Main from './components/main';
import Dashboard from './components/dashboard';
import Calender from './components/calender';
import Classes from './components/classes';
import Task from './components/task';
function App() {
  return (
    <Router>
    <div className="App">
      <Header/>  
      <Sidebar/>
      <Route exact path="/" component={Dashboard}/>
      <Switch>
      <Route exact path="/query" component={Main}/>
       <Route exact path="/calender" component={Calender}/>
       <Route exact path="/class" component={Classes}/>
       <Route exact path="/task" component={Task}/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
