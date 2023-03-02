import { Container, Content, Presentation, Information, Education, Passion, Hobbies, Mentor, Images } from "./styles";


const university =  require("../../assets/university.png")
const internet =  require("../../assets/internet.png")
const sparkle =  require("../../assets/sparkle.png")



export function Mentors(){
    return(
        <Container>
            <h1>hear from her mentors</h1>
            <h6 className="line"></h6>
            <Content>
                <Images>
                    <img src={university} alt="university icon" id="img1Light"/>
                    <img src={internet} alt="web icon" id="img2Light" />
                    <img src={sparkle} alt="sparkle icon" id="img3Light"/>
                </Images>
                <Information>
                    <Education>
                        <h3>MINERVA UNIVERSITY</h3>
                        <h3 className="subtitle">EDUCATION</h3>
                    </Education>
                    <Passion>
                        <h3>WEB DEVELOPMENT & SOFTWARE ENGINEERING</h3>
                        <h3 className="subtitle">PASSION</h3>
                    </Passion>
                    <Hobbies>
                        <h3>🍳🧘🏻‍♀️🎭🎧📚</h3>
                        <h3 className="subtitle">HOBBIES</h3>
                    </Hobbies>
                </Information>

                <Mentor>
                    <Presentation>
                            <h3>Raquel Ribeiro</h3>
                            <h5>ribeiro@minerva.edu</h5>
                            <h5>Ph.D. MAST, Professor of Computational Sciences, Minerva University</h5>
                            <p>"Maria is a reliable fast learner, with a strong sense of collaborative skills who contributes 
                                positively to in-class discussions through her ability to engage with the algorithms and data 
                                structure course material.  Having already completed many of the courses offered by CodePath, 
                                Maria is excited at the prospect of rising to the challenge of learning and building on web development, 
                                design, software engineering, and product development. Given this, Maria would enormously benefit from 
                                being offered a place in this competitive program, and I strongly support her application."" </p>
                    </Presentation>
                    <Presentation>
                        <h3>Lucas Tambasco</h3>
                        <h5>ltambasco@minerva.edu</h5>
                        <h5>Ph.D., Assistant Professor of Computational Sciences, Minerva University</h5>
                        <p> "It has been an absolute pleasure having Maria as a student in two of my courses. 
                            Maria is energetic, always willing to participate with insightful comments and valuable questions. 
                            She demonstrates great teamwork skills when working in small groups of 2 to 3 students to solve advanced
                                problems in Calculus and Probability. Since all classes at Minerva have 20 students or less, I can 
                                directly interact with Maria on a daily basis and witness first-hand the contributions she brings 
                                to the team discussions. It would be a joy to have Maria as a student in a future semester, and I 
                                can certainly see her being a great addition to the Calculus Teaching Assistant Team in the future."</p>
                    </Presentation>
                </Mentor>

            </Content>
        </Container>
    )
} 