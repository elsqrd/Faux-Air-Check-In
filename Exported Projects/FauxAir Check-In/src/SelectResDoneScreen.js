import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Button from 'muicss/lib/react/button';

export default class SelectResDoneScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  componentWillReceiveProps(nextProps) {
  }

  onClick_elButton = (ev) => {
    // Go to screen 'Welcome'
    this.props.appActions.goToScreen('welcome', { transitionId: 'fadeIn' });
  
  }
  
  
  render() {
    let layoutFlowStyle = {};
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elBackground = {
      width: '100%',
      height: '100%',
     };
    const style_elBackground_outer = {
      backgroundColor: 'rgba(40, 40, 40, 0.7875)',
     };
    const style_elTextBlock = {
      fontSize: 15.0,
      color: 'white',
      textAlign: 'center',
      textShadow: 'rgba(0, 0, 0, 0.3000) 0.0px 2.0px 4.5px',
     };
    
    const style_elButton = {
      display: 'block',
      color: 'white',
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen SelectResDoneScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div style={style_elBackground} />
          </div>
        </div>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <div className="systemFontBold  elTextBlock" style={style_elTextBlock}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.selectresdone_textblock_1022453.replace(/\n/g, '<br>')}}></div></div>
            </div>
            <Button className="actionFont elButton" style={style_elButton}  color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.selectresdone_button_765532}
            </Button>
          </div>
        </div>
      </div>
    )
  }
  
}
