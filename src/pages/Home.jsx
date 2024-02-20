import React from 'react';
import { Typography} from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MediaList } from '../components/MediaList';
import { useSelector } from 'react-redux';
import { Section } from './Section';

export default function Home() {

    // debugger;
    const mediaList = useSelector(state => state.media.mediaList);


    return (
    <>
        <Header /> 

        <Section dataStyle={{marginTop:`10em`,marginBottom:'10em'}}>

            <Typography variant="h2" gutterBottom >
                Bienvenid@ a tu biblioteca virtual.
            </Typography>

            <Typography variant="h5" style={{ margin:'1em'}}>
                Aquí puedes gestionar y visualizar tus recursos multimedia digitales.
            </Typography>

            <MediaList mediaList={mediaList}/>

        </Section>


        <Footer />
    </>
    );
}
