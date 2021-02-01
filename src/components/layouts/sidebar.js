import React, { Component } from 'react';
class Sidebar extends React.Component{
render(){
    return (

<div class="sidenav">
               
  <a href="#dashboard" >Dashboard</a>
  <a href="#class">Class</a>
  <a href="#tasks">Tasks</a>
  <a href="#query">Query</a>
  <a href="#calender">Calender</a>
  <a href="#apply">Apply jobs</a>
</div>
    )
}
}
export default Sidebar;