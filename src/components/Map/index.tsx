import { Container, Content } from "./styles";

const map =  require("../../assets/map_t.png")

export function Map(){
    return(
        <Container id="Projects">
            <Content>
                <h1>from Brazil and <b>beyond!</b></h1>
                <h6 className="line"></h6>
                <img src={map} alt="Map with projects around the globe" />
            </Content>
        </Container>
    )
} 