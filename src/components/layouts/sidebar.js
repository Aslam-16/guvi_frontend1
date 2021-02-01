import React, { Component } from 'react';
class Sidebar extends React.Component{
render(){
    return (

<div class="sidenav">
               
  <a href="#dashboard" ><i style={{width:25}} class="fas fa-archive"></i>Dashboard</a>
  <a href="#class"><i style={{width:25}} class="fas fa-book-open"></i>Class</a>
  <a href="#tasks"><i style={{width:25}} class="fas fa-tasks"></i>Tasks</a>
  <a href="#query"><i style={{width:25}} class="fas fa-comments"></i>Query</a>
  <a href="#calender"><i style={{width:25}} class="fas fa-calendar-alt"></i>Calender</a>
  <a href="#apply"><i style={{width:25}}class="fas fa-briefcase"></i>Apply jobs</a>
</div>
    )
}
}
export default Sidebar;