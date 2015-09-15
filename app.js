var Knob = React.createClass({
  getInitialState: function(){
    return{position: 0, wheel: 0};

  },

  componentTurn: function(e){
      
      var scroll = e.deltaY;
      var audio = document.getElementById('audio');
      switch(scroll){
         case -3:
            if(this.state.position < 31)
            {
              this.setState({position: this.state.position + 1});
              React.findDOMNode(this.refs.image).src = 'img/knobs/ShinyBlackKnob01%20[www.imagesplitter.net]-0-'+this.state.position+'.png';
              React.findDOMNode(this.refs.picker).value = this.state.position;
              switch(this.state.position)
              {
               case 5:
                 audio.src = "sounds/kickstarter.mp3";  
                 break;
               case 10:
                 audio.src = "sounds/sound2.mp3";  
                 break;

                case 15:
                 audio.src = "sounds/sound3.mp3";  
                 break;

                case 20:
                 audio.src = "sounds/sound4.mp3";  
                 break;

                default:
                  audio.src = "sounds/radio.mp3";  
                  break;
                }

            };
            break;
          

         case 3:
            if(this.state.position > 0)
            {
            this.setState({position: this.state.position - 1});
             React.findDOMNode(this.refs.image).src = 'img/knobs/ShinyBlackKnob01%20[www.imagesplitter.net]-0-'+this.state.position+'.png';
             React.findDOMNode(this.refs.picker).value = this.state.position;
              switch(this.state.position)
              {
               case 5:
                 audio.src = "sounds/kickstarter.mp3";  
                 break;
               case 10:
                 audio.src = "sounds/sound2.mp3";  
                 break;

                case 15:
                 audio.src = "sounds/sound3.mp3";  
                 break;

                case 20:
                 audio.src = "sounds/sound4.mp3";  
                 break;

                default:
                  audio.src = "sounds/radio.mp3";  
                  break;
                }
            };
            break;
      }

          
        

  },

  render: function(){
    return(
            <div>
              <br/>
              <img width = "10%" height = "10%" ref = "image" src = {'img/knobs/ShinyBlackKnob01%20[www.imagesplitter.net]-0-'+this.state.position+'.png'} onWheel = {this.componentTurn}/>
              <button> {"Position: " + this.state.position} </button>
              <button> {"Delta: " + this.state.wheel} </button>
              <input type="range" name="points" min="0" max="32" step = "1" ref = "picker" value ={this.state.position} width = "100" height = "100"/>
            </div>

    );//E
  } //end render function
}); //end knob class

React.render(<Knob />, mountNode);