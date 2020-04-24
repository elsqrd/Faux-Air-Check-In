import React, { Component } from 'react';
import './App.css';
import img_elFauxairLargeLogo from './images/WelcomeScreen_elFauxairLargeLogo.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';

export default class WelcomeScreen extends Component {

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
    // Go to screen 'Conditions'
    this.props.appActions.goToScreen('conditions', { transitionId: 'fadeIn' });

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
      backgroundColor: '#f6f6f6',
     };
    const style_elText = {
      fontSize: 12.8,
      color: 'rgba(0, 0, 0, 0.5000)',
      textAlign: 'center',
     };

    const style_elFauxairLargeLogo = {
      backgroundImage: 'url('+img_elFauxairLargeLogo+')',
      backgroundSize: '100% 100%',
     };

    const style_elButton = {
      display: 'block',
      color: 'white',
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };

    return (
      <div className="AppScreen WelcomeScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>

          <div className="elFauxairLargeLogo">
            <div style={style_elFauxairLargeLogo} />
          </div>

          <div className="elButton">
            <Button className="actionFont" style={style_elButton}  variant="raised" color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.screen2_button_394080}
            </Button>
          </div>
        </div>

      </div>
    )
  }

}
