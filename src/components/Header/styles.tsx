import styled from "styled-components"

export const Container = styled.header`
    background: var(--purple-light);
    height: 10vh;
    position: sticky; top: 0;
    z-index: 99999;

    &.dark{
        background: var(--blue-light);
    }
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 0rem;
    display: flex;
    align-items: center;
    justify-content: center;

    a{
        color: var(--white);
        font-weight: 700;
    }

    h1{
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
    }

    button{
        height: 3vh;
        border-radius: 0.5rem;
        background: var(--white);
        border: 0;
        padding: 0 1rem;


        color: var(--blue-dark);
        font-weight: 700;
    }
    #darkmode{
            color: var(--white);
            margin-left: auto;
            
            svg{
                height: 30px;
                width: 30px;
            }
    }

`;

export const Options = styled.div`
    display: flex;
    align-items: center;
    min-width: 10px;
    gap: 3rem;
    
    font-weight: 700;
    font-size: 20px;

    margin-left: auto;

`