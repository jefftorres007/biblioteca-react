import React, { useState } from 'react';
import { Typography, Container, TextField } from '@mui/material';
import { Header, Section, Footer, MediaList } from '../components';
import { useSelector } from 'react-redux';
import moment from"moment";

export default function Home() {
    const mediaList = useSelector(state => state.media.mediaList);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchDate, setSearchDate] = useState('');

    // Función para filtrar la lista de medios
    const filteredMediaList = mediaList.filter(media => {

        // debugger;
        // Filtrar por nombre
        const matchesName = media.title.toLowerCase().includes(searchTerm.toLowerCase());
        // Filtrar por fecha
        // const matchesDate = searchDate ? media.creationDate.toDateString() === searchDate : true;
        const matchesDate = searchDate ? moment(media.creationDate).format('YYYY-MM-DD') === searchDate : true;

        // Devolver verdadero si el medio coincide con el término de búsqueda y la fecha (si se proporciona)
        return matchesName && matchesDate;
    });

    return (
        <>
            <Header />
            <Section dataStyle={{ marginTop: `10em`, marginBottom: '10em' }}>
                <Typography variant="h2" gutterBottom >
                    Bienvenid@ a tu biblioteca virtual.
                </Typography>
                <Typography variant="h5" style={{ margin: '1em' }}>
                    Aquí puedes gestionar y visualizar tus recursos multimedia digitales.
                </Typography>
                <Container sx={{ m: 2 }}>
                    <TextField
                        label="Buscar por nombre"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        variant="outlined"
                        style={{ marginRight: '1em' }}
                    />
                    {/* Input de fecha */}
                    <input
                        type="date"
                        value={searchDate}
                        onChange={(e) => setSearchDate(e.target.value)}
                        style={{
                            padding: '10px',
                            borderRadius: '4px',
                            border: '1px solid #ccc',
                            fontSize: '16px',
                            fontFamily: 'inherit',
                            width: '200px',
                        }}
                    />
                </Container>
                {/* Lista de medios filtrados */}
                <MediaList mediaList={filteredMediaList} />
            </Section>
            <Footer />
        </>
    );
}
