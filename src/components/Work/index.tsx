import { useState } from "react";
import { Container, ImageArea, WorkList } from "./styles";
import salesforce from '../../assets/salesforce.png'

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
            img_url: 'https://lh3.googleusercontent.com/pw/AIL4fc_9ltK7l1D6DZWfjzKAAmjIWntvPO5xF4gHObwUBY9_SZUX4vTtZ7Wmzgfkbu-DpQ8PoiXQocgtP2WBwMxt1YoKsyXiC4FA2iq_gOLSnvLAvPwqkEBRRHHaOXRqr_2bjp8cstwLB1WsYtK3Y372mfkL2Ivo79rU2yYkv6sNWUv0Hd4vWGTOFrlwNJjB34YV_7SPpu-kdalmgHlAi77B8BgsWlITpB4VlZWvWWNeFGryCRWaCkqhEPjiHJfKMO55Px-UG7L9eX4Dq6S-6baicGIvyyjMWz8jvghtOuTOA0u2nf70Fk4sUB5wWnmuqiidpQuNoXRM5Wsm84TqdrNeEiUBzLTIi-SPDDZlb7x409oIF24xndnjP_3AzmgrW55GyNV1r1ek8MtS5gCDcvUES7OKcPWvZ_D7HDUNJniGoyKObLbZf9dihtb4hN1LhKcL0XgrEp4ol2PaC8BQfaM7cqDGDLqWbeX9TCbroRnJRycXOx2Op9dJYYPKfZQrdlhQFJVbh2EFFkKzMwXOp3DHY7Fnh_gOhkjOPOqiCv2eWeE6ri-QWZIkNKAABTVXkmC7Ti1J3TKHxOEERNRI85vKERjPWLMe1JpdGiIY0irYkSVMCHW3R3HWMFjV8VVoqgVyrQ-Vylb-tg-Y1t1NgYY4w0R_p7yidbX8yGzDVPyNPaIa6udnMyjlzyaKiMTK1Q40YkZAFZLNa_a3TlcU3CjBZnoSaVgh0QJdZSTN6aCzYibEqjWlePm4rkOHcQ32SihOt-wBnXD2u_WTSc_vMvPxpralli6FQMi-oBddm-TOrHdbRdWrE782DJ3Mv7cLto6jEMQu85rniRgQkJ-YyZuuqfjCvtT330mwUN-9qOzTpv54ktLATb46kKC7ABYoo6mKUOjh4HsUCnM_X6bOBAFDOX2Llt_PqcIkeaqBLDV9_AGToraflTCq-7m5_4k=w1740-h1162-s-no?authuser=1',
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
            img_url: 'https://lh3.googleusercontent.com/pw/AIL4fc9qZs8QbknUMsEBzVRJ5FW8bL0RoFN3LugI8ZICPiaa4rCHz__-n1Y5Nh4QrAPea750ESdFNtD_wgBUtWtsY5EHpfQbfyS71LB2G8XhdgbLomRmxR-HWDqk4yJ4sn7aH2URsw8JoNlfg7mW9G9VQTYDvIcnG9bgP2ufALhmsN7OJD49u3TCcfxBzxsywI-XAPJnb-5uS_rtUjd4iugT5zPmKkIoM1AKM8XUPjwM9B1VbP7634Xrtwf0aXk0SSMyfF82xxYQdDo3wiCX5ol5VUb6ikT-DklI8LoATFS_RADijI5x_gvy379MzhWJQvaf4Zvel_7tc1jdBh4xVMfmcsCizPEFbGRrRt4DM1ANePO_OLq_h34IX2mLkYaXNr7qH14FnBiefjXD0fSZsz5trP4bcccMVvO6ylM30YRMAI09vxMndsjO_C7OfKjEce9YRlQtEK-cWnTvtzECR0D6qGGIvZQ1BOuBS3JewYwfWEEdh64XwyBkFoTdGr-e-eq-VBqmu26f9LeHkAxuvzd5k0oAJw2glUz3mOEEEyfRVf8ud1NYJjlpy03950XkIj9Yp9IHdOPRKXY1MOiHxmRaBOibpY5gJ07JhCdLt5mb68VszgJ5aNhacWyw1JFTN0TjbeYd9ycVSV8iWMh4aVNQ6_5FiKJgvwjeOXJoZHmMWw6otr_yzBrrV6hRLoIb_aWFAsey7Sk-rCEC6xg7lpisJKYkSsuo5tI9zEHTtqBb1sbNhXuxX696-I5YyU4749LQTt94q2CMm_7es7srJcGHo7xNbwp6VVn4eeVyZ110NjppLccWMVm0ex4LAu1xatwP-YoP9u37LRBY0G6VZPrBpBUKKEarQ6VVLWNCO0z-Y6tXfnEFekPKkBkQEt9dJ1LUhIjXg29-fPU91NX1XP3k-ivcPqSYXq4GYkyJyJ1hvXcwSlLU-0sEEk7xmmU=w862-h1028-s-no?authuser=1',
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
            img_url: 'https://lh3.googleusercontent.com/pw/AIL4fc_oXok8ZH618QTrodaZk86voxoYSz8muUSo0HRrq6dpggSTiKxEEcY0BQzyFdQZIB8EKMrhQzgLNzvyMGwk2tiUYgHNnB9QHdmE67X6F54wlTEKg5XbUfjUUstM8wFJrGC1kPxZRpVCyqBpxI3yZ4IR7mWgmTcxcXeGpZAbAVIB3dyqEjChd03zLVq3Z52-njbNhnm2GWZBMFrT8KQ_0plg10lR00g_KNvc-mUaIECKsURvsUc-RbM6_dwi0KE46EFkbeYmaqMlvkGIo9x0-jgt4rXJZsld2Ey_uzREorgUbnKJHZID8UChmhp13VR7m0BaXV5zhYAzV50JI6jkRse8oi0F2oeRX2n_N_SLlRiEKS3ojWLK69DvP4x4-GD4537ZaQ085h8-oJwmEdyTCD9PjEenFPX7txVKfF-8wphEV6Pm4ns2g0eNoK33RZmPFucO3JsFy6UAxyqMBuqAl1z3JQtSYkrJPquDjpyrFvSf9zQufQp2kdWfFN7WCxD54EpdWSSc6oTQMleH7nRWLVagV2HrlNdrx_L_Wdi3o1ipgPaxCYLIMW_zG1OPGAcizibMu-UpQTizeumqUP3RdQGbZbc-ooThFIwTGF8FrOLb4t78363-G-uVbkR74HPh6tOB7vYkOt4OaTDwowJzzU9-RoXlC3KnsYgqRJx0K3tIzx_6aShoSMwSmRXvEZRw8vLZSchhPgBR1VV07uTk8lbkjsrCWEtyzIoqnfP6-ixIenffHHBoc1nzg8Jzw2WELEWrNQGQbhO-bGKYjAIPOVnzSKEG_mLrrgAINZ0sZT3QzWZYYBmSUkzGsZKD7W42BefG6ykT0oTwDuR6ynnn0Uls0jU_8LDMs43X3XghDOfr6bhXCNQ1LQbBVMMhAdGRufyFZHo9sQi1QTfRVisUWgL2MpmRXEexYlV1dMHZFKoUi2M4bqDn0_ybji4=w1222-h1630-s-no?authuser=1',
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
                        <h4><b>Technologies:</b> {details.category}</h4>
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
        <Container>
            <ImageArea>
                {projectDescriptions}
            </ImageArea>
            <WorkList>
                <h1>Projects and thoughts.</h1>
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