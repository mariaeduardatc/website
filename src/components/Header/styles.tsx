import styled from "styled-components"


export const Container = styled.header`
    background: var(--purple-light);
    height: 80px;

    &.dark{
        background: var(--blue-light);
    }
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 0rem;
    display: flex;
    


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
        height: 1.5rem;
        border-radius: 0.5rem;
        background: var(--white);
        border: 0;
        padding: 0 1rem;


        color: var(--blue-dark);
        font-weight: 700;
    }
    #darkmode{
            background-color: var(--blue-dark);
            color: var(--white);
            margin-left: auto;

            &.dark{
                background-color: var(--purple-light);
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