import React, { Component } from 'react';
import './App.css';
import img_elFauxairOutlineLogo from './images/FauxAirBanner_elFauxairOutlineLogo.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';

export default class FauxAirBanner extends Component {

  // This component doesn't use any properties

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
    let newVal = "false";
    this.props.appActions.updateDataSlot('ds_userAcceptedContract', newVal);
  
    // Go to screen 'Welcome'
    this.props.appActions.goToScreen('welcome', { transitionId: 'fadeIn' });
  
  }
  
  
  render() {
    
    const style_elFauxairOutlineLogo = {
      backgroundImage: 'url('+img_elFauxairOutlineLogo+')',
      backgroundSize: '100% 100%',
     };
    
    const style_elButton = {
      display: 'block',
      color: 'rgba(82, 114, 221, 0.8874)',
      textAlign: 'center',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    return (
      <div className="FauxAirBanner">
        <div className="foreground">
          <div className="elFauxairOutlineLogo" style={style_elFauxairOutlineLogo} />
          <Button className="actionFont elButton" style={style_elButton}  variant="flat" onClick={this.onClick_elButton} >
            {this.props.locStrings.fauxairbanner_button_552895}
          </Button>
        </div>
      </div>
    )
  }
  
}
