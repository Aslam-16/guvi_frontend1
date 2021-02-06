import React, { Component } from 'react';

class Dashboard extends React.Component{
render(){
    return (

<div class="main"style={{paddingLeft: 30}}>
  <p  class="line"style={{width: 300,paddingRight:640}}>Dashboard</p>
<div
    style={{height: 50}}>
<div class="barcent">
  <p class ="barhead">Overall Progress<span style={{paddingLeft: 263}}>35%</span></p>
<div class="progress">
	<div class="bar" style={{width:70}}>
  </div>
  </div>
  </div>
  <div class="barcent"style={{marginLeft: 140}}>
  <p class ="barhead">Attendance<span style={{paddingLeft: 287}}>60%</span></p>
<div class="progress">
    <div class="bargreen" style={{width:50}}>
    </div>
  </div>
  </div>
  </div>
  <div class="styled-table-outer"style={{width: 620,marginRight:10}}><div class="tableheading" >
<p  class ="headbar"style={{width: 615,textAlign:'left',paddingLeft:7}}>Overall Performance</p>


  </div><div class="styled-table-dashboardinner1"><ul class="yAxis1"style={{paddingLeft: 12}}>
	<li>25</li>
	<li>20</li>
	<li>15</li>
	<li>10</li>
	<li>05</li>
  <li>25</li>
	<li>20</li>
	<li>15</li>
	<li>10</li>
	<li>05</li>

</ul><div class="columns1">
  <div class="line-chart-block block"><div class="line-chart">
   <div class='grafico'>
     <span data-valor='25'>
       <span data-valor='8'>
         <span data-valor='13'>
           <span data-valor='5'>   
             <span data-valor='23'>   
             <span data-valor='12'>
                 <span data-valor='15'>
                 </span></span></span></span></span></span></span>
   </div>
 

              </div>
            
            </div> </div><ul class="xAxis1" style={{width:634}}>
	<li style={{marginLeft: 50}}>1st</li>
	<li >2nd</li>
	<li >3rd</li>
	<li >4th</li>
	<li>5th</li>
	<li>6th</li>
	<li >7th</li>
  <li >8th</li>
	<li>9th</li>
	<li>10th</li>
	<li >11th</li>
	<li >12th</li>
</ul></div></div>

<div class="styled-table-outer"style={{marginLeft:8}}>
  <div class="tableheading" >
<p  class ="headbar"colspan="4" >Today's Class</p>
<div><iframe class="youtubedashboard"  src="https://www.youtube.com/embed/il_t1WVLNxk"> </iframe><p class="youtubetitle">javascript<span class="youtubelink"><a href="/#prerequisite">prerequisite</a></span></p>
  <div style={{paddingTop: 15}}><span><button type="button" class="click">Join</button></span></div></div>
  </div>
</div>
<div class="styled-table-outer"style={{marginLeft: 0,marginTop: 20}}>
  <div class="tableheading" >
<p  class ="headbar" >Codekata<span class="week">Weekly</span><span class="once">Daily</span><span class="codekata"><img src="codekata.png"></img></span></p>

  </div>
   <p class="centre">3rd Week</p>
<div class="styled-table-dashboardinner" >
<ul class="yAxis">
	<li>25</li>
	<li>20</li>
	<li>15</li>
	<li>10</li>
	<li>05</li>

</ul>
	<div class="columns">
  <div class="column-container" style={{paddingLeft:20}}>
    <div class="column-bar series-b" style={{flexBasis: 200}}></div>
    <div class="column-bar series-a" style={{flexBasis: 160}}></div>
  </div>
  <div class="column-container" > 
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 140}}></div>
  </div>
  <div class="column-container">
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 170}}></div>
  </div>
  <div class="column-container">
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 60}}></div>
  </div>
  <div class="column-container">
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 92}}></div>
  </div>
  <div class="column-container">
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 130}}></div>
  </div>
  <div class="column-container">
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 10}}></div>
  </div>
</div>
<ul class="xAxis">
	<li style={{paddingLeft: 41}}>Mon</li>
	<li style={{paddingLeft: 15}}>Tue</li>
	<li style={{paddingLeft: 10}}>Wed</li>
	<li style={{paddingLeft: 15}}>Thu</li>
	<li style={{paddingLeft: 13}}>Fri</li>
	<li style={{paddingLeft: 10}}>Sat</li>
	<li style={{paddingLeft: 13}}>Sun</li>
	
</ul>
</div>
</div>
<div class="styled-table-outer"style={{marginLeft: 20,marginTop: 20}}>
  <div class="tableheading" >
<p  class ="headbar">Webkata<span class="week">Weekly</span><span class="once">Daily</span><span class="codekata"><img src="codekata.png"></img></span></p>

  </div>
   <p class="centre">Weekly Stats</p>
