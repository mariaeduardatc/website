import styled from "styled-components"


export const Container = styled.div`
    background: var(--purple-light);
    height: 44.5rem;

    &.dark{
        background: var(--blue-dark);
    }
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 20rem 1rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    

    h1{
        font-style: normal;
        font-weight: 900;
        font-size: 96px;
        color: var(--white);
    }

    b{
        color: var(--blue-dark);

        &.dark{
            color: var(--purple-light);
        }
    }


`;
