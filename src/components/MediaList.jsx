import { Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import React from 'react';

export const MediaList = ({mediaList}) => {


    return (
    <Grid container spacing={3}>
    {mediaList.map(media => (
        <Grid item key={media.id} xs={12} sm={6} md={4} lg={3}>
            <Card>
                <CardMedia
                component="img"
                height="200"
                image={media.imageUrl}
                alt={media.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {media.title}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    ))}
    </Grid>
    )
}
