import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Checkbox from 'muicss/lib/react/checkbox';

export default class DangerousGoodsCard extends Component {

  // Properties used by this component:
  // ds_userAcceptedContract

  constructor(props) {
    super(props);
    
    this.state = {
      checkbox: this.props.ds_userAcceptedContract,
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

  checkboxChanged_checkbox = (event) => {
    this.setState({checkbox: (event.target.checked ? 'true' : 'false')});
    this.props.appActions.updateDataSlot("ds_userAcceptedContract", (event.target.checked ? 'true' : 'false'));
  }
  
  render() {
    const style_elText = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_elTextCopy = {
      fontSize: 14.6,
      color: 'rgba(0, 0, 0, 0.5000)',
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    let checked_checkbox = this.state.checkbox;
    
    const style_elCheckbox = {
      pointerEvents: 'auto',
     };
    
    return (
      <div className="DangerousGoodsCard cardBg">
        <div className="layoutFlow">
          <div className="elText">
            <div className="baseFont" style={style_elText}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.dangerousgoodscard_text_985228.replace(/\n/g, '<br>')}}></div></div>
            </div>
          </div>
          
          <div className="elTextCopy">
            <div className="systemFontRegular" style={style_elTextCopy}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.dangerousgoodscard_textcopy_625669.replace(/\n/g, '<br>')}}></div></div>
            </div>
          </div>
          
          <div className="elCheckbox">
            <Checkbox className="baseFont" style={style_elCheckbox}  label={this.props.locStrings.dangerousgoodscard_checkbox_324660} onChange={this.checkboxChanged_checkbox} checked={checked_checkbox === 'true' || checked_checkbox === true || ''+checked_checkbox === '1'}  />
          </div>
        </div>
        
      </div>
    )
  }
  
}
