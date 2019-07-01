import React from 'react';
import axios from "axios";

import './GeneralContainer.css';

import IconMain from '../Component/IconMain';
import HeadingText from '../Component/HeadingText';
import TitlePageSympto from '../Component/TiltePageSympto';
import Answer from '../Component/Answer';
import Validate from '../Component/Validate';
import BackButton from '../Component/BackButton';


class Sympto4Orga extends React.Component {

    state = {
        icon: [],
        text_static: [],
        problem: [],
        response: [],
        text_static2: [],
        text_static3: [],
        text_static4: []
    };

    getHeader = async() => {
        const res = await axios.get("http://localhost:3001/icon/27")
        this.setState({icon: res.data[0]});
    };

    getTextStatic = async() => {
        const res = await axios.get("http://localhost:3001/text_static/14")
        this.setState({text_static: res.data[0]});
    };

    getTitleStatic = async() => {
        const res = await axios.get("http://localhost:3001/problem/3")
        this.setState({problem: res.data[0]});
    };

    getTextarea = async() => {
        // Vérifier ce qu'il faut mettre en ciblage
        const res = await axios.get("http://localhost:3001/response")
        this.setState({response: res.data[0]});
    }

    getPlaceholder = async() => {
        const res = await axios.get("http://localhost:3001/text_static/140")
        this.setState({text_static2: res.data[0]});
    };

    getValidate = async() => {
        const res = await axios.get("http://localhost:3001/text_static/116")
        this.setState({text_static3: res.data[0]});
    };

    getBack = async() => {
        const res = await axios.get("http://localhost:3001/text_static/117")
        this.setState({text_static4: res.data[0]});
    };

    getTextStatic = async () => {
        const res = await axios.get("http://localhost:3001/text_static/4");
        this.setState({ text_static: res.data[0] });
      };
    componentDidMount() {
        this.getHeader();
        this.getTextStatic();
        this.getTitleStatic();
        this.getTextarea();
        this.getPlaceholder();
        this.getValidate();
        this.getBack();
    }

    render() {
        const{icon,text_static,problem,response,text_static2,text_static3,text_static4}= this.state

        return (
            <div className="general_container">
                <IconMain icon={icon.picture_src} />
                <HeadingText text_static={text_static.all_text} />
                <TitlePageSympto problem={problem} />
                
                {/* Mettre l'url cible dans "action" */}
                {/* <form method="post" action="#"> */}
                    <Answer response={response} text_static2={text_static2}/>
                    <Validate text_static3={text_static3.all_text}/>
                    <BackButton text_static4={text_static4.all_text}/>
                {/* </form> */}

            </div>
            // .response_summary
        );
    }
}

export default Sympto4Orga;