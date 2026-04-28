
import { Box, ChakraProvider } from '@chakra-ui/react';
import './App.css';
import "./index.css";
import AboutSection from './Components/AboutSection';
import Header from './Components/Header';
import HomeSection from './Components/HomeSection';
import Footer from './Components/Footer';
import ProjectsSection from './Components/ProjectsSection';
import Alert from './Components/Alert';
import { AlertProvider } from './context/alertContext';




function App() {
  return (
    
      <AlertProvider>
        <Box
          minH="100vh"
          bgGradient="linear(to-b, #030303, #5c5c5c, #0f0f0f)"
        >
          <Header />
          <HomeSection />
          <AboutSection />
          <ProjectsSection />
          <Footer />
          <Alert /> 
        </Box>
      </AlertProvider>
    
  );
}





export default App;
