

import React from 'react';

import '../style/ViewItem.css';
import { Header,Section,Footer, MediaItem } from '../components';
import { Typography } from '@mui/material';

export default function ViewItem() {
    return (


        <>
            <Header /> 

            <Section dataStyle={{marginTop:`10em`,marginBottom:'10em'}}>
                <Typography>view item</Typography>
                {/* <MediaItem></MediaItem> */}

            </Section>


            <Footer />
        </>
    );
}

