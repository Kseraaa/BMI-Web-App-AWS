import React from 'react'
import NavBar from '../components/Tools/Navbar/Navbar'
import Footer from '../components/Tools/Footer/Footer';
import HomeCard from '../components/Data/Home/HomeCard';
function Home() {
  return (
    <div>
      <NavBar />
      <HomeCard />
      <Footer />
    </div>
  )
}

export default Home;