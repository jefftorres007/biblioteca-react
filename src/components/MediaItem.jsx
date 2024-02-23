import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import '../style/MediaItem.css';
import moment from"moment";
import { mediaTypesDictionary } from '../store/store.js';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext.jsx';



export const MediaItem = ({media}) => {
  const navigate = useNavigate();
  const mediaTypeName = mediaTypesDictionary[media.typeId];
  const { darkMode } = useDarkMode();

  const handleEditItem = () => {
    navigate(`/nuevo?id=${media.id}`);
  }
  return (

    <Grid className={`cnt-card-2 `} item xs={12} sm={6} md={4} lg={3}>

      <Card className={`cnt-card-1 cnt-card-2-${darkMode ? 'dark' : 'clear'}`}>
        <CardMedia
        component="img"
        image={media.imageUrl}
        alt={media.title}
        />
        <CardContent>
          <EditCalendarIcon sx={{cursor:'pointer'}} titleAccess='Editar' onClick={handleEditItem} ></EditCalendarIcon>
          <Typography gutterBottom variant="h5" component="div">
          {media.title}
          </Typography>
          <Typography variant="h6" color='secondary' >{mediaTypeName}</Typography>
          <Typography variant="p" >
            Añadido el {moment(media.creationDate).format('DD/MM/YYYY')}
          </Typography>
          
        </CardContent>
      </Card>
    </Grid>
  )}
