import React from 'react'
import ContactCard from '../components/Data/Contact/ContactCard';
import { Box } from '@mui/system';
import NavBar from '../components/Tools/Navbar/Navbar';
import Footer from '../components/Tools/Footer/Footer';

function Contact() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <NavBar/>
      <ContactCard/>
      <Footer/>
    </Box>
      
  )
}

export default Contact;