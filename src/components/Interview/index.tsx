import { Container, Content } from "./styles";


export function Interview(){
    return(
        <Container>
            <h1>hear from Maria</h1>
            <h6 className="line"></h6>
            <Content>
            <iframe src="https://www.youtube.com/embed/fARfD_Cuc6o" title="Maria's Interview Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </Content>
        </Container>
    )
} 