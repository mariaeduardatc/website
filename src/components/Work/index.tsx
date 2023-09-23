import { useState } from "react";
import { Container, ImageArea, WorkList } from "./styles";
import perfil from '../../assets/perfil.jpg'
import taipei from '../../assets/TP2.jpg'
import tp2 from '../../assets/TP1.jpg'
import backg from '../../assets/background2.jpg'

export function Work() {
    type Project = {
        img_url: string,
        title: string;
        category: string;
        year: string;
        description: string;
    };

    const [details, setDetails] = useState({
        img_url: '',
        title: '',
        category: '',
        year: '',
        description: ''
    })
    
    const [isHover, setIsHover] = useState(false)

    const projectDesc: { [key: string]: Project } = {
        'project1': {
            img_url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjJnanBtcHBwNWduMHliaDFrdDJkdGJuNmJkZDAzcnliYWF4NmhvbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/a6RnNwR5TPpttoBDAK/giphy.gif',
            title: 'FTL Intern @Salesforce',
            category: 'ReactJS, NodeJS, SASS, PostgreSQL',
            year: '2023',
            description: 'Spent 10 weeks learning full-stack technologies such as ReactJS and SQL @Salesforce. Developed an application for travellers focusing on creating trip intineraries with few clicks.'
        },
        'project2': {
            img_url: 'https://camo.githubusercontent.com/308f6010c037f7eae573db85f217cdad73b1dce932ade00aaad35a41ece46cf7/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f7a724576626532734679474f58363033424c2f67697068792e676966',
            title: "Zumbi's Hell",
            category: 'C#, Unity',
            year: '2021',
            description: 'Developed a 3D survival game applying programming logic, OOP, laws of motion, vectors,and sound editing in Unity.'
        },
        'project3': {
            img_url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXlyc2t3Z3VkNGZ2ZHZwMmNxczF6c2R0dTIwbXczejYwMGkxOGhsOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IYEOC68q3ua5HIfH8e/giphy.gif',
            title: "Activities Scheduler",
            category: 'Python',
            year: '2022',
            description: 'Built a scheduler in Python using heaps and priority queues. This project was important so I could put in practice complex data structures and algorithms to build an application in real life, while taking into consideration measures such as runtime and memory usage.'
        },
        'project4': {
            img_url: 'https://www.boredpanda.com/blog/wp-content/uploads/2015/03/IMG_37372__605.jpg',
            title: "134340",
            category: 'Creative Writing',
            year: '2021',
            description: 'Welcome to a more creative and instropective me. I wrote this text for a Arts and Humanities course, reflecting on how the lines between utopia and dystopia can become blurry (specially when we borrow a few aspects of real life).'
        },
        'project5': {
            img_url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGFldzN6dWoxcDFuY25hMHhkY2JxcHc3cDU0cjUxbjU2eXVlN3BkayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/g9MCrSPt7LvLHpUmUL/giphy.gif',
            title: "Forest Therapy @NTU",
            category: 'College Class',
            year: '2021',
            description: 'As part of my experience living in different cities around the world, I chose to take extras class at the National Taiwan University when I lived in Taipei. This was a great opportunity to meet locals, and engage in the nature of the green city. '
        }
    }

    function getId(e: any) {
        const objId = e.target.id
        setDetails(projectDesc[objId])
        setIsHover(true)
    }
    function deleteId(e: any) {
        setIsHover(false)
        setDetails({
            img_url: '',
            title: '',
            category: '',
            year: '',
            description: ''
        })
    }

    const projectDescriptions = isHover ? 
        <div id="selected-project">
            <img src={details.img_url} alt="" />
            <div id="general">
                <h1>{details.title}</h1>
                <div id="general-descriptions">
                    <div id="small-description">
                        <h4><b>Category:</b> {details.category}</h4>
                        <h4><b>Year:</b> {details.year}</h4>
                    </div>
                    <div>
                        {details.description}
                    </div>
                </div>
            </div>
        </div> : <>
        </>

    return (
        <Container id="Projects">
            <ImageArea>
                {projectDescriptions}
            </ImageArea>
            <WorkList>
                <h1>Projects and <b>thoughts</b>.</h1>
                <a href="https://github.com/mariaeduardatc/WanderWise" target="_blank">
                    <div className="project"
                        id="project1"
                        onMouseEnter={getId}
                        onMouseLeave={deleteId}
                    >
                        <h4>FTL Intern @Salesforce</h4>
                        <h5>Full-Stack web Development</h5>
                    </div></a>
                <a href="https://github.com/mariaeduardatc/Unity" target="_blank">
                <div className="project"
                    id="project2"
                    onMouseEnter={getId}
                    onMouseLeave={deleteId}
                >
                    <h4>3D Survival Game</h4>
                    <h5>C#, Unity, Game Dev</h5>
                </div></a>

                <div className="project"
                    id="project3"
                    onMouseEnter={getId}
                    onMouseLeave={deleteId}
                >
                    <h4>Activities Scheduler</h4>
                    <h5>Data Structures and Algorithms</h5>
                </div>

                <div className="project"
                    id="project4"
                    onMouseEnter={getId}
                    onMouseLeave={deleteId}
                >
                    <h4>134340</h4>
                    <h5>Creative Writing</h5>
                </div>

                
                    <div className="project"
                        id="project5"
                        onMouseEnter={getId}
                        onMouseLeave={deleteId}
                    >
                        <h4>Forest Therapy @ NTU</h4>
                        <h5>Extra Course</h5>
                    </div>

            </WorkList>
        </Container>
    )
}