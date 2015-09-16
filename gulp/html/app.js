var Knob = React.createClass({
  getInitialState: function(){
    return{season: 'fall'};
  },
  
  click: function(data){
     x = data.clientX;
     y = data.clientY;
     if ((x > 1025 && x > 1088) && (y > 497 && y < 560)){
       console.log("fall");
     }
     else{
     console.log("No");
     }
     this.setState({season: 'spring'});
     React.findDOMNode(this.refs.season).src = "../style/img/Seasons/sprites_cut/" + this.state.season + ".png";
  },
  
  render: function(){
    return(
           <div>
             <img src = "../style/img/wood-bg.png"/>
             <img src = "../style/img/Seasons/sprites_cut/fall.png" ref = "season" onClick = {this.click}/>
           </div>
    );//Ed
  } //end render function
}); //end knob class

React.render(<Knob />, mountNode);