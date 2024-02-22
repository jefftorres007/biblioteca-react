import { Container, Grid,  MenuItem,  TextField } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export const FilterBar = () => {

    const inputProps={
        shrink: true,
    };
    const mediaListTypes = useSelector(state => state.media.mediaTypes);
    
    const [searchTerm, setSearchTerm] = useState('');
    const [searchDate, setSearchDate] = useState('');


    // const filteredMediaList = mediaList.filter(media => {

    //     // debugger;

    //     const filterTitle = media.title.toLowerCase().includes(searchTerm.toLowerCase());
    //     const filterCreationDate = searchDate ? moment(media.creationDate).format('YYYY-MM-DD') === searchDate : true;

    //     // Devolver verdadero si el medio coincide con el término de búsqueda y la fecha (si se proporciona)
    //     return filterTitle && filterCreationDate;
    // });

    return (
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
                        InputLabelProps={inputProps}
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
                        InputLabelProps={inputProps}
                    />
                    
                </Grid>
                <Grid item xs={12} sm={4}>

                    <TextField
                        label="Buscar por tipo"
                        placeholder="Tipo de medio"
                        select
                        fullWidth
                        InputLabelProps={inputProps}
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
    )}
