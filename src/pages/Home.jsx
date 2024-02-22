import React, { useState } from 'react';
import { Typography, Container, TextField, Select, MenuItem, InputLabel, Grid, IconButton } from '@mui/material';
import { Header, Section, Footer, MediaList, FilterBar } from '../components';
import { useSelector } from 'react-redux';
import moment from"moment";
import ClearIcon from '@mui/icons-material/Clear';

export default function Home() {
    const mediaList = useSelector(state => state.media.mediaList);
    const mediaListTypes = useSelector(state => state.media.mediaTypes);
    
    const [searchTerm, setSearchTerm] = useState('');
    const [searchDate, setSearchDate] = useState('');
    const [searchType, setSearchType] = useState('');

    const inputLabelProps={
        shrink: true,
    };

    const filteredMediaList = mediaList.filter(media => {



        const filterTitle = media.title.toLowerCase().includes(searchTerm.toLowerCase());
        const filterCreationDate = searchDate ? moment(media.creationDate).format('YYYY-MM-DD') === searchDate : true;
        const filterTypeId = searchType ? media.typeId === searchType : true;

        // Devolver verdadero si el medio coincide con el término de búsqueda y la fecha (si se proporciona)
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
                

                {/* <FilterBar /> */}





                <Container sx={{ margin: 5, }}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} sm={4}>
                            <TextField
                                label="Buscar por nombre"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                variant="outlined"
                                fullWidth
                                // style={{ marginBottom: '1em' }}
                                InputLabelProps={inputLabelProps}
                                InputProps={{
                                    startAdornment: (
                                        <IconButton color='error' onClick={() => setSearchTerm('')} size="small">
                                            <ClearIcon />
                                        </IconButton>
                                    )
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>

                            <TextField
                                label="Buscar por fecha de creación"
                                value={searchDate}
                                // value=''
                                onChange={(e) => setSearchDate(e.target.value)}
                                type="date"
                                fullWidth
                                InputLabelProps={inputLabelProps}
                                InputProps={{
                                    startAdornment: (
                                        <IconButton color='error' onClick={() => setSearchDate('')} size="small">
                                            <ClearIcon />
                                        </IconButton>
                                    )
                                }}
                            />
                            
                        </Grid>
                        <Grid item xs={12} sm={4}>

                            <TextField
                                label="Buscar por tipo"
                                placeholder="Tipo de medio"
                                select
                                fullWidth
                                onChange={(e) => setSearchType(e.target.value)}
                                InputLabelProps={inputLabelProps}
                                InputProps={{
                                    startAdornment: (
                                        <IconButton color='error' onClick={() => setSearchType('')} size="small">
                                            <ClearIcon />
                                        </IconButton>
                                    )
                                }}
                            >
                                {mediaListTypes.map((mediaType) => (
                                    <MenuItem 
                                        key={mediaType.typeId} 
                                        value={mediaType.typeId}>

                                    {mediaType.name}
                                    </MenuItem>
                                ))}

                            </TextField>
                        </Grid>
                    </Grid>
                </Container>


        <MediaList mediaList={filteredMediaList} />
            </Section>

            <Footer />
        </>
    );
}
