import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['key'] = "screen2_button_394080";
    item['en'] = "Check in now";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen3_button_585352";
    item['en'] = "Continue";
    
    item = {};
    this.items.push(item);
    item['key'] = "fauxairbanner_button_552895";
    item['en'] = "Cancel check-in";
    
    item = {};
    this.items.push(item);
    item['key'] = "dangerousgoodscard_text_985228";
    item['en'] = "Welcome to FauxAir!\nBefore checking in, please read these terms carefully and select “I accept”.";
    
    item = {};
    this.items.push(item);
    item['key'] = "dangerousgoodscard_checkbox_324660";
    item['en'] = "I accept these terms and conditions";
    
    item = {};
    this.items.push(item);
    item['key'] = "dangerousgoodscard_textcopy_625669";
    item['en'] = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur arcu ornare lorem mattis suscipit. Aliquam gravida aliquam vulputate. Phasellus vulputate, risus at interdum cursus, augue orci aliquet est, at mollis lacus nulla at arcu. Mauris lorem tellus, tincidunt in sapien viverra, semper porta metus. Duis ac risus sed magna malesuada mollis.\n\nVestibulum quam sapien, sagittis id faucibus ut, accumsan eu odio. Donec metus est, volutpat sed tempus vitae, ullamcorper et mi. Sed a enim tellus. Donec aliquet lacus maximus dui imperdiet facilisis. Donec ipsum mi, gravida vel nibh ullamcorper, ullamcorper viverra diam. Donec fermentum eros id feugiat placerat.\n\nAenean malesuada eros eget ornare euismod. Nulla facilisi. Mauris non ligula ante. Duis varius vulputate risus vel facilisis. In tellus lectus, facilisis nec varius non, dignissim vitae enim. Curabitur ultrices vitae libero non sodales. In hac habitasse platea dictumst. Nam eget risus vel quam pellentesque sollicitudin non dictum arcu.";
    
    item = {};
    this.items.push(item);
    item['key'] = "selectreservation_textblock_390860";
    item['en'] = "Passport";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp1_textblock_1001875";
    item['en'] = "Passport";
    
    item = {};
    this.items.push(item);
    item['key'] = "passport2_textblock_147922";
    item['en'] = "Reservation code";
    
    item = {};
    this.items.push(item);
    item['key'] = "passport3_textblock_147068";
    item['en'] = "QR Code";
    
    item = {};
    this.items.push(item);
    item['key'] = "selectreservation_text_309546";
    item['en'] = "Please select how you’d like to check in:";
    
    item = {};
    this.items.push(item);
    item['key'] = "selectreservation2_text_292247";
    item['en'] = "Please select how you’d like to check in:";
    
    item = {};
    this.items.push(item);
    item['key'] = "selectresdone_textblock_1022453";
    item['en'] = "This demo ends here.\n\nThanks for attempting to fly with FauxAir!";
    
    item = {};
    this.items.push(item);
    item['key'] = "selectresdone_button_765532";
    item['en'] = "Back to start";
    
    item = {};
    this.items.push(item);
    item['key'] = "welcome_text_825962";
    item['en'] = "Note: this demo app is for an airport check-in console, so it’s not intended to be viewed on phones.";
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}
