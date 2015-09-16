var Knob = React.createClass({
  getInitialState: function(){
    return{position: 0, wheel: 0};
  },

  render: function(){
    return(
           <div>
             <img src = "../style/img/wood-bg.png"/>
           </div>
    );//Ed
  } //end render function
}); //end knob class

React.render(<Knob />, mountNode);