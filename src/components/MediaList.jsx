import { Grid } from '@mui/material';
import React from 'react';
import { MediaItem } from './MediaItem';

export const MediaList = ({mediaList}) => {


    return (
        <Grid container spacing={3}>
            {mediaList.map(media => (
                <MediaItem key={media.id} media={media} />
            ))}
        </Grid>
    )}
