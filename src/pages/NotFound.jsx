import React from 'react';
// import './NotFound.css';
import '../style/NotFound.css';
import fondo from '../assets/404.jpg';
import Header from '../components/Header';
import { Section } from './Section';
import Footer from '../components/Footer';

export default function NotFound() {
    return (


        <>
            <Header /> 

            <Section dataStyle={{marginTop:`10em`,marginBottom:'10em'}}>

                <div className="cnt-404" style={{backgroundColor:"red"}}>
                                a
                            </div>

            </Section>


            <Footer />
        </>
    );
}

