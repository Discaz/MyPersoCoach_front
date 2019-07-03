import React from 'react';
import axios from "axios";

import './GeneralContainer.css';

import IconMain from '../Component/IconMain';
import HeadingText from '../Component/HeadingText';
import TitlePageSympto from '../Component/TiltePageSympto';
import Form from '../Component/Form';


// On fait un composant intelligent car il y a des states qui vont récupérer des informations de la base des données
//...via les axios et les redistribuer dans d'autres composants 
class Sympto4Conflict extends React.Component {

    //Le state sert à recueillir les infos des axios
    state = {
        icon: [],
        text_static: [],
        problem: [],
        problem_id: 1
    };

    //"getHeader" est la fonction d'Axios qui permettra d'éxécuter les tâches de recherche d'infos dans la bdd
    //Il ne s'agit que de la structure et non de l'appel de fonction
    getHeader = async() => {
        //"axios" pointe sur la route qui permet l'accès à la base de données
        const res = await axios.get("http://localhost:3001/icon/27")
        //"this.setState" prend le ou less info(s) de la root et les redistribue dans la state. Ici "icon"
        //On ajoute [0] lorsque le composant ciblé ne contient pas de map. S'il y a une map, on ne précise pas de tableau
        this.setState({icon: res.data[0]});
    };

    getTextStatic = async() => {
        const res = await axios.get("http://localhost:3001/text_static/14")
        this.setState({text_static: res.data[0]});
    };

    getTitleStatic = async() => {
        const res = await axios.get("http://localhost:3001/problem/1")
        this.setState({problem: res.data[0]});
    };

    getIdProblem = () => {
        const {problem_id} = this.state
        const id= this.props.location.state.lastId
        console.log('pouet pouet', id)
        axios.put(`http://localhost:3001/summary/${id}`, {problem_id: problem_id})
          
      }

    
    //Dès que le composant est monté (lorsqu'il est retransmit dans le DOM virtuel), il exécute la fonction de chaque Axios
    componentDidMount() {
        this.getHeader();
        this.getTextStatic();
        this.getTitleStatic();
        this.getIdProblem()
    }

    render() {
        //Augmente la portée des states pour que les composants puissent les récupérer
        //C'est une liaison avec ce qu'il y a dans le "return" et ce qu'il y a au-dessus
        //Sinon, il y aura un message d'erreur "undefined"
        const{icon,text_static,problem}= this.state
        

        return (
            
            
            <div className="general_container">
                {/* Appel du composant. Le 1er "icon" correspond au state */}
                {/* "icon.picture.src" correspond à l'accès à la bdd "icon" et au champ "picture.src" */}
                <IconMain icon={icon.picture_src} />
                <HeadingText text_static={text_static.all_text} />
                <TitlePageSympto problem={problem} />
                <Form problemId={this.state.problem_id} lastId={this.props.location.state.lastId} />
            </div>

            
            
        );
    }
}

export default Sympto4Conflict;