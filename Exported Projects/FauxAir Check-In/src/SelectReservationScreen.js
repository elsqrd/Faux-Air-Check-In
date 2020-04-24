import React, { Component } from 'react';
import './App.css';
import FauxAirBanner from './FauxAirBanner';
import Selpassport from './Selpassport';
import Selcode from './Selcode';
import Selqrcode from './Selqrcode';

export default class SelectReservationScreen extends Component {

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

  onClick_elComp2 = (ev) => {
    // Go to screen 'Select Res Done'
    this.props.appActions.goToScreen('selectresdone', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elCompCopy = (ev) => {
    // Go to screen 'Select Res Done'
    this.props.appActions.goToScreen('selectresdone', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elCompCopy2 = (ev) => {
    // Go to screen 'Select Res Done'
    this.props.appActions.goToScreen('selectresdone', { transitionId: 'fadeIn' });
  
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
    const style_elComp2 = {
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_elCompCopy = {
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_elCompCopy2 = {
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_elText = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
      pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen SelectReservationScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <div className="hasNestedComps elComp">
              <FauxAirBanner {...this.props} ref={(el)=> this._elComp = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className="hasNestedComps elComp2" style={style_elComp2} onClick={this.onClick_elComp2} >
              <Selpassport {...this.props} ref={(el)=> this._elComp2 = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className="hasNestedComps elCompCopy" style={style_elCompCopy} onClick={this.onClick_elCompCopy} >
              <Selcode {...this.props} ref={(el)=> this._elCompCopy = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className="hasNestedComps elCompCopy2" style={style_elCompCopy2} onClick={this.onClick_elCompCopy2} >
              <Selqrcode {...this.props} ref={(el)=> this._elCompCopy2 = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className="baseFont elText" style={style_elText}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.selectreservation_text_309546}}></div></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
}
