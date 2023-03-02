import { About } from './components/About';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Motto } from './components/Motto';
import { Map } from './components/Map';
import { GlobalStyle } from './styles/global';
import { Projects } from './components/Projects';
import { Mentors } from './components/Mentors';
import { Interview } from './components/Interview';
import { Footer } from './components/Footer';
import { useEffect } from 'react';


export function App(){
    useEffect(() => {
        if (window.localStorage.getItem('dark_mode') === 'true') {
            const allElements: Element [] = Array.from(document.getElementsByTagName('*'))
            for (const element of allElements) {
                element.classList.add('dark')
            }
        }
    })
    return(
        <>
        <Header />
        <Home />
        <Motto />
        <About />
        <Map />
        <Projects />
        <Mentors />
        <Footer />

        <GlobalStyle />
        </>
    )
}