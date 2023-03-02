import { Container, Content, Project } from "./styles";


const ios =  require("../../assets/ios.gif")
const pokemon =  require("../../assets/pokemon.gif")
const zumbi =  require("../../assets/zumbi.gif")


export function Projects(){
    return(
        <Container>

            <h1>get into it!</h1> 
            <h6 className="line"></h6>

            <Content>  
                <Project>
                    <img src={ios} alt="ios app gif" />
                    <figcaption>
                        <h3>iOS</h3>
                    </figcaption>
                    <a href="https://github.com/mariaeduardatc/flash_cards" target={"_blank"}></a>
                 </Project>   
                 <p>iOS Mobile Development project for CodePath's Mobile Development Course. 
                    The app is for those who need a simple way to study and remember concepts for tests, 
                    language learning and much more! <br></br>
                    <b>Technologies:</b> Swift, Figma

                 </p>
            </Content>

            <Content>

            <p id="pokemon">
                Teamed with other 4 software engineers and developed 2D game for a school project.
                The game is a mix of the Pokemon world and Space Invaders. The game applied OOP, 
                laws of motion, vectors, and sound editing. <br></br>
                <b>Technologies:</b> Python  
            </p>
                <Project>
                    <img src={pokemon} alt="pokemon game gif" />
                    <figcaption>
                        <h3>Python</h3>
                    </figcaption>
                    <a href="https://github.com/PedroLandim/ProjetoIP" target={"_blank"}></a>
                </Project>
            </Content>

            <Content>
                <Project>
                    <img src={zumbi} alt="zumbi game gif" />
                    <figcaption>
                        <h3>C#</h3>
                    </figcaption>
                    <a href="https://github.com/mariaeduardatc/Unity" target={"_blank"}></a>
                </Project>
                <p>
                    Developed a 3D survival game applying programming logic, OOP, laws of motion, vectors,
                    and sound editing in Unity. <br></br>
                    <b>Technologies:</b> C#, Unity
                </p>
            </Content>
        </Container>
    )
} 