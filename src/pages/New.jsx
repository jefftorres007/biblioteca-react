import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from "moment";
import { Button, Container, Grid, MenuItem, TextField, Typography, Snackbar } from '@mui/material';
import { addNewRecord, deleteRecord, updateRecord } from '../store/store';
import { Footer, Header, Section } from '../components';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, useSearchParams  } from 'react-router-dom';

import { getItemById } from '../store/store';

export const New = () => {
    const [searchParams] = useSearchParams();
    const idEdit = searchParams.get('id');
    
    const itemMedia = useSelector(state => getItemById(state, idEdit));
    
    const isEdit = (!!idEdit && !!itemMedia);
    const isEditErr = (!!idEdit && !itemMedia);

    
    const [showMessage, setShowMessage] = useState(false);
    const [showMessageDelete, setShowMessageDelete] = useState(false);

    const mediaListTypes = useSelector(state => state.media.mediaTypes);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    //El estado inicial del formulario depende si es un registro que está editando o si lo está creando nuevo
    const [formData, setFormData] = useState({
        id: !isEdit ? uuidv4() : itemMedia.id,
        title: !isEdit ? '' : itemMedia.title,
        imageUrl: !isEdit ? '' : itemMedia.imageUrl,
        typeId: !isEdit ? '' : itemMedia.typeId,
        creationDate: !isEdit ? moment(new Date()).format('YYYY-MM-DD') : itemMedia.creationDate
    });

    const getImageUrlByTypeId = (typeId) => {
        switch (typeId) {
            case 1:
                return "./src/assets/type-movie.png";
            case 2:
                return "./src/assets/type-series.png";
            case 3:
                return "./src/assets/type-videogame.png";
            case 4:
                return "./src/assets/type-ebook.png";
            default:
                return "";
        }
    };

    // rellenamos imageUrl en automático dependiendo del tipo seleccionado
    useEffect(() => {

        const selectedType = mediaListTypes.find(type => type.typeId === formData.typeId);
        if (selectedType) {

            const imageUrl = getImageUrlByTypeId(selectedType.typeId);
            setFormData(prevState => ({
                ...prevState,
                imageUrl: imageUrl
            }));
        }
    }, [formData.typeId, mediaListTypes]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleDeleteItem = (e) => {
        e.preventDefault();
        dispatch(deleteRecord(formData));
        setShowMessageDelete(true); 
        setTimeout(() => {
            navigate('/');
        }, 10);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (idEdit) {
            dispatch(updateRecord(formData));
        } else {
            dispatch(addNewRecord(formData));
        }
        setShowMessage(true); 
        setTimeout(() => {
            navigate('/');
        }, 1000);
    };

    return (
        <>
            <Header />

            <Section>
                {(isEditErr) ? <Typography variant='h4'>No se ha encontrado el medio con el id "{idEdit}"</Typography>
                :
                    <Container maxWidth="sm">
                        <Typography variant="h4" gutterBottom>
                            {idEdit ? 'Editar Registro' : 'Nuevo Registro'} 
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        required
                                        label="Título"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} display={'block'}>
                                <TextField
                                    fullWidth
                                    disabled
                                    label="Imagen URL"
                                    name="imageUrl"
                                    value={formData.imageUrl}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Tipo"
                                    required
                                    select
                                    name="typeId"
                                    value={formData.typeId}
                                    onChange={handleChange}
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
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    type="date"
                                    disabled
                                    label="Fecha de Creación"
                                    name="creationDate"
                                    value={formData.creationDate}
                                    onChange={handleChange}
                                />
                            </Grid>
                                
                            <Grid item xs={12} >
                                <Button  fullWidth variant="contained" color="primary" type="submit">
                                    {idEdit ? 'Modificar' : 'Crear medio'}
                                </Button>    
                            </Grid>
                            
                            {idEdit && 
                                <Grid item xs={12}>
                                    <Button fullWidth variant="contained" color="error" type="button" onClick={handleDeleteItem}>
                                        Eliminar
                                    </Button>
                                </Grid>
                            }

                            </Grid>
                        </form>
                    </Container>
                }
            </Section>
            <Snackbar
                open={showMessage}
                autoHideDuration={3000} 
                onClose={() => setShowMessage(false)}
                message={idEdit ? 'Registro editado correctamente' : 'Registro añadido correctamente, será redirigido a la página principal'} 
            />

            <Snackbar
                open={showMessageDelete}
                autoHideDuration={3000} 
                onClose={() => setShowMessageDelete(false)}
                message={'Registro eliminado correctamente, será redirigido a la página principal'} 
            />


            <Footer />
        </>
    );
};
