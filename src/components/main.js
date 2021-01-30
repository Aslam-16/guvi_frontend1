import React, { Component } from 'react';
class Main extends React.Component{
render(){
    return (

<div class="main">
  <h4 class="heading"style={{paddingRight: 960,paddingLeft: 0,marginBottom: 0}}>Query Section</h4>
    <hr size="2" width="80%" color="black"style={{paddingLeft: 110}}/>  
{/* <table class="tablesmall">
  <tr>
  <th colspan="2"style={{width:1100}}>Next Query Session</th>
  </tr>
  <tr><td style={{
    paddingBottom: 10,
    paddingTop: 30}}
><iframe class="youtube"  src="https://www.youtube.com/embed/il_t1WVLNxk"> </iframe> </td>
<td style={{width: 600}}><p style={{
    paddingLeft:25
}}>Date:30/12/2020</p>
<p style={{
    paddingLeft: 80
}}>Time:Evening 6 to 7 pm</p>
<p style={{
    paddingLeft: 7
}}>Topic: Angular</p></td></tr>
</table> */}
<h6  style={{height: 30,paddingTop: 5}}>Next Query Section</h6>
<ul class="responsive-table">
   <li class="table-row1">
      <div class="col col-1"><iframe class="youtube"  src="https://www.youtube.com/embed/il_t1WVLNxk"> </iframe></div>
    </li>
 </ul>
<ul class="responsive-table2">
  <li class="table-row1"style={{
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0}}><div class="col col-1">Date : 30/12/2020</div>
      <div class="col col-4">Time : Evening 6 to 7 pm</div>
      <div class="col col-5">Topic  : Angular</div>
  </li>
</ul>
<h6  style={{height: 30,paddingTop: 5}}>History Of Queries</h6>
 <div class="container">
  <ul class="responsive-table">
    <li class="table-header">
      <div class="col col-1">Date</div>
      <div class="col col-2">Ticket Name</div>
      <div class="col col-3">Description</div>
      <div class="col col-4">Type</div>
      <div class="col col-5">Status</div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Date">20/1/2021</div>
      <div class="col col-2" data-label="Ticket Name">Javascript</div>
      <div class="col col-3" style={{width:200}} data-label="Description">What Is Javascript</div>
      <div class="col col-4" data-label="Type"style={{paddingRight:5}}>Subjective</div>
      <div class="col col-5" data-label="Status"class="green">Answered</div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Date">21/1/2021</div>
      <div class="col col-2" data-label="Ticket Name">Angular</div>
      <div class="col col-3" data-label="Description">What is Angular</div>
      <div class="col col-4" data-label="Type">Descriptive</div>
      <div class="col col-5" data-label="Status" class="violet">Processing</div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Date">22/1/2021</div>
      <div class="col col-2" data-label="Ticket Name">React</div>
      <div class="col col-3" data-label="Description">What is React</div>
      <div class="col col-4" data-label="Type">Objective</div>
      <div class="col col-5" data-label="Status"class="red">Not Answered</div>
    </li>
  </ul>
</div>
</div>
    )
}
}
export default Main;