var Knob = React.createClass({
  getInitialState: function(){
    return{season: 1, stateY: 0};
  },
  
  dragStart: function(data){
  this.lastClientY = data.clientY;
  document.addEventListener("mousemove", this.drag);
  document.addEventListener("mouseup", this.dragStop);
  },

dragStop: function(){
  document.removeEventListener("mousemove", this.drag);
  document.removeEventListener("mouseup", this.dragStop);
},

drag: function(data){
   var i = 0;
  var delta = data.clientY - this.lastClientY;
  /*
  console.log("last client Y: " + this.lastClientY);
  console.log("Current client Y: " + data.clientY);
  console.log("delta is: " + delta);
  */
  if(data.clientY > this.state.stateY){
    i--; 
    console.log(i);
    this.setState({season: this.state.season -1});
    React.findDOMNode(this.refs.season).className = "subject-" + this.state.season;
    console.log("subject-" + this.state.season);
    this.setState({stateY: data.clientY});
    
  }
  else{
              i++; 
    console.log(i);
    this.setState({season: this.state.season +1});
    React.findDOMNode(this.refs.season).className = "subject-" + this.state.season;
    console.log("subject-" + this.state.season);
    this.setState({stateY: data.clientY});
  }
},
  render: function(){
    return(
    <div>
           <div className = "subject-1" ref = "season" onTouchStart= {this.dragStart} onMouseDown = {this.dragStart}>
           </div>
    </div>
    );//Ed
  } //end render function
}); //end knob class

React.render(<Knob />, mountNode);