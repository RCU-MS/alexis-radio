//JSX styling for the tuner button
var divStyle1 = {position: 'absolute',marginTop: '-26%', marginLeft: '37%'};

//JSX styling for the tuner element 
var divStyle2 = {marginLeft: '11.5%', marginTop: '-21.5%', position: 'absolute'};

//Knob class created
var Knob = React.createClass({
  getInitialState: function(){
    //constructor variable used for detecting if the delta has been changed enough to then start the scroll wheel
    this.i = 0;
    //Constructor variable usfed to do compairson to start the scroll wheel
    this.j = 10;
    return{subject: 1, stateY: 0}; //States set for the subject, and Y client
  },
  
  //Gets the initial click on drag and adds the event listeners onto the document
  dragStart: function(data){
  //constructor variable which binds tfhe value from the client-Yaxis.
  this.lastClientY = data.clientY;
  document.addEventListener("mousemove", this.drag);
  document.addEventListener("mouseup", this.dragStop);
  },
  
  //Removes the event listener ffrokm the document
  dragStop: function(){
    document.removeEventListener("mousemove", this.drag);
    document.removeEventListener("mouseup", this.dragStop);
  },
   
   //The calculation and manipbulation for direction of knob turn
  drag: function(data){
    //calculates the change in direction
    var delta = data.clientY - this.lastClientY;
    console.log("clientY: " + data.clientY + " state  of Y: " + this.state.stateY + " last client: " + this.lastClientY + " delta: " + delta);
    
    //If the cursor went south, then then knob will be lowered (Going Down) (1st it will decrease the this.i and then do a coditional check against this.j, if true, then it will allow the knob to turn)
    if((data.clientY > this.state.stateY) && (this.state.subject >=1))
    { 
      this.i--;
      if(this.i < this.j)
      {
        this.j -= 10;
        //Updates the state of the subject variable in react
        this.setState({subject: this.state.subject -1});
        //Changes the DOM node property of class (className) using the reach findDOMNode property, with the ref of subject
        React.findDOMNode(this.refs.subject).className = "subject-" + this.state.subject;
        React.findDOMNode(this.refs.tuner).className = "tuner-" + this.state.subject;
        //Updates the state of the stateY variable in react
        this.setState({stateY: data.clientY});  
      }
    }
    
    //if the knob went north, then the knob will be raised (going Up) (1st it will increase the this.i and then do a coditional check against this.j, if true, then it will allow the knob to turn)
    else if((delta < this.state.stateY) && (this.state.subject < 14))
    { 
      this.i++;
      if(this.i > this.j)
      {
        this.j +=10;
        //Updates the state of the subject variable in react
        this.setState({subject: this.state.subject +1});
        //Changes the DOM node property of class (className) using the reach findDOMNode property, with the ref of subject
        React.findDOMNode(this.refs.subject).className = "subject-" + this.state.subject;
        React.findDOMNode(this.refs.tuner).className = "tuner-" + this.state.subject;
        //Updates the state of the stateY variable in react
        this.setState({stateY: data.clientY});
      }
    }
    
  },
  
  
  
  render: function(){
    return(
    <div>
           <div style = {divStyle1}className = "subject-1" ref = "subject" onTouchStart= {this.dragStart} onMouseDown = {this.dragStart}> </div>
           <div style = {divStyle2} className = "tuner-1" ref = "tuner" ></div>
    </div>
    );//End render function return
  } //end render function
}); //end knob class

React.render(<Knob />, mountNode);