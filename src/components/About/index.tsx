import { Container, Content, Presentation } from "./styles";
import blob from '../../assets/blob.png'

export function About() {
    
    return (
        
        <Container id="About">
            <Content>
                <Presentation>
                    <h2>Buildind today tomorrow's abstractions <br /> in <b>frontend engineering</b>.</h2>
                    <p>My name is Maria, and I am a Computer Science major at Minerva University.
                        I am originally from Brazil, but I have lived in 4 other countries in the last year.
                        I am especially interested in Web Development and the study of technology in smart cities.
                        If you are my friend, you know I can't watch a movie without verbally reacting to the scenes
                        and that I would do everything for a lemonade or a matcha latte. </p>
                    <p>As a frontend software engineer, I hope to be part of building a more fun and exciting web. With a mission of exploring and turning the web into a better user experience, I am pursuing new ideas through animations.</p>
                </Presentation>
                <div id="blob">
                    <img src={blob} alt="floating blob" />
                </div>
                

            </Content>
        </Container>
    )
} 