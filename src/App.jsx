import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Button, Menu, MenuItem, Box } from '@mui/material';
import './App.css';
import CardItem from './components/CardItem';
import treeImage from '../src/assets/tree.png';
import detectSvg from '../src/assets/detect.svg';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';

const cardItems = [
  {
    title: "Ant Find",
    description: "Image Detection Demo",
    image: detectSvg,
    link: "https://labs.antknt47.com/ant-find/",
  },
  {
    title: "Ant Visual Tree",
    description: "Binary Tree Visualization Tool",
    image: treeImage,
    link: "https://labs.antknt47.com/ant-visual-tree",
  },
];

const App = () => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    handleClose();
  };

  return (
    <div>
      {/* Nav bar */}
      <AppBar position="static" sx={{ backgroundColor: 'var(--accent2)', color: 'var(--text)' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center', userSelect: 'none' }}>
            Ant Labs
          </Typography>

          {/* Language Switcher */}
          <Box sx={{ position: 'absolute', right: 16 }}>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              color="inherit"
            >
              🌐{t('Language')}
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => changeLanguage('en-US')}>English</MenuItem>
              <MenuItem onClick={() => changeLanguage('zh-CN')}>中文</MenuItem>
              <MenuItem onClick={() => changeLanguage('ja-JP')}>日本語</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main container */}
      <Container sx={{ paddingTop: 4, marginLeft: 0, maxWidth: '100%' }}>
        <Grid container spacing={4}>
          {cardItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CardItem
                title={t(item.title)}
                description={t(item.description)}
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

export default App;
