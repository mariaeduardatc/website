import styled from "styled-components"

export const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    margin: 10vw;
`

export const ImageArea = styled.div`
    width: 30vw;

`

export const WorkList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .project{
        display: flex;
        justify-content: space-between;
        border-bottom: solid black;
        padding: 30px;
    }
`