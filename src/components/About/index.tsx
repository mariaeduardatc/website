import { Container, Content, Presentation, Pictures } from "./styles";


const profile =  require("../../assets/perfil.jpg")

const SF1 = require("../../assets/SF1.JPG")
const SF2 = require("../../assets/SF3.JPG")

const SK1 = require("../../assets/SK2.jpg")
const SK2 = require("../../assets/SK3.JPG")

const BG1 = require("../../assets/background1.jpg")
const BG2 = require("../../assets/background2.jpg")

const TP1 = require("../../assets/TP1.jpg")
const TP2 = require("../../assets/TP2.jpg")

const purple = require("../../assets/purple.png")

export function About(){
    return(
        <Container id="About">
            <h1>meet me!</h1>
            <h6 className="line"></h6>
            <Content>
                <Pictures>
                    <img src={profile} alt="profile picture" id="profile"/>

                    <img src={SF1} alt="palace of fine arts" id="SF1"/>
                    <img src={SF2} alt="maria and golden gate" id="SF2"/>

                    <img src={SK1} alt="jeju island" id="SK1"/>
                    <img src={SK2} alt="maria at lotte world" id="SK2"/>

                    <img src={BG1} alt="samsung museum" id="BG1"/>
                    <img src={BG2} alt="coex" id="BG2"/>

                    <img src={TP1} alt="jiunfen" id="TP1"/>
                    <img src={TP2} alt="maria at jiunfen" id="TP2"/>
                </Pictures>

                <Presentation>
                    <h2 id="title">✨Hello, world!</h2>
                    <p>My name is Maria, and I am a Computer Science major at Minerva University. 
                        I am originally from Brazil, but I have lived in 4 other countries in the last year. 
                        I am especially interested in Web Development and the study of technology in smart cities. 
                        If you are my friend, you know I can't watch a movie without verbally reacting to the scenes 
                        and that I would do everything for a lemonade or a matcha latte. </p>
                        
                        <a href="https://docs.google.com/document/d/e/2PACX-1vS3xZj23-jcyUSyOL2KuF-izGOIIZdb1Bor7u7H5BuAqFMh85sHLX92ngDthK8u8m-ot-KUDud70fRW/pub" target={"_blank"}>
                            <button>
                                <h1>RESUME</h1>
                            </button>
                        </a>
                </Presentation>

                
            </Content>
        </Container>
    )
} 