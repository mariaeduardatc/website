import styled from "styled-components"


export const Container = styled.div` 
    max-width: 1120px;
    margin: 0 auto;
    margin-bottom: 50px;
    
    color: var(--blue-dark);

    h3{
        font-size: 40px;
    }

    .line{
        height: 3px;
        border-radius: 5px 5px 0 0;
        padding: 4px;
        width: 65px;
        background: var(--purple-light);
    }
`;

export const Content = styled.div`
    display: flex;
    margin-bottom: 50px;
    align-items: center;
    margin-top: 50px;

    p{
        padding: 40px;

        background: #3c3c6014;
        border-radius: 15px 50px;

        &.dark{
            background: #ffffffcf;
            color: var(--blue-dark);
        }
    }


`;

export const Project = styled.figure`
    margin: 10px 20px;
    margin-left: 30px;
    max-width: 315px;
    min-width: 300px;

    height: 250px;


    overflow: hidden;
    position: relative;


    background-color: #000;
    text-align: center;
    font-size: 16px;
    border-radius: 50px;


    transition: all 0.5s ease;

    figcaption {
        top: 50%;
        left: 50%;
        position: absolute;
        transform: translate(-50%, -50%) scale(0.7);

        h3 {
            color: var(--blue-dark);
            background-color: #ffff;
            opacity: 0.5;
            border-radius: 50%;
            padding: 50cm;
        }
    }
    
    a {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 3;
    }

    :hover > img{
        opacity: 0.7;
    }

    :hover figcaption {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
    }


`;

