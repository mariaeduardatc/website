import styled from "styled-components"


export const Container = styled.div`
    height: 10rem;
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 5rem 1rem 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    

    h1{
        font-style: normal;
        font-weight: 700;
        font-size: 53px;
        color: var(--blue-dark);
    }

    b{
        color: var(--purple-light);
    }

`;
