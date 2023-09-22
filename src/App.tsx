import { About } from './components/About';
import { Header } from './components/Header';
import { Map } from './components/Map';
import { Hero } from './components/Hero';
import { GlobalStyle } from './styles/global';
import { Projects } from './components/Projects';
import { Mentors } from './components/Mentors';
import { Interview } from './components/Interview';
import { Footer } from './components/Footer';
import { useEffect } from 'react';
import { Work } from './components/Work';


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
        <Hero />
        <About />
        <Work />
        {/* <Map />
        <Projects /> */}
        <Mentors />
        <Footer />

        <GlobalStyle />
        </>
    )
}