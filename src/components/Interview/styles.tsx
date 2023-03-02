import styled from "styled-components"


export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    margin-bottom: 50px;

    .line{
        height: 3px;
        border-radius: 5px 5px 0 0;
        padding: 4px;
        width: 80px;
        background: var(--purple-light);
    }
`;

export const Content = styled.div`
    margin-top: 50px;
    iframe{
        width: 560px;
        height: 315px;
    }
`;

