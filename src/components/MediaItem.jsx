import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import '../style/MediaItem.css';
import moment from"moment";

export const MediaItem = ({media}) => {
// debugger;
  return (
    <Grid className='cnt-card-2' item xs={12} sm={6} md={4} lg={3}>
      <Card className='cnt-card-1'>
        <CardMedia
        component="img"
        // height="200"
        image={media.imageUrl}
        alt={media.title}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {media.title}
        </Typography>
        <Typography variant="h6" color='success' >{media.typeId}</Typography>
        <Typography variant="p" >
          Añadido el {moment(media.creationDate).format('DD/MM/YYYY')}
        </Typography>
      </CardContent>
      </Card>
    </Grid>
  )}
