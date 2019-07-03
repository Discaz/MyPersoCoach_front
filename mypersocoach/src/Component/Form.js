import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

// import Answer from './Answer';
// import Validate from './Validate';
// import BackButton from './BackButton';


import './Form.css';

class Form extends React.Component {

    state = {
        response: [],
        text_static2: [],
        text_static3: [],
        text_static4: [],
        textarea: '',
        lastId: this.props.lasId
    }

   
      

    handleChangeTextarea = (e) => {

        this.setState({ [e.target.name]: e.target.value })

    }


    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });

    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { textarea } = this.state;
        
        this.props.history.push({
            pathname: "/symptome2", 
            state: {lastId: this.props.lastId}
            });
        axios.post('http://localhost:3001/response', {

            textarea: textarea,
            response_summary: this.state.textarea,
            summary_id: this.props.lastId,
            problem_id: this.props.problemId,
            problem_origin_id: 1

        })
            .then((res => console.log("response axios: ", res)))
            console.log('youhou problemId', this.props.problemId)

    }



    getTextarea = async () => {
        //Vérifier ce qu'il faut mettre en ciblage
        const res = await axios.get("http://localhost:3001/response")
        this.setState({ response: res.data[0] });
    }

    getPlaceholder = async () => {
        const res = await axios.get("http://localhost:3001/text_static/140")
        this.setState({ text_static2: res.data[0] });
    };

    getValidate = async () => {
        const res = await axios.get("http://localhost:3001/text_static/116")
        this.setState({ text_static3: res.data[0] });
    };

    getBack = async () => {
        const res = await axios.get("http://localhost:3001/text_static/117")
        this.setState({ text_static4: res.data[0] });
    };

    componentDidMount() {
        this.getTextarea();
        this.getPlaceholder();
        this.getValidate();
        this.getBack();
    }
    componentDidUpdate(prevProps, prevState){
        console.log('prevProsp :' ,prevProps);
        console.log('prevState : ', prevState);
        
        
    }

    render() {

        const { response, text_static2, text_static3, text_static4 } = this.state

        console.log('state de form :', this.state.textarea, this.state.lasId)

        return (
            <div>
                <form id="form" method="post" action="#" onSubmit={this.handleSubmit}>
                    {/* <Answer response={response} text_static2={text_static2}/> */}
                    {/* <Validate text_static3={text_static3.all_text}/> */}
                    {/* <BackButton text_static4={text_static4.all_text}/> */}

                    <textarea id="textarea" name="textarea" type='text' value={this.state.textarea} maxlength="300" placeholder={text_static2.all_text} onChange={this.handleChangeTextarea}>
                        {response}
                    </textarea>

                    <button id="valid" href="#" className="button_validate" type="submit" name="valid" >{text_static3.all_text}</button >

                    <button href="#" className="button_back" type="reset" name="return">{text_static4.all_text}</button>

                </form>
            </div>
        )
    }
}

export default withRouter(Form);