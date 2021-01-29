import React, { Component } from 'react';
class Main extends React.Component{
render(){
    return (

<div class="main">
   <div id="#query">
  <h3 class="heading"style={{paddingRight: 900,paddingLeft: 0}}>Query Section</h3>
<hr size="10" width="90%" color="black"style={{paddingLeft: 110}}/>  
<table class="tablesmall">
  <tr>
  <th colspan="2"style={{width:1100}}>Next Query Session</th>
  </tr>
  <tr><td ><iframe class="youtube"  src="https://www.youtube.com/embed/il_t1WVLNxk"> </iframe> </td>
<td><p>date:30/12/2020</p>
<p>Time:Evening 6 to 7 pm</p>
<p>Topic: Angular</p></td></tr>
</table>
<h4 colspan="2">History Of Queries</h4>
  <table class="tablelong">
  <tr>
  <th >Date</th>
  <th>Ticket Name</th>
  <th  colspan="2">Description</th>
  <th>Type</th>
  <th>Status</th>
  </tr>
  <tr>
  <td>
   20/1/2021
  </td>
   <td >
    React
  </td>
   <td colspan="2">
    What is React?
  </td>
   <td >
    Objective
  </td>
   <td class="red">
    Yet To Open
  </td>
  </tr>
  <tr>
  <td>
   20/1/2021
  </td>
   <td >
    Javascript
  </td>
   <td colspan="2">
    What is Javascript?
  </td>
   <td >
    Subjective
  </td>
   <td class="green">
    Answered
  </td>
  </tr>
   <tr>
  <td>
   20/1/2021
  </td>
   <td >
    Angular
  </td>
   <td colspan="2">
    What is Angular?
  </td>
   <td >
    Descriptive
  </td>
   <td class="violet">
    Processing
  </td>
  </tr>
</table>
</div></div>
    )
}
}
export default Main;