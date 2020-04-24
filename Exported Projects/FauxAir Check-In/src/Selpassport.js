import React, { Component } from 'react';
import './App.css';
import img_elPassport from './images/Selpassport_elPassport_427129.png';

export default class Selpassport extends Component {

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
      <div className="Selpassport">
        <div className="foreground">
          <div className="elPassport" style={style_elPassport} />
          <div className="actionFont elTextBlock" style={style_elTextBlock}>
            <div>{this.props.locStrings.comp1_textblock_1001875}</div>
          </div>
        </div>
      </div>
    )
  }
  
}
