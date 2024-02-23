import React, { useState } from 'react';
import { Typography, Container, TextField, Select, MenuItem, InputLabel, Grid, IconButton } from '@mui/material';
import { Header, Section, Footer, MediaList, FilterBar } from '../components';
import { useSelector } from 'react-redux';
import moment from"moment";

export default function Home() {
    const mediaList = useSelector(state => state.media.mediaList);
    const mediaListTypes = useSelector(state => state.media.mediaTypes);
    
    const [searchTerm, setSearchTerm] = useState('');
    const [searchDate, setSearchDate] = useState('');
    const [searchType, setSearchType] = useState('');

    const filteredMediaList = mediaList.filter(media => {
        const filterTitle = media.title.toLowerCase().includes(searchTerm.toLowerCase());
        const filterCreationDate = searchDate ? moment(media.creationDate).format('YYYY-MM-DD') === searchDate : true;
        const filterTypeId = searchType ? media.typeId === searchType : true;
        return filterTitle && filterCreationDate && filterTypeId;
    });

    return (
        <>
            <Header />

            <Section sx={{ marginTop: `10em`, marginBottom: '10em' }}>

                <Typography variant="h2" gutterBottom >
                    Bienvenid@ a tu biblioteca virtual.
                </Typography>
                <Typography variant="h5" style={{ margin: '1em' }}>
                    Aquí puedes gestionar y visualizar tus recursos multimedia digitales.
                </Typography>

                <Container sx={{ margin: 5, }}>
                    <FilterBar
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        searchDate={searchDate}
                        setSearchDate={setSearchDate}
                        searchType={searchType}
                        setSearchType={setSearchType}
                        mediaListTypes={mediaListTypes}
                    />
                </Container>


                <MediaList mediaList={filteredMediaList} />
            </Section>

            <Footer />
        </>
    );
}