<div class="styled-table-dashboardinner">
<ul class="yAxis">
	<li>25</li>
	<li>20</li>
	<li>15</li>
	<li>10</li>
	<li>05</li>
</ul>
	<div class="columns">
  <div class="column-container" style={{paddingLeft:20}}>
    <div class="column-bar series-b" style={{flexBasis: 200}}></div>
    <div class="column-bar series-a" style={{flexBasis: 160}}></div>
  </div>
  <div class="column-container" > 
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 140}}></div>
  </div>
  <div class="column-container">
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 170}}></div>
  </div>
  <div class="column-container">
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 60}}></div>
  </div>
  <div class="column-container">
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 92}}></div>
  </div>
  <div class="column-container">
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 130}}></div>
  </div>
  <div class="column-container">
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 10}}></div>
  </div>
</div>
<ul class="xAxis">
	<li style={{paddingLeft: 41}}>Mon</li>
	<li style={{paddingLeft: 15}}>Tue</li>
	<li style={{paddingLeft: 10}}>Wed</li>
	<li style={{paddingLeft: 15}}>Thu</li>
	<li style={{paddingLeft: 13}}>Fri</li>
	<li style={{paddingLeft: 10}}>Sat</li>
	<li style={{paddingLeft: 13}}>Sun</li>
	
</ul>
</div>
</div>
<div class="styled-table-outer"style={{marginLeft: 20,marginTop: 20}}>
  <div class="tableheading" >
<p  class ="headbar"colspan="4" >Micro Arc<span class="week">Weekly</span><span class="once">Daily</span><span class="codekata"><img src="codekata.png"></img></span></p>

  </div>
   <p class="centre">1st Week</p>
<div class="styled-table-dashboardinner">
<ul class="yAxis">
	<li>25</li>
	<li>20</li>
	<li>15</li>
	<li>10</li>
	<li>05</li>

</ul>
	<div class="columns">
  <div class="column-container" style={{paddingLeft:20}}>
    <div class="column-bar series-b" style={{flexBasis: 200}}></div>
    <div class="column-bar series-a" style={{flexBasis: 160}}></div>
  </div>
  <div class="column-container" > 
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 140}}></div>
  </div>
  <div class="column-container">
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 170}}></div>
  </div>
  <div class="column-container">
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 60}}></div>
  </div>
  <div class="column-container">
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 92}}></div>
  </div>
  <div class="column-container">
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 130}}></div>
  </div>
  <div class="column-container">
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 10}}></div>
  </div>
</div>
<ul class="xAxis">
	<li style={{paddingLeft: 41}}>Mon</li>
	<li style={{paddingLeft: 15}}>Tue</li>
	<li style={{paddingLeft: 10}}>Wed</li>
	<li style={{paddingLeft: 15}}>Thu</li>
	<li style={{paddingLeft: 13}}>Fri</li>
	<li style={{paddingLeft: 10}}>Sat</li>
	<li style={{paddingLeft: 13}}>Sun</li>
	
</ul>
</div>
</div>
<div class="styled-table-outer"style={{marginLeft: 0,marginTop: 20}}>
  <div class="tableheading" >
<p  class ="headbar" >Codekata<span class="week">Weekly</span><span class="once">Daily</span><span class="codekata"><img src="codekata.png"></img></span></p>

  </div>
   <p class="centre">3rd Week</p>
<div class="styled-table-dashboardinner" >
<ul class="yAxis">
	<li>25</li>
	<li>20</li>
	<li>15</li>
	<li>10</li>
	<li>05</li>

</ul>
	<div class="columns">
  <div class="column-container" style={{paddingLeft:20}}>
    <div class="column-bar series-b" style={{flexBasis: 200}}></div>
    <div class="column-bar series-a" style={{flexBasis: 160}}></div>
  </div>
  <div class="column-container" > 
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 140}}></div>
  </div>
  <div class="column-container">
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 170}}></div>
  </div>
  <div class="column-container">
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 60}}></div>
  </div>
  <div class="column-container">
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 92}}></div>
  </div>
  <div class="column-container">
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 130}}></div>
  </div>
  <div class="column-container">
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 10}}></div>
  </div>
</div>
<ul class="xAxis">
	<li style={{paddingLeft: 41}}>Mon</li>
	<li style={{paddingLeft: 15}}>Tue</li>
	<li style={{paddingLeft: 10}}>Wed</li>
	<li style={{paddingLeft: 15}}>Thu</li>
	<li style={{paddingLeft: 13}}>Fri</li>
	<li style={{paddingLeft: 10}}>Sat</li>
	<li style={{paddingLeft: 13}}>Sun</li>
	
</ul>
</div>
</div>
</div>
    )
}
}
export default Dashboard;