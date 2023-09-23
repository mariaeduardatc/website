import styled from "styled-components"


export const Container = styled.header`
    height: 95vh;

    color: var(--blue-dark);
    background: linear-gradient(90deg, #fcfcfc 67%, #3C3C60 33%);

    &.dark{
        background: linear-gradient(90deg, #3C3C60 67%, #A360C2 33%);
        color: white;
    }

    h1, h2{
        font-style: normal;
        font-weight: 700;
        font-size: 4rem;

        &.dark{
        color: white;
    }
    }

    .line{
        height: 3px;
        border-radius: 5px 5px 0 0;
        padding: 4px;
        width: 90px;
        background: var(--purple-light);
    }

    img{
        border-radius: 50%;
        justify-content: center;
    }
`;

export const Content = styled.div`
    @keyframes float{
        0%{top:110%}
        25%{top:140%}
        50%{top:110%}
        75%{top:140%}
        100%{top:110%}
    }

    padding: 5rem 1rem 5rem;
    display: flex;
    gap: 2rem;

    #blob{
        width: 50vw;
        height: 50vh;
        z-index: 999;
        position: absolute;
        margin-left: 40vw;
        animation: 10s ease-in-out 0s infinite alternate float;
    }

`;

export const Presentation = styled.div`
    margin-top: 3vh;
    margin-left: 50px;

    h2{
        margin-bottom: 10px;
        color: var(--purple-light);
        &.dark{ color: white; }
    }

    b{
        color: var(--blue-dark);
        &.dark{ color: var(--purple-light); }
    }

    
    p{
        width: 350px;
        height: 250px;
        text-align: left;
    }

    button{
        padding: 25px 70px;
        border: none;
        border-radius: 50px;

        background: var(--blue-dark);
        

        h1{
            font-size: 16px;
            color: white;
        }

        &.dark{
            background: var(--purple-light);
        }
    }
    
`