import styled from "styled-components"


export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    margin-bottom: 50px;
    color: var(--blue-dark);

    .line{
        height: 3px;
        border-radius: 5px 5px 0 0;
        padding: 4px;
        width: 80px;
        background: var(--purple-light);
    }
`;

export const Content = styled.div`
    display: flex;
    
`;

export const Values = styled.div`

`;


export const Images = styled.div`
    display: grid;  
    align-items: center;

    img{
        padding: 4px;
        width: 450px;
        height: 50px;

        border: solid 2.5px;
        border-radius: 50%;

        &.dark{
        border: white solid 2.5px;
        background-color: white;
    }
    }

`;

export const Mentor = styled.div`
    display: inline;
    margin-left: 50px;
`;


export const Presentation = styled.div`
    margin-top: 50px;
    background: #a360c242;
    padding: 1rem;
    border-radius: 3%;

    h3{
        color: var(--purple-light);
    }

    h5, p{
        color: var(--blue-dark);
    }

    &.dark{
        background: #ffffffcf;
        h3{
            color: var(--purple-light);
        }

        h5, p{
            color: var(--blue-dark);
        }

    }
`;


export const Information = styled.div`
    display: grid;  
    align-items: center;
    font-size: 16px;

    margin-left: auto;
    text-align: end;

    .subtitle{
        opacity: 47%;
    }
`

export const Education = styled.div`
    border-bottom: solid 2px;
    height: 20px;
    width: 30rem;

    &.dark{
        border-bottom: white solid 2px;
    }
    
`

export const Passion = styled.div`
    border-bottom: solid 2px;
    height: 20px;
    width: 30rem;

    &.dark{
        border-bottom: white solid 2px;
    }
    
`

export const Hobbies = styled.div`
    border-bottom: solid 2px;
    height: 22.5px;
    width: 30rem;
    
    &.dark{
        border-bottom: white solid 2px;
    }
`

