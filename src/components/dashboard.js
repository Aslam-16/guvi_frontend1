import React, { Component } from 'react';

class Dashboard extends React.Component{
render(){
    return (

<div class="main"style={{paddingLeft: 30
}}>
  <p  class="line"style={{
    width: 300,paddingRight:640
}}>Dashboard</p>
<div
    style={{height: 50}}
>
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
 
  


<div class="styled-table-outer">
  <div class="tableheading" >
<p  class ="headbar"colspan="4" >Codekata<span class="week">Weekly</span><span class="once">Daily</span><span class="codekata"><img src="codekata.png"></img></span></p>

  </div>
   <p class="centre">3rd Week</p>
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
	<li style={{paddingLeft: 41
}}>Mon</li>
	<li style={{paddingLeft: 15
}}>Tue</li>
	<li style={{paddingLeft: 10
}}>Wed</li>
	<li style={{paddingLeft: 15
}}>Thu</li>
	<li style={{paddingLeft: 13
}}>Fri</li>
	<li style={{paddingLeft: 10
}}>Sat</li>
	<li style={{paddingLeft: 13
}}>Sun</li>
	
</ul>
</div>
</div>
<div class="styled-table-outer"style={{marginLeft: 20
}}>
  <div class="tableheading" >
<p  class ="headbar"colspan="4" >Webkata<span class="week">Weekly</span><span class="once">Daily</span><span class="codekata"><img src="codekata.png"></img></span></p>

  </div>
   <p class="centre">Week Stats</p>
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
	<li style={{paddingLeft: 41
}}>Mon</li>
	<li style={{paddingLeft: 15
}}>Tue</li>
	<li style={{paddingLeft: 10
}}>Wed</li>
	<li style={{paddingLeft: 15
}}>Thu</li>
	<li style={{paddingLeft: 13
}}>Fri</li>
	<li style={{paddingLeft: 10
}}>Sat</li>
	<li style={{paddingLeft: 13
}}>Sun</li>
	
</ul>
</div>
</div>
<div class="styled-table-outer"style={{marginLeft: 20
}}>
  <div class="tableheading" >
<p  class ="headbar"colspan="4" >Micro Arc<span class="week">1st Week</span><span class="once">Daily</span><span class="codekata"><img src="codekata.png"></img></span></p>

  </div>
   <p class="centre">3rd Week</p>
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
	<li style={{paddingLeft: 41
}}>Mon</li>
	<li style={{paddingLeft: 15
}}>Tue</li>
	<li style={{paddingLeft: 10
}}>Wed</li>
	<li style={{paddingLeft: 15
}}>Thu</li>
	<li style={{paddingLeft: 13
}}>Fri</li>
	<li style={{paddingLeft: 10
}}>Sat</li>
	<li style={{paddingLeft: 13
}}>Sun</li>
	
</ul>
</div>
</div>



</div>
    )
}
}
export default Dashboard;