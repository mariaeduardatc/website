import { Container, Content, Options } from "./styles";

const github =  require("../../assets/github.png")
const linkedin =  require("../../assets/linkedin.png")

export function Footer(){
    return(
        <Container>
            <Content>
                <Options>
                    <a className="logos" href="https://github.com/mariaeduardatc" target={"_blank"}>
                        <img src={github} alt="GitHub Logo" />
                    </a>
                    <a className="logos" href="https://www.linkedin.com/in/mariacarneirotc/" target={"_blank"}>
                        <img src={linkedin} alt="LinkedIn Logo" />
                    </a>
                </Options>
                <a href="mailto:mariacarneiro@uni.minerva.edu" target={"_blank"} id="email">Created by @mariacarneiro</a>
            </Content>
        </Container>
    )
} 