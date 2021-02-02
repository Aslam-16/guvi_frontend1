import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class Sidebar extends React.Component{
render(){
    return (

<div class="sidenav">
               
  <Link to="/"><i style={{width:25}} class="fas fa-archive"></i>Dashboard</Link>
  <Link to="/class"><i style={{width:25}} class="fas fa-book-open"></i>Class</Link>
  <Link to="/task"><i style={{width:25}} class="fas fa-tasks"></i>Tasks</Link>
  <Link to="/query"><i style={{width:25}} class="fas fa-comments"></i>Query</Link>
  <Link to="/calender"><i style={{width:25}} class="fas fa-calendar-alt"></i>Calender</Link>
  <Link to="/"><i style={{width:25}}class="fas fa-briefcase"></i>Apply jobs</Link>
</div>
    )
}
}
export default Sidebar;