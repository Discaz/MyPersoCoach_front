import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './Problem.css';



class ModalGoal extends Component { 
 
 
 
handleClick = () => {
    if (this.props.id == 1) {
    this.props.history.push("/symptome3");}
    else { this.props.history.push("/o-objectif1")}
    }


render() {

    const showHideClassname = this.props.show ? "modal-display-block" : "modal-display-none";
    console.log(showHideClassname)
    console.log('props log :' + this.props.src)

    return(
    
    
    
    <div className={showHideClassname} >
        
        <div className="modal_Cards" >

                <div className="Problem_modal">

                    <img className="icon_problem"  alt="icon_problem" src={this.props.src}/>
                    <p className="modalText">{this.props.text2}</p>
                    <button type="button" onClick={this.handleClick} name ="C'est parti !">C'est parti !</button>

                </div>

        </div>

    </div>
   
    )
//= ({src, show, handleClose, text2}) => {
}

}


export default withRouter(ModalGoal);