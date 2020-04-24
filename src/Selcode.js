import React, { Component } from 'react';
import './App.css';
import img_elPassport from './images/Selcode_elPassport_627729.png';

export default class Selcode extends Component {

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

  render() {
    const style_elPassport = {
      backgroundImage: 'url('+img_elPassport+')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: 'cover',
     };
    const style_elTextBlock = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    
    return (
      <div className="Selcode">
        <div className="foreground">
          <div className="elPassport" style={style_elPassport} />
          <div className="actionFont elTextBlock" style={style_elTextBlock}>
            <div>{this.props.locStrings.passport2_textblock_147922}</div>
          </div>
        </div>
      </div>
    )
  }
  
}
