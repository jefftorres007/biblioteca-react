import React from 'react';
import { TextField, MenuItem, IconButton, Grid } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

export const FilterBar = ({
    searchTerm,
    setSearchTerm,
    searchDate,
    setSearchDate,
    searchType,
    setSearchType,
    mediaListTypes
}) => {
    const inputLabelProps = {
        shrink: true,
    };

    return (
        <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={4}>
                <TextField
                    label="Buscar por nombre"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    variant="outlined"
                    fullWidth
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
                    value={searchType}
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
    );
}

// export default FilterBar;
