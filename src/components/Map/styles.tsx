import styled from "styled-components"


export const Container = styled.header`
    .line{
        height: 3px;
        border-radius: 5px 5px 0 0;
        padding: 4px;
        width: 95px;
        background: var(--purple-light);
        margin-left: 155px;
    }
`;

export const Content = styled.div`
    
    img{
        margin-top: 50px;
        max-width: auto;
        margin: 0;
    }

    h1{
        max-width: 1120px;
        margin: 50px auto;
        margin-bottom: 0;
        font-weight: 700;
        font-size: 40px;
        color: var(--blue-dark);
    }

    b{
        color: var(--purple-light);
    }
    
`;

