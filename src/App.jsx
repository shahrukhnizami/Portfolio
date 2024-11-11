import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Chip,
  Box,
  IconButton,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  const projects = [
    {
      title: 'E-commerce Site',
      description: 'A full-stack e-commerce platform built with React and Node.js',
      uRL: 'https://ecommerce-shop-murex-theta.vercel.app/',
      image: 'https://firebasestorage.googleapis.com/v0/b/ecommerce-be2dc.appspot.com/o/products%2FE-commerce2.PNG?alt=media&token=1836947b-e22f-447c-bd8a-cfca43d3a301',
    },
    {
      title: 'Weather App',
      description: 'A weather application using OpenWeatherMap API and React',
      uRL: 'https://shahrukhnizami.github.io/Weather_App/',
      image: 'https://firebasestorage.googleapis.com/v0/b/ecommerce-be2dc.appspot.com/o/products%2FWeather-app.PNG?alt=media&token=e50185ac-d0c7-47e3-9422-d90d1f09f524',
    },
    {
      title: 'POS App',
      description: 'Create Admin Panel UI and UX with Google Firebase',
      uRL: 'https://pos-xi-seven.vercel.app/',
      image: 'https://firebasestorage.googleapis.com/v0/b/ecommerce-be2dc.appspot.com/o/products%2FPOS.PNG?alt=media&token=5d49acf2-d119-4716-b409-fe07697c7043',
    },
    {
      title: 'Todo App',
      description: 'Create Todo App with Google Firebase',
      uRL: 'https://shahrukhnizami.github.io/Todo_App/',
      image: 'https://firebasestorage.googleapis.com/v0/b/ecommerce-be2dc.appspot.com/o/products%2FTodo.PNG?alt=media&token=917ae116-b87d-4798-a58d-e33bbda60461',
    },
    {
      title: 'Responsive Ecommerce',
      description: 'Create a responsive web for ecommerce with HTML and CSS',
      uRL: 'https://shahrukhnizami.github.io/Etsy/',
      image: 'https://firebasestorage.googleapis.com/v0/b/ecommerce-be2dc.appspot.com/o/products%2Fresponsive.PNG?alt=media&token=86d60cc8-ba53-49a8-9ed6-94e3b75fdbd9',
    },
  ];

  const skills = ['React', 'Node.js', 'JavaScript', 'HTML', 'CSS', 'Git', 'Responsive Design', 'RESTful APIs'];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        {/* App Bar */}
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Shahrukh Nizami
            </Typography>
            <Typography variant="subtitle1">Web Developer</Typography>
          </Toolbar>
        </AppBar>

        <Container maxWidth="lg" sx={{ mt: 4 }}>
          {/* About Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1">
              I'm a passionate web developer with experience in React, Node.js, and modern web technologies. I love
              creating responsive and user-friendly web applications.
            </Typography>
          </Box>

          {/* Projects Section */}
          {/* Projects Section */}
<Typography variant="h4" gutterBottom>
  Projects
</Typography>
<Box
  sx={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 4,
  }}
>
  {projects.map((project, index) => (
    <Card key={index} sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="200"
        image={project.image}
        alt={`${project.title} screenshot`}
      />
      <CardContent>
        <Typography variant="h5">{project.title}</Typography>
        <Typography variant="body2">{project.description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          href={project.uRL}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </Button>
      </CardActions>
    </Card>
  ))}
</Box>


          {/* Skills Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" gutterBottom>
              Skills
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {skills.map((skill, index) => (
                <Chip key={index} label={skill} />
              ))}
            </Box>
          </Box>

          {/* Contact Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" gutterBottom>
              Contact Me
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton aria-label="GitHub" color="inherit">
                <GitHub />
              </IconButton>
              <IconButton aria-label="LinkedIn" color="inherit">
                <LinkedIn />
              </IconButton>
              <IconButton aria-label="Email" color="inherit">
                <Email />
              </IconButton>
            </Box>
          </Box>
        </Container>

        {/* Footer */}
        <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
          <Typography variant="body2" color="text.secondary" align="center">
            © 2023 Shahrukh Nizami. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
