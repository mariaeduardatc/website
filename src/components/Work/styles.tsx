import styled from "styled-components"

export const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    margin: 10vw;
    color: var(--blue-dark);
`

export const ImageArea = styled.div`
    width: 30vw;

    &.dark{
        color: white;
    }


    #general-descriptions{
        display: flex;
        gap: 5rem;
    }


    #general{
        h1{
            border-bottom: solid var(--blue-dark);
            margin-bottom: 2vh;
            font-family: 'Inconsolata', monospace;
            font-weight: 700;
        }
    }

    #selected-project{
        display: flex;
        flex-direction: column;
        align-items: center;
        &.dark{
        color: white;
    }
        
        img{
            width: 30vw;
            height: 30vh;
            object-fit: cover;
            margin-bottom: 2vh;
            border-radius: 50px;
        }
    }

    #small-description{
        display: flex;
        flex-direction: column;
        gap: 1vh;
        &.dark{
        color: white;
    }

        h4, b{
            font-family: 'Inconsolata', monospace;
            font-weight: 700;
        }
    }
`

export const WorkList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2vh;

    b{
        color: var(--purple-light);
    }

    a{
        color: var(--blue-dark);
    }

    .project{
        display: flex;
        justify-content: space-between;
        border-bottom: solid var(--blue-dark);
        padding: 30px;
        color: var(--blue-dark);
        &.dark{
            color: white;
            border-color: white;
        }
    }
`