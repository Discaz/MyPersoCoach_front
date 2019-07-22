/* Imports Components and promesses (axios) */

import React, {Component} from 'react';
import IconMain from '../Component/IconMain';
import HeadingText from '../Component/HeadingText';
import DisplayModal from '../Component/DisplayModal';
import axios from 'axios';
import '../Component/Problem.css';

/* States */
class Start extends Component {
  state = {
    icon: [],
    headingText1: [],
  };

  /* Functions Axios */
  getHeadingText1 = async () => {
    const res = await axios.get('http://localhost:3001/text_static/1');
    this.setState({headingText1: res.data[0]});
  };

  getHeader = async () => {
    const res = await axios.get('http://localhost:3001/icon/27');
    this.setState({icon: res.data[0]});
  };

  /* "async" returns the promise of the functions */
  /* The "await" allows to wait for a response of the back-end which is the icon and the text before returning this result to the component didMount */
  /* "axios.get" allows to obtain the data of the back-end */
  /* The "setState" allows to take the data of the state which will be replaced by the data of the back-end */
  /* res.data [0] allows to recover the data (data) of back-end which will be inserted in a array in index 0 */

  /* ComponentdidMount re-renders the component "Start" to display the result of the axios by calling the functions ("getHeadingText1" and "getHeader") */

  componentDidMount() {
    this.getHeadingText1();
    this.getHeader();
  }

  /* Render of component "Start" for display */

  render() {
    return (
  /* Tag "Div" which allows to include all the rendering "jsx" with its CSS class */
      <div className="startContainer">
        <IconMain img src={this.state.icon.picture_src} alt={this.state.icon.description_alt}/> 
{/* The "Icon Main" component is called to use its "icon" property which is equal to "img = src". And so the icon property is equal to {this.state. icon .picture.src}. The picture.src is the name of the data recovery of the back-end visible from the url link of the axios "http: // localhost: 3001 / icon / 27" */}
        <HeadingText text_static={this.state.headingText1.all_text} />
{/* Same logic for "HeadingText" as for "IconMain" */}
        <DisplayModal />
{/* The modal is called by the component "DisplayModal"*/}
      </div>
    );
  }
}

export default Start;


