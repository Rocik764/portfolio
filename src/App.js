import {React } from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import MyNavbar from './components/navbar/MyNavbar'
import Header from './components/home/Header'
import AboutMe from './components/about_me/AboutMe'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'

function App() {

  return (
    <>
        <MyNavbar/>
        <Header/>
        <AboutMe/>
        <Projects/>
        <Contact/>
    </>
  );
}

export default App;
