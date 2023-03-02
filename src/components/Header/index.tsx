import { Container, Content, Options } from "./styles";


export function Header(){

    const activateDarkMode = () => {
        window.localStorage.setItem('dark_mode', 'true')
        const allElements: Element [] = Array.from(document.getElementsByTagName('*'))
        for (const element of allElements) {
            element.classList.add('dark')
        }
    }

    const deactivateDarkMode = () => {
        window.localStorage.removeItem('dark_mode')
        const allElements: Element [] = Array.from(document.getElementsByTagName('*'))
        for (const element of allElements) {
            element.classList.remove('dark') // Vc precisa criar essa classe no seu CSS
        }
    }

    return(
        <Container>
            <Content>
                <a type="button" href="">
                    <h1>METC</h1>
                </a>
                
                <Options>
                    <a href="#Home">home.</a>
                    <a href="#About">about.</a>
                    <a href="#Projects">projects.</a>

                    <a href="https://docs.google.com/document/d/e/2PACX-1vS3xZj23-jcyUSyOL2KuF-izGOIIZdb1Bor7u7H5BuAqFMh85sHLX92ngDthK8u8m-ot-KUDud70fRW/pub" target={"_blank"}>
                        <button type="button" >RESUME</button>
                    </a>
                </Options>
                
                <button id="darkmode" 
                onClick = {() => 
                {
                    if (window.localStorage.getItem('dark_mode')) {deactivateDarkMode()} 
                    else {activateDarkMode()}
                }}>Dark Mode</button>
            </Content>
        </Container>
    )
} 