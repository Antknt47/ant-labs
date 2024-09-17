import React from 'react';
import { Card, CardContent, CardActionArea, CardMedia, Typography } from '@mui/material';

const CardItem = ({ title, description, image, link }) => {
  return (
    <Card sx={{ backgroundColor: 'var(--accent2)', color: 'var(--text)' }}>
      <CardActionArea component="a" href={link} target="_blank" rel="noopener noreferrer" sx={{ '&:hover': { backgroundColor: 'var(--accent2)', color: 'var(--text)' } }}>
        <CardMedia
          component="img"
          height="140px"
          width="140px"
          image={image}
          alt={title}
          sx={{ objectFit: 'contain', width: '100%', paddingTop: '10px', alignItems: 'center' }}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="var(--accent3)">
            {description}
          </Typography>
        </CardContent>
        
      </CardActionArea>
    </Card>
  );
};

export default CardItem;
