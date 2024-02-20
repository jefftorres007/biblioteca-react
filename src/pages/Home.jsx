import React from 'react';
import { Typography} from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MediaList } from '../components/MediaList';

export default function Home() {
    
    const mediaList = [
    { id: 1, title: "Película 1", imageUrl: "https://via.placeholder.com/150" },
    { id: 2, title: "Película 2", imageUrl: "https://via.placeholder.com/150" },
    { id: 3, title: "Película 3", imageUrl: "https://via.placeholder.com/150" },

    ];

    return (
    <>
        <Header /> 

        
            <Typography variant="h2" gutterBottom style={{ padding: '20px' ,marginTop:'1em'}}>
                Bienvenid@ a tu videoteca virtual
            </Typography>

            <MediaList mediaList={mediaList}/>

        <Footer />
    </>
    );
}
