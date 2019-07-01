import React from "react";
import './Problem.css';
import Modal from "./Modal";
import axios from "axios"
import { async } from "q";


class DisplayModal extends React.Component {

state = {
    text_prob: [],
    question: []
   
}



getText = async () => {
  const res= await axios.get('http://localhost:3001/main_theme')
  this.setState({ text_prob : res.data })
        
   
}

getQuestion = async () => {
  const res= await axios.get('http://localhost:3001/text_static/105')
  this.setState({ question : res.data[0] })
 

}


componentDidMount(){
  this.getQuestion()
  this.getText()

}

  render() { 

const{text_prob, question}=this.state
    
return (
    
  <div>
    <div className="displayModalText">
      <p>{question.all_text}</p>
    </div>
    
      <div className="display-modal" >
      {text_prob.map(content => <Modal id= {content.id} text1={content.all_text1} text2={content.all_text2} icon={content.picture_src}/>)}
      </div>
  </div>
   
)

  }
}

export default DisplayModal;