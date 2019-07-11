import React from 'react';
import axios from "axios";

// import '../Component/GeneralCss.css';
import '../Component/LoginForm.css';

// const textSignup = 
//     {
//          text : "Choisis ton identifiant et ton mot de passe",
//          text1 : "Remplis ces quelques informations complémentaires",
//          text_email : "Email",
//          text_password : "Mot de passe",
//          text_firstname : "Prénom",
//          text_lastname : "Nom",
//          text_function : "Fonction",
//          text_entreprise : "Entreprise",
//          text_signup : "Sign Up"
//     }


class Signup extends React.Component {

    state = {
        text_static: [],
        text_static2: [],
        text_static3: [],
        text_static4: [],
        text_static5: [],
        text_static6: [],
        text_static7: [],
        text_static8: [],
        text_static9: []
    }

    
    getText1 = async () => {
        const res = await axios.get("http://localhost:3001/text_static/144")
        this.setState({ text_static: res.data[0] });
    };
    
    getPlaceholderMail = async () => {
        const res = await axios.get("http://localhost:3001/text_static/134")
        this.setState({ text_static2: res.data[0] });
    };

    getPlaceholderMdp = async () => {
        const res = await axios.get("http://localhost:3001/text_static/135")
        this.setState({ text_static3: res.data[0] });
    };

    getText2 = async () => {
        const res = await axios.get("http://localhost:3001/text_static/145")
        this.setState({ text_static4: res.data[0] });
    };

    getFirstName = async () => {
        const res = await axios.get("http://localhost:3001/text_static/136")
        this.setState({ text_static5: res.data[0] });
    };

    getLastName = async () => {
        const res = await axios.get("http://localhost:3001/text_static/137")
        this.setState({ text_static6: res.data[0] });
    };

    getFunction = async () => {
        const res = await axios.get("http://localhost:3001/text_static/138")
        this.setState({ text_static7: res.data[0] });
    };

    getEntreprise = async () => {
        const res = await axios.get("http://localhost:3001/text_static/139")
        this.setState({ text_static8: res.data[0] });
    };

    getSignup = async () => {
        const res = await axios.get("http://localhost:3001/text_static/112")
        this.setState({ text_static9: res.data[0] });
    };


    componentDidMount() {
        this.getText1();
        this.getPlaceholderMail();
        this.getPlaceholderMdp();
        this.getText2();
        this.getFirstName();
        this.getLastName();
        this.getFunction();
        this.getEntreprise();
        this.getSignup()
    }

    render() {

        const {text_static,text_static2,text_static3,text_static4,text_static5,text_static6,text_static7,text_static8,text_static9} = this.state

        return (
        
        <div id="grid_login">
        {/* <BackgroundLogin/> */}

        <section className="blue_bg">
                
                <form method="post" action="#">
                    <div id="form">
                        <p className="white_text">{text_static.all_text}</p>
                        
                        <div>
                            <input type="email" name="email" placeholder={text_static2.all_text} />
                        </div>

                        <div>
                            <input type="password" id="password" name="password" placeholder={text_static3.all_text} />
                        </div>

                        <p className="white_text">{text_static4.all_text}</p>
                        
                        <div>
                            <input type="text" name="firstname" placeholder={text_static5.all_text} />
                        </div>

                        <div>
                            <input type="text" name="lastname" placeholder={text_static6.all_text} />
                        </div>

                        <div>
                            <input type="text" name="function" placeholder={text_static7.all_text} />
                        </div>

                        <div>
                            <input type="text" name="entreprise" placeholder={text_static8.all_text} />
                        </div>

                        <div className="height15"></div>

                        <div>
                            <button className="button_signup_submit" type="submit" name="signup" >{text_static9.all_text}</button>
                        </div>

                    </div>
                </form>
                
            </section>
            {/* <footer className="blue_bg"></footer>   */}

        </div>
        );
    }
  }

export default Signup;