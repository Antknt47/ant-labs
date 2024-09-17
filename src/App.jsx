import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardContent, CardActions, Button, CardActionArea, CardMedia } from '@mui/material';
import './App.css'
import CardItem from './components/CardItem';
import treeImage from '../src/assets/tree.png';
import detectSvg from '../src/assets/detect.svg';

const cardItems = [
  {
    title: "🔍🐜Ant Find",
    description: "图像检测Demo",
    image: detectSvg,
    link: "https://labs.antknt47.com/ant-find/",
  },
  {
    title: "Ant Visual Tree",
    description: "二叉树可视化工具",
    image: treeImage,
    link: "https://labs.antknt47.com/ant-visual-tree",
  },
];

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
        {cardItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CardItem 
              title={item.title}
              description={item.description}
              image={item.image}
              link={item.link}
            />
          </Grid>
        ))}
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
