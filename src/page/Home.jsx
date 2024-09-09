
import React from 'react'
import Navbar from '../Component/Navbar'
import './stylee/home.css'
import Sumary from './Sumary'
import About from './About'
import Work from './Work'


const Home = () => {
return (
    <div>
        <div className='HeaderContainer'>
            <Navbar />
        </div>
        <div className='Containerconten'> 
            <Sumary/> 
        </div>
        <div className='Containerconten'> 
            <About/>
        </div>
        <div className='Containerwork'>
            <Work/>
        </div>
    </div>
)
}

export default Home