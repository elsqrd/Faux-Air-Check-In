import React, { Component } from 'react';
import './App.css';
import DangerousGoodsCard from './DangerousGoodsCard';
import FauxAirBanner from './FauxAirBanner';

// UI framework component imports
import Button from 'muicss/lib/react/button';

export default class ConditionsScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, ds_userAcceptedContract

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

  onClick_elButtonContinue = (ev) => {
    // Go to screen 'Select Reservation'
    this.props.appActions.goToScreen('selectreservation', { transitionId: 'fadeIn' });
  
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
    const style_elDangerousGoodsCard_outer = {
      boxShadow: '0.0px 2.0px 3px rgba(0, 0, 0, 0.3000)',
     };
    let transformPropValue_buttonContinue = (input) => {
      // This function modifies the value for property 'enabled'.
      // There is a variable named 'input' that provides the property value.
      return input === 'true';
    }
    
    const enabledValue_buttonContinue = transformPropValue_buttonContinue(this.props.ds_userAcceptedContract);
    
    const style_elButtonContinue = {
      display: 'block',
      color: 'white',
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen ConditionsScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="hasNestedComps elDangerousGoodsCard" style={style_elDangerousGoodsCard_outer}>
            <div>
              <DangerousGoodsCard ds_userAcceptedContract={this.props.ds_userAcceptedContract || "false"} {...this.props} ref={(el)=> this._elDangerousGoodsCard = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
          
          <div className="elButtonContinue">
            <Button className="actionFont" style={style_elButtonContinue}  color="accent" disabled={''+enabledValue_buttonContinue !== 'true'} onClick={this.onClick_elButtonContinue} >
              {this.props.locStrings.screen3_button_585352}
            </Button>
          </div>
        </div>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <div className="hasNestedComps elComp">
              <FauxAirBanner {...this.props} ref={(el)=> this._elComp = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
}
