import styled from "styled-components"

export const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    margin: 10vw;
`

export const ImageArea = styled.div`
    width: 30vw;

    #general-descriptions{
        display: flex;
        /* justify-content: space-between; */
        gap: 5rem;
    }

    #general{
        h1{
            border-bottom: solid;
            margin-bottom: 2vh;
        }
    }

    #selected-project{
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            width: 30vw;
            height: 30vh;
            margin-bottom: 2vh;
        }
    }

    #small-description{
        display: flex;
        flex-direction: column;
        gap: 1vh;
    }

`

export const WorkList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2vh;

    .project{
        display: flex;
        justify-content: space-between;
        border-bottom: solid black;
        padding: 30px;
    }
`