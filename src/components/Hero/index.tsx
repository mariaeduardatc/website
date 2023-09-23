import { Container, Content } from "./styles";
import Typewriter from 'typewriter-effect'


export function Hero(){
    return(
        <Container>
            <Content>
                <h1>Hi, I'm&nbsp; <Typewriter
                        options={{
                            strings: ['Maria.'],
                            autoStart: true,
                            loop: true,
                        }}
                />
                </h1>
            </Content>
        </Container>
    )
} 