var Knob = React.createClass({
  getInitialState: function(){
    return{season: 'winter'};
  },
   
   
  render: function(){
    return(
           <div>
             <img src = "../style/img/wood-bg.png"/>
             <img src ={ '../style/img/Seasons/sprites_cut/'+this.state.season+'.png'} ref = "season"/>
           </div>
    );//Ed
  } //end render function
}); //end knob class

React.render(<Knob />, mountNode);