import React from "react";
import axios from "axios";

import "./Saut1.css";

import IconMain from "../Component/IconMain";
import HeadingText from "../Component/HeadingText";

import ResponseSymptome2 from "../Component/ResponseSymptome2"
import ForwardStep from "../Component/ForwardStep";
import BackSubmit from "../Component/BackSubmit";
import OriginResponse from "../Component/OriginResponses";
import ResponseAction from "../Component/ResponseAction";
import ResponseTime from "../Component/ResponseTime";


class Saut1 extends React.Component {
  state = {

    icon: [],
    text_static: [],
    text_static2: [],
    text_static3: [],
    text_static4: [],
    text_static5:[],
    text_static6: [],
    response: [],
    // response1: []
    responseEnvironnement: [],
    responseCroyance: [],
    responseCapacite: [],
    responseComportement: [],
    respAction: [],
    date: []
  };

  getHeader = async () => {

    const res = await axios.get("http://localhost:3001/icon/3")
    this.setState({ icon: res.data[0] });

  };

  getTextStatic = async () => {
    const res = await axios.get("http://localhost:3001/text_static/15")
    this.setState({ text_static: res.data[0] });

  };
  getTextStatic2 = async () => {
    const res = await axios.get("http://localhost:3001/text_static/29")
    this.setState({ text_static2: res.data[0] });
  };
  getTextStatic3 = async () => {
    const res = await axios.get("http://localhost:3001/text_static/38")
    this.setState({ text_static3: res.data[0] });
  };
  getTextStatic4 = async () => {
    const res = await axios.get("http://localhost:3001/text_static/39")
    this.setState({ text_static4: res.data[0] });
  };

  // "Je ne valide" pas Button
  getTextStatic5 = async () => {
    const res = await axios.get("http://localhost:3001/text_static/129")
    this.setState({ text_static5: res.data[0] });
  };

   // "Je valide"  Button
   getTextStatic6 = async () => {
    const res = await axios.get("http://localhost:3001/text_static/127")
    this.setState({ text_static6: res.data[0] });
  };

// recupération de la réponse ; to problème actuel est : 
getResponseProb = async () => {
      
      
  const id = this.props.location.state.summaryId;
 
  
  const res= await axios.get(`http://localhost:3001/response/${id}`)
      
  
  this.setState({ 
    response: res.data[0].response_summary});
  
  this.setState({responseId: res.data[0].id});
};

// recupération des réponses à problem origin

// getResponseProbOrigin = async () => {
      
      
//   const id = this.props.location.state.summaryId;
 
  
//   const res= await axios.get(`http://localhost:3001/response/${id}`)
      
  
//   this.setState({ 
//     response1: res.data.slice(1).map(x => x.response_summary)});
//   console.log('lensemble des reponse problem origin', res.data.slice(1).map(x => x.response_summary))
 
 
  



//   // console.log('lensemble des reponse problem origin', res.data[3].response_summary)
//   // console.log('lensemble des reponse problem origin', res.data[4].response_summary)
//   // this.setState({responseId: res.data[0].id});
// };

getResponseCroyance = async () => {
      
      
     
  const idresp = localStorage.getItem('idRespCroyance')
 
  if (idresp === null) {
    return console.log('false')
  }
  else {
  const res= await axios.get(`http://localhost:3001/response/resp/${idresp}`)
      

  this.setState({ responseCroyance: res.data[0].response_summary})
  
}
    

}; 

getResponseCapacite = async () => {
 
  
  const idresp = localStorage.getItem('idRespCapacite')

  if (idresp === null) {
    return console.log('false')
  }
  
  else {
  
  const res= await axios.get(`http://localhost:3001/response/resp/${idresp}`)
      

  this.setState({ responseCapacite: res.data[0].response_summary})
  
}
    
  
}; 


getResponseComportement = async () => {
  
  const idresp= localStorage.getItem('idRespComportement')
 
  if (idresp === null) {
    return console.log('false')
  }
  else {
 
  const res= await axios.get(`http://localhost:3001/response/resp/${idresp}`)
      
 
  this.setState({ responseComportement: res.data[0].response_summary})


}
   
}; 


getResponseEnvironnement = async () => {
  

  const idresp= localStorage.getItem('idRespEnvironnement')
  
 if (idresp === null) {
   return console.log('false')
 }
 else {
  
  const res= await axios.get(`http://localhost:3001/response/resp/${idresp}`)
     
  this.setState({ responseEnvironnement: res.data[0].response_summary})
  
}
  
    
  
}; 

getActionResp = async () => {
      
      
  const id = this.props.location.state.summaryId;
 
  
  const res= await axios.get(`http://localhost:3001/action/recap/${id}`)
      
  
  this.setState({ 
    respAction: res.data[0].text_response, date: res.data[0].date_echeance});
  
  // this.setState({responseId: res.data[0].id});
};



  componentDidMount() {
    this.getHeader();
    this.getTextStatic();
    this.getTextStatic2();
    this.getTextStatic3();
    this.getTextStatic4();
    this.getTextStatic5();
    this.getTextStatic6();
    this.getResponseProb();
    // this.getResponseProbOrigin();
    this.getResponseCroyance();
    this.getResponseEnvironnement();
    this.getResponseComportement();
    this.getResponseCapacite();
    this.getActionResp()


  }

  render() {
    // console.log("voila ma state", this.state)
    
    const { icon, text_static, response, responseEnvironnement,
      responseCroyance,
      responseCapacite,
      responseComportement, text_static2, text_static3, text_static4, text_static5, text_static6, respAction, date} = this.state
// console.log('mon tableau response-origin', response1)
    return (
      <div className="containerS2">
        <div className="containerSymptome2">
          <IconMain icon={icon.picture_src} />
          <HeadingText text_static={text_static.all_text} />
          <div className="ResponseContainerSaut1">
            <ResponseSymptome2 response={response} />
          </div>
          <HeadingText text_static={text_static2.all_text} />
          
          {/* origin response panel */}
          
          <div className="OriginResponseSaut1">
            <OriginResponse
               responseEnvironnement={responseEnvironnement} responseCroyance={responseCroyance}  responseCapacite={responseCapacite} responseComportement={responseComportement}
            />
          </div>
          
          
          
          <HeadingText text_static={text_static3.all_text} />
          <div className="ActionResponse">
            <ResponseAction respAction={respAction}/>
          </div>
          <HeadingText text_static={text_static4.all_text} />
          <div>
            <ResponseTime date={date}/>
          </div>
          <ForwardStep redirectionPage={'profil'} summaryId={this.props.location.state.summaryId}  text_static6={text_static6.all_text} />
          <BackSubmit summaryId={this.props.location.state.summaryId} backSubmit={"backSubmit"} text_static5={text_static5.all_text}/>
        </div>
      </div>
    );
  }
}
export default Saut1;