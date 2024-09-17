import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardContent, CardActions, Button, CardActionArea, CardMedia } from '@mui/material';
import './App.css'
import treeImage from '../src/assets/tree.png';

const HomePage = () => {
  return (
    <div>
      {/* Nav bar */}
      <AppBar position="static" sx={{ backgroundColor: 'var(--accent2)', color: 'var(--text)' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center', userSelect: 'none' }}>
            Ant Labs
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main container */}
      <Container sx={{ paddingTop: 4, marginLeft: 0, maxWidth: '100%' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ backgroundColor: 'var(--accent2)', color: 'var(--text)'}} >
              <CardActionArea component="a" href="https://labs.antknt47.com/ant-visual-tree" target="_blank" rel="noopener noreferrer" sx={{ '&:hover': { backgroundColor: 'var(--accent2)', color: 'var(--text)' } }}>
                <CardContent >
                  <Typography variant="h5" component="div">
                    Ant Visual Tree
                  </Typography>
                  <Typography variant="body2" color='var(--accent3)'>
                    二叉树可视化工具
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  height="140"
                  image={treeImage}
                  alt="Ant visual tree"
                  sx={{ objectFit: 'contain', width: '100%', paddingBottom: '10px'}}
                />
              </CardActionArea>              
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
