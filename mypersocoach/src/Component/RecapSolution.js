import React from 'react'
import axios from "axios";
import { withRouter } from "react-router-dom";
import "./RecapSolution.css"

class RecapSolution extends React.Component {

    
    
    state = {

        addActions : this.props.addActions,
        response :'',
        isReply: false,
        summaryId: '',
        iconValidate :"",
        iconValidate2 :'',
        selectedButton: null
        
    }



    getIconValidate = async () => {
        const res = await axios.get('http://localhost:3001/icon/40')
        this.setState({ iconValidate : res.data[0] })
    }




    getIconValidate2 = async () => {
        const res = await axios.get('http://localhost:3001/icon/39')
        this.setState({ iconValidate2 : res.data[0] })
    }

   
   
    handleClick = async (action, index) =>{
    
    
            
        this.setState({ selectedButton : index })
        

        this.setState({response: action}); 
        
        await this.setState({response: action});
        
        this.setState({
            summaryId: this.props.summaryId, 
            isReply: !this.state.isReply
        })

       
        
        
        
       
       
     
        axios.post('http://localhost:3001/action', {

            
            text_response: this.state.response,
            summary_id: this.state.summaryId

        })
    
        .then((res => {
            const respActionId = res.data.respActionId
            localStorage.setItem('idResponse', respActionId)
            
            
            this.props.history.push({
                pathname: "/solution4", 
                state: {

                    summaryId: this.state.summaryId

                    }
            });
          }
        ))   
    }
       
    
    componentDidMount () {
        this.getIconValidate()
        this.getIconValidate2()
    }
       
    




    render(){
        
        
        const {iconValidate, iconValidate2} = this.state
        
        
        
        return (
            <div>

                {this.state.addActions.map((addAction , index )=> {
                    
                        if(addAction.length >= 1 ){
                            return(
                                
                                <div className="formActionBlock">

                                    <p className="formActionInput">
                                    {addAction}
                                 
                                    </p>

                                    <img className="formActionIcon" src = {this.state.selectedButton === index ? iconValidate2.picture_src : iconValidate.picture_src}
                                        alt ="" onClick={()=> this.handleClick(addAction, index)} />
                                    

                                </div>
                            ) 
                        }
                      
                        else{
                            
                            return null
                        }
                        
                    }

                    
                )}

            </div>
        )
    }
       
    
}




export default withRouter(RecapSolution);